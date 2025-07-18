import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

load_dotenv()

app = Flask(__name__)
CORS(app)

# Rate Limiting (20 requests per minute per IP)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["20 per minute"]
)

# Gemini API Setup
API_KEY = os.getenv("GEMINI_API_KEY")
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

SYSTEM_PROMPT = (
    "You are Noyra, an AI learning assistant. "
    "ONLY respond to educational queries such as study help, academic questions, or productivity tips. "
    "If asked non-educational things, reply: "
    "'I'm here to help only with educational topics. Please ask me about learning or studies.'"
)

@app.route("/api/chat", methods=["POST"])
@limiter.limit("20 per minute")
def chat():
    data = request.get_json()
    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({"reply": "Please send a valid message."})

    # Handle special case: developer info
    if "who developed you" in user_message.lower():
        return jsonify({"reply": "I was developed by Lava Kumar."})

    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY
    }

    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": f"{SYSTEM_PROMPT}\n\nUser: {user_message}"
                    }
                ]
            }
        ]
    }

    try:
        response = requests.post(API_URL, headers=headers, json=payload, timeout=10)
        response.raise_for_status()
        data = response.json()

        reply = data['candidates'][0]['content']['parts'][0]['text']

        return jsonify({"reply": reply})

    except requests.exceptions.HTTPError as http_err:
        print("HTTP Error:", http_err)
        return jsonify({"reply": "⚠️ API Error: Unable to process your request."})

    except requests.exceptions.Timeout:
        print("Timeout Error")
        return jsonify({"reply": "⚠️ Request timed out. Please try again later."})

    except Exception as e:
        print("Unexpected Error:", e)
        return jsonify({"reply": "⚠️ Something went wrong. Please try again later."})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Use Render's PORT
    app.run(host="0.0.0.0", port=port)
