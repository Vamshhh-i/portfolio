import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="gradient-text">K Vamshi</span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </h2>
          
          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            "I craft scalable applications using Python, Flask, React, and AWS. 
            Passionate about machine learning, cloud deployment, 
            and bringing innovative ideas to life through technology."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg glass-effect"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com" className="p-3 rounded-full glass-effect hover-glow transition-all hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 rounded-full glass-effect hover-glow transition-all hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:vamshi19100@gmail.com" className="p-3 rounded-full glass-effect hover-glow transition-all hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce animate-fade-in" style={{ animationDelay: '1s' }}>
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;