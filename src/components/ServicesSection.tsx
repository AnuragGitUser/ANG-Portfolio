import { Card } from "@/components/ui/card";
const ServicesSection = () => {
  const services = [{
    title: "Full Stack Development",
    description: "End-to-end development of robust and scalable web applications using modern technologies and best practices.",
    icon: "🚀"
  }, {
    title: "UI Design",
    description: "Clean, intuitive, and user-friendly interfaces that provide exceptional user experiences across all devices.",
    icon: "🎨"
  }, {
    title: "Web Design",
    description: "Modern, responsive designs optimized for performance and accessibility, ensuring an optimal user experience.",
    icon: "💡"
  }];
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive development solutions to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;