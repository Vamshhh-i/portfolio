import { Card } from "@/components/ui/card";
import { Code, Coffee, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Building web applications with modern technologies"
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Focused on delivering high-quality, scalable solutions"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Always exploring new technologies and best practices"
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Collaborative approach to problem-solving"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through code
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm Vamshi, a passionate Full Stack Developer skilled in 
                building dynamic and scalable web applications. 
                My journey began with curiosity about how software works, and 
                it has grown into a love for creating solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in Python, modern JavaScript frameworks (React, Next.js),
                database management, and cloud deployment. Beyond coding,
                I enjoy exploring new technologies, developing small projects, and
                continuously learning to stay ahead in the fast-evolving tech world.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to contribute to innovative projects that have a meaningful 
                impact while growing as a developer. I believe in the power of collaboration and 
                enjoy working with teams to build high-quality software that users love.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 glass-effect hover-glow transition-all duration-300 hover:scale-105 border-primary/20"
                >
                  <div className="mb-4">
                    <highlight.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;