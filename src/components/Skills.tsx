import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
  title: "Programming",
  color: "bg-primary/10 text-primary border-primary/20",
  skills: [
    "Python", "Java", "C", "SQL", "MATLAB", "R"
  ]
},
{
  title: "Web & Frameworks",
  color: "bg-success-green/10 text-success-green border-success-green/20",
  skills: [
    "Flask", "React", "Node.js", "HTML", "CSS", "JavaScript"
  ]
},
{
  title: "Databases",
  color: "bg-tech-purple/10 text-tech-purple border-tech-purple/20",
  skills: [
    "MySQL", "SQLite"
  ]
},
{
  title: "Cloud & Tools",
  color: "bg-warning-orange/10 text-warning-orange border-warning-orange/20",
  skills: [
    "AWS (EC2, RDS, S3)", "Git", "VS Code", "PyCharm"
  ]
},
{
  title: "Data Science & ML",
  color: "bg-info-blue/10 text-info-blue border-info-blue/20",
  skills: [
    "Modeling", "Simulation", "Predictive Analytics", "Large Dataset Management",
    "Machine Learning Algorithms", "Predictive Modeling", "Analytics"
  ]
}

  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-8 glass-effect hover-glow transition-all duration-300 hover:scale-[1.02] border-primary/20"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                  <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`px-3 py-2 text-sm font-medium transition-all hover:scale-105 ${category.color}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Always learning and staying up-to-date with the latest technologies and industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;