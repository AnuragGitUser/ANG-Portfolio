import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import xLogo from "@/assets/x-logo.svg";
const ContactSection = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "anuraggurubhetti@gmail.com",
    href: "mailto:anuraggurubhetti@gmail.com"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anuraggurubhetti",
    href: "https://linkedin.com/in/anuraggurubhetti"
  }, {
    icon: Github,
    label: "GitHub",
    value: "github.com/AnuragGitUser/",
    href: "https://github.com/AnuragGitUser/"
  }, {
    icon: "xLogo",
    label: "X",
    value: "x.com/AnuragNG974",
    href: "https://x.com/AnuragNG974"
  }];
  return <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? Let's discuss how I can help build your next solution.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => {
                return <div key={index} className="cursor-target p-4">
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mt-1 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 ease-in-out">
                            {contact.icon === "xLogo" ? <img src={xLogo} alt="X Logo" className="w-6 h-6 brightness-0 dark:invert group-hover:brightness-0 dark:group-hover:brightness-0 group-hover:invert dark:group-hover:invert-0 transition-all duration-300 ease-in-out" /> : <contact.icon className="w-6 h-6 text-primary group-hover:text-white dark:group-hover:text-black transition-all duration-300 ease-in-out" />}
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium">{contact.label}</p>
                            <p className="text-sm text-muted-foreground break-all leading-relaxed">{contact.value}</p>
                          </div>
                        </div>
                      </a>
                    </div>;
              })}
              </div>
            </div>

            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center pt-12 mt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Anurag Gurubhetti. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>;
};
export default ContactSection;