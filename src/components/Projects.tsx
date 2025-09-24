import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.png";
import taskManagerImg from "@/assets/project-taskmanager.png";
import analyticsImg from "@/assets/project-analytics.png";
import learningImg from "@/assets/project-learning.png";
import learningImg1 from "@/assets/project-learning1.png";

const Projects = () => {
  const projects = [
    {
  title: "Full-Stack E-Commerce Web Application",
  description: "A fully functional e-commerce platform featuring user authentication, shopping cart, and payment integration. Backend deployed on AWS EC2 with MySQL RDS, optimized for performance and scalability.",
  image: ecommerceImg,
  technologies: ["Flask", "React", "MySQL", "AWS", "SMTP"],
  liveUrl: "#",
  githubUrl: "https://github.com/vamshhh-i",
  featured: true
},
{
  title: "Metro Origin-Destination Prediction",
  description: "A deep learning-based system using Seq2Seq with Dual Information Transformer for metro OD prediction. Built with heterogeneous data, improving prediction accuracy and supporting unfinished trips.",
  image: taskManagerImg,
  technologies: ["Django", "Deep Learning", "Seq2Seq", "HTML", "CSS", "JavaScript"],
  liveUrl: "#",
  githubUrl: "https://github.com/vamshhh-i",
  featured: true
},
{
  title: "Fee Notifier",
  description: "Automated notification system built with Python modules to manage and send fee reminders efficiently.",
  image: analyticsImg,
  technologies: ["Python", "SMTP", "Automation"],
  liveUrl: "#",
  githubUrl: "https://github.com/vamshhh-i/FeeNotifier-using_python_modules",
  featured: false
},
{
  title: "Cars Merchant",
  description: "Web-based car marketplace application enabling users to browse, manage, and trade cars with a streamlined experience.",
  image: learningImg,
  technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
  liveUrl: "https://vamshhh-i.github.io/cars_merchant/",
  githubUrl: "https://github.com/vamshhh-i/cars_merchantcars_merchant",
  featured: false
},
{
  title: "ATM Operations",
  description: "A simulation of core ATM functionalities including account authentication, balance inquiry, cash withdrawal, and deposit operations. Designed to practice secure transaction handling and efficient system flow.",
  image:learningImg1,
  technologies: ["Python", "OOP", "File Handling"],
  liveUrl: "http://kvamshi132.pythonanywhere.com",
  githubUrl: "https://github.com/vamshhh-i/ATM_OPERATIONS",
  featured: false
}


  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden glass-effect hover-glow transition-all duration-500 hover:scale-[1.02] border-primary/20 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 hover-glow"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4 lg:hidden">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg glass-effect"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;