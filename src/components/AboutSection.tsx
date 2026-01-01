import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Cloud } from "lucide-react";
import jsPDF from 'jspdf';
const AboutSection = () => {
  const handleDownloadResume = () => {
    const pdf = new jsPDF();
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      // Calculate dimensions to fit the page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgAspectRatio = img.width / img.height;
      const pdfAspectRatio = pdfWidth / pdfHeight;
      let finalWidth = pdfWidth;
      let finalHeight = pdfHeight;
      if (imgAspectRatio > pdfAspectRatio) {
        finalHeight = pdfWidth / imgAspectRatio;
      } else {
        finalWidth = pdfHeight * imgAspectRatio;
      }
      pdf.addImage(imgData, 'JPEG', 0, 0, finalWidth, finalHeight);

      // Open in new tab
      const pdfOutput = pdf.output('bloburl');
      window.open(pdfOutput, '_blank');
    };
    img.src = '/lovable-uploads/d82d6619-34f5-4494-9a5f-c42edf85f3ee.png';
  };
  const features = [{
    title: "Frontend Development",
    description: "Building end-to-end web applications with modern technologies and cloud integration.",
    icon: Code
  }, {
    title: "AI & Cloud Technologies",
    description: "Exploring AI applications and cloud-based solutions for scalable software development.",
    icon: Cloud
  }];
  const education = [{
    degree: "Bachelor of Technology (B.Tech) - Computer Engineering",
    school: "A. G. Patil Institute of Technology, Solapur",
    period: "Nov 2022 - Present",
    cgpa: "Ongoing"
  }, {
    degree: "XII (State Board)",
    school: "Shri Sangameshwar Autonomous College, Solapur",
    period: "Aug 2020 - Mar 2022",
    cgpa: "68.33%"
  }];
  return <section id="about" className="section-padding grid-background overflow-hidden relative py-20 lg:py-28">
      <div className="section-container mx-[35px]">
        <div className="space-y-12 lg:space-y-20">
          {/* About Me */}
          <div className="space-y-6">
            <h2 className="heading-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">Computer Engineering student at A.G. Patil Institute of Technology, Solapur with expertise in Java, Python, and C/C++. Passionate about full-stack web development, AI technologies, and cloud computing. Experienced in building collaborative web applications and data analysis tools with a strong foundation in object-oriented programming and data structures. I explore concepts in entrepreneurship, AI and Software Engineering.</p>
            <Button variant="cta" size="cta" className="mt-4 rounded-2xl" onClick={handleDownloadResume}>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => <Card key={index} className="p-5 lg:p-6 hover:shadow-lg smooth-transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="subheading-text">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;