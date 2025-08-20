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
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-text">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive development services to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg smooth-transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="subheading-text mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;