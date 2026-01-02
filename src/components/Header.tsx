import { Button } from "@/components/ui/button";
import { Home, User, Wrench, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { icon: Home, href: "#hero", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Wrench, href: "#skills", label: "Skills" },
    { icon: Briefcase, href: "#portfolio", label: "Portfolio" },
    { icon: Mail, href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary">ANG</div>
        </div>

        {/* Icon Navigation */}
        <nav className="flex items-center space-x-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="cursor-target p-2 rounded-lg hover:bg-accent hover:text-accent-foreground smooth-transition"
                title={item.label}
              >
                <Icon size={20} />
              </button>
            );
          })}
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-target ml-2"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};
export default Header;