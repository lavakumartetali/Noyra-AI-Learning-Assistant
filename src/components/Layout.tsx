import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  Menu,
  PanelLeft,
  X,
  LayoutDashboard,
  Info,
  Star,
  HelpCircle,
  Phone,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: "Home", path: "/", icon: LayoutDashboard },
  { name: "About", path: "/about", icon: Info },
  { name: "Features", path: "/features", icon: Star },
  { name: "FAQ", path: "/faq", icon: HelpCircle },
  { name: "Contact", path: "/contact", icon: Phone },
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      {/* ===== Sidebar for Desktop ===== */}
      <aside
        className={cn(
          "hidden md:flex flex-col fixed top-0 left-0 h-screen bg-card/80 border-r border-border backdrop-blur-md shadow-md transition-all duration-300 z-50",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            {!collapsed && (
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Noyra
              </span>
            )}
          </div>
          {!collapsed && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setCollapsed(true)}
                    className="ml-auto p-2 text-muted-foreground hover:text-foreground"
                  >
                    <PanelLeft className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Collapse sidebar</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Links */}
        <nav className="mt-2 space-y-1 px-2">
          {navItems.map(({ name, path, icon: Icon }) => {
            const link = (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                  isActive(path)
                    ? "bg-gradient-primary text-white shadow-primary"
                    : "hover:bg-secondary/40 text-foreground/80",
                  collapsed ? "justify-center px-2" : ""
                )}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && <span>{name}</span>}
              </Link>
            );

            return collapsed ? (
              <TooltipProvider key={path}>
                <Tooltip>
                  <TooltipTrigger asChild>{link}</TooltipTrigger>
                  <TooltipContent side="right" sideOffset={8}>
                    {name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              link
            );
          })}
        </nav>

      </aside>

      {/* ===== Mobile Topbar ===== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between shadow-md">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">Noyra</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground hover:text-primary transition"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* ===== Mobile Drawer ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-card/95 backdrop-blur-md border-r border-border p-4 space-y-2 shadow-lg">
            {navItems.map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                  isActive(path)
                    ? "bg-gradient-primary text-white shadow-primary"
                    : "hover:bg-secondary/40 text-foreground/80"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{name}</span>
              </Link>
            ))}
          </div>
          {/* Click outside to close */}
          <div
            onClick={() => setMobileOpen(false)}
            className="flex-1 bg-black/40"
          />
        </div>
      )}

      {/* ===== Page Content ===== */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          "pt-[60px] md:pt-0 p-4", // padding for mobile topbar
          collapsed ? "md:ml-16" : "md:ml-64"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
