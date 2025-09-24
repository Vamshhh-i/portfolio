import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
  degree: "B.Tech in Computer Science and Engineering",
  school: "St. Martin’s College of Engineering, Hyderabad",
  period: "2022 - 2025",
  description: "Focused on full-stack development, machine learning, and cloud deployment. Worked on projects involving scalable applications and predictive modeling.",
  achievements: ["Hands-on project experience", "Adaptability across roles"],
  skills: ["Python", "Flask", "React", "AWS", "Data Science", "Machine Learning"]
},
{
  degree: "Diploma in Electrical & Electronics Engineering",
  school: "Govt Polytechnic College, Hyderabad",
  period: "2019 - 2022",
  description: "Built a strong foundation in electronics and applied engineering, preparing for transition into computer science.",
  achievements: ["Completed with solid academic performance"],
  skills: ["Electrical Systems", "Circuit Design", "Problem Solving"]
}
  ];

  const certifications = [
    {
  title: "Machine Learning Intern",
  issuer: "DHAAPPS Edutech (OPC) Pvt. Ltd., Hyderabad",
  date: "Apr 2023 – Jun 2023",
  credentialId: "#",
  description: "Designed and evaluated ML models in Python, improving predictive accuracy by 15%. Performed preprocessing, model building, and dataset evaluation."
},
{
  title: "Python Full Stack Trainee",
  issuer: "Codegnan IT Solutions, Hyderabad",
  date: "Dec 2024 – May 2025",
  description: "Trained on Flask, React, MySQL, and AWS through real-world project simulations. Built scalable apps with user authentication, REST APIs, and deployment pipelines."
}

  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card key={index} className="p-8 glass-effect hover-glow transition-all duration-300 border-primary/20">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                        <p className="text-lg text-primary font-medium mb-2">{edu.school}</p>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-medium mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Achievements
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge 
                            key={achIndex}
                            className="bg-success-green/10 text-success-green border-success-green/20"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h5 className="font-medium mb-3">Key Skills Developed</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 glass-effect hover-glow transition-all duration-300 hover:scale-105 border-primary/20">
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="h-3 w-3 mr-2" />
                      {cert.date}
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </p>
                  </Card>
                ))}
              </div>
              
              {/* Additional Learning */}
              <Card className="p-6 mt-6 glass-effect border-primary/20">
                <h4 className="font-semibold mb-3">Continuous Learning</h4>
                <p className="text-muted-foreground text-sm">
                  Regularly updating skills through online courses, tech conferences, 
                  and hands-on projects to stay current with industry trends.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;