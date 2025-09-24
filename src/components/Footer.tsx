import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vamshhh-i",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/katharasala-vamshi-b63202283/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:vamshi19100@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">K Vamshi</h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover-glow transition-all hover:scale-110 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
                © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Vamshi
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-primary mt-8 mb-6"></div>
          
          {/* Bottom text */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS. Hosted on GitHub.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;