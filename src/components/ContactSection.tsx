import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "katirakunal16@gmail.com",
      href: "mailto:katirakunal16@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9664614937",
      href: "tel:+919664614937"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/katira-kunal",
      href: "https://linkedin.com/in/katira-kunal"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Kunal-1610",
      href: "https://github.com/Kunal-1610"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? Let's discuss how I can help build your next solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="subheading-text">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Whether you have a project in mind or just want to chat about technology, I'm always excited to connect with fellow developers and potential collaborators.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={index} className="p-4 hover:shadow-lg smooth-transition">
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-primary mt-1" />
                          <div className="space-y-1">
                            <p className="font-medium">{contact.label}</p>
                            <p className="text-sm text-muted-foreground">{contact.value}</p>
                          </div>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-32"
                  />
                </div>
                <Button variant="cta" size="cta" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;