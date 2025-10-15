import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const skills = {
    "Languages & Frameworks": ["Java", "Spring", "C#", "Python"],
    "Cloud Platforms": ["AWS EC2", "S3", "RDS", "IAM", "Lambda", "CloudFormation"],
    "Development": ["REST APIs", "XML/RPC", "Android", "Microservices"],
    "Middleware & Integration": ["ActiveMQ", "Kannel"],
    "Databases": ["Oracle", "MySQL"],
    "DevOps & Containers": ["Docker", "Kubernetes", "CI/CD"],
    "Security & Networking": ["IAM", "Penetration Testing", "TCP/IP"],
  };

  const projects = [
    {
      title: "Amazon Aegis – Fraud Detection System",
      date: "April 2025",
      description: "Architected and deployed an AWS-powered fraud detection platform for Kenyan financial institutions, delivering 30% reduction in fraud attempts.",
      technologies: ["AWS Lambda", "CloudFormation", "S3", "RDS", "Amazon Fraud Detector", "Python", "REST APIs", "Docker"],
      highlights: [
        "Real-time transaction analysis using AI/ML models",
        "Integration with Core Banking Systems and Mobile Money platforms",
        "Enhanced compliance and customer trust"
      ]
    },
    {
      title: "DSpace Repository Implementation",
      date: "April – May 2024",
      location: "Parliament of Kenya",
      description: "Implemented and customized DSpace v6.3 repository for scalable digital archiving of parliamentary records.",
      technologies: ["DSpace v6.3", "Oracle Database", "Java", "Spring", "Eclipse", "Linux"],
      highlights: [
        "Reduced data retrieval time significantly",
        "Created end-to-end workflows for enterprise integration",
        "Enhanced information accessibility"
      ]
    },
    {
      title: "Koha Library System Deployment",
      date: "February 2023",
      location: "Parliament of Kenya",
      description: "Deployed and configured Koha Integrated Library System for streamlined cataloguing and resource management.",
      technologies: ["Koha ILS", "MySQL", "Perl", "Linux", "Apache Tomcat", "USSD/SMS Gateway"],
      highlights: [
        "Streamlined cataloguing processes",
        "Comprehensive staff training program",
        "Integrated USSD/SMS notifications"
      ]
    },
    {
      title: "Cybersecurity Enhancements",
      date: "February – May 2024",
      location: "Parliament of Kenya",
      description: "Conducted penetration testing and vulnerability assessments to strengthen cybersecurity posture.",
      technologies: ["Metasploit Framework", "Kali Linux"],
      highlights: [
        "Identified and mitigated high-risk vulnerabilities",
        "Improved incident response processes",
        "Detailed risk mitigation strategies"
      ]
    }
  ];

  const experience = [
    {
      title: "Cloud Support Associate Engineer",
      company: "Amazon Web Services (AWS)",
      location: "Nairobi, Kenya",
      period: "February 2025 – May 2025",
      responsibilities: [
        "Troubleshoot and resolve issues related to AWS services (EC2, S3, RDS, IAM)",
        "Analyse cloud environments to optimize performance, reliability, and security",
        "Develop automation scripts to improve operational efficiency",
        "Contribute to AWS documentation and knowledge base"
      ]
    },
    {
      title: "ICT Solutions & Systems Engineer",
      company: "Parliament of Kenya",
      location: "Nairobi, Kenya",
      period: "January 2023 - October 2024",
      responsibilities: [
        "Delivered IT support ensuring high system uptime and performance",
        "Configured DSpace v6.3 for production environments",
        "Implemented Koha Library System and trained staff",
        "Enhanced cybersecurity through penetration testing",
        "Built and maintained front-end and back-end applications"
      ]
    },
    {
      title: "Linux System Administrator",
      company: "Parliamentary Joint Services",
      location: "Nairobi, Kenya",
      period: "2022 - 2023",
      responsibilities: [
        "Administered RHEL and Ubuntu servers for critical operations",
        "Automated tasks with Bash scripting",
        "Managed Apache web services and MySQL databases",
        "Implemented security policies and server monitoring"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "Oracle Multi-cloud Professional",
    "Oracle DevOps Professional"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-24 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Beckham Jossy Onyango
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              Cloud Solutions Architect & IT Professional
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+254706817482" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+254706817482</span>
              </a>
              <a href="mailto:beckhamjossyo@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span>beckhamjossyo@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/beckham-jossy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="lg" className="gap-2" asChild>
                <a href="mailto:beckhamjossyo@gmail.com">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/beckham-jossy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Code className="h-6 w-6 text-accent" />
                Professional Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                IT professional with extensive experience in designing, implementing, and optimizing enterprise
                solutions across public and private sectors. Specialized in cloud computing (AWS), microservices, APIs,
                and event-driven architectures, with strong expertise in containerization (Docker, Kubernetes) and
                enterprise integrations. Skilled in solution design, vendor system evaluation, and alignment with
                architecture best practices. Adept at collaborating with teams, mentoring staff, and driving technology
                adoption to deliver secure, scalable, and business-aligned systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{project.date}</Badge>
                  </div>
                  {project.location && (
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </CardDescription>
                  )}
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="bg-accent text-accent-foreground text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Briefcase className="h-8 w-8 text-accent" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="font-semibold text-foreground">{job.company}</span>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <Separator orientation="vertical" className="h-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Bachelor of Computer Science</h3>
                  <p className="text-muted-foreground">The Nairobi National Polytechnic</p>
                  <p className="text-muted-foreground">Information Communication Technology</p>
                  <Badge className="mt-2">Second Upper Class</Badge>
                  <p className="text-sm text-muted-foreground mt-4">
                    <span className="font-semibold">Relevant Coursework:</span> System Administration, 
                    Software Development, Networking, Cybersecurity, Cloud Computing, Database Management, 
                    Enterprise Architecture, API Design & Integration
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="mb-6 text-primary-foreground/90">
            Interested in collaborating or discussing cloud solutions? Get in touch!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <a href="mailto:beckhamjossyo@gmail.com">
                <Mail className="h-4 w-4" />
                beckhamjossyo@gmail.com
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <a href="tel:+254706817482">
                <Phone className="h-4 w-4" />
                +254706817482
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/beckham-jossy" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Beckham Jossy Onyango. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
