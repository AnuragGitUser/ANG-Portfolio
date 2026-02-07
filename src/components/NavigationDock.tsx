import { Home, User, Wrench, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";

const NavigationDock = () => {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { icon: Home, href: "#hero", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Wrench, href: "#skills", label: "Skills" },
    { icon: Briefcase, href: "#portfolio", label: "Portfolio" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <Dock magnification={60} distance={100} direction="bottom">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <DockIcon key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-full rounded-full cursor-target"
                    )}
                  >
                    <Icon className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}
        
        <Separator orientation="vertical" className="h-full" />
        
        {/* Theme Toggle */}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-full rounded-full cursor-target"
                )}
              >
                <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default NavigationDock;
