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
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;