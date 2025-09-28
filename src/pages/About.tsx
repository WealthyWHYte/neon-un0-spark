import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Target, 
  Mail,
  ArrowLeft,
  Linkedin,
  Github,
  Twitter,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former senior engineer at major gaming companies with 10+ years experience in platform architecture and transparent systems.",
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Martinez",
      role: "CTO & Lead Developer",
      bio: "Full-stack developer passionate about gaming transparency and community-driven development with expertise in scalable systems.",
      image: "/api/placeholder/150/150", 
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Michael Thompson",
      role: "Head of Security",
      bio: "Cybersecurity expert specializing in gaming anti-cheat systems and fraud prevention with 8+ years industry experience.",
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Elena Rodriguez",
      role: "Community Manager",
      bio: "Gaming community specialist focused on player engagement and transparent communication with deep understanding of gaming culture.",
      image: "/api/placeholder/150/150",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Meet Our Team</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The passionate individuals behind Casino UN0, united by our vision of 
          transparent and community-driven gaming.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <Card key={member.name} className="card-neon">
            <CardHeader className="text-center space-y-4">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto flex items-center justify-center border-2 border-neon-blue">
                <Users className="h-16 w-16 text-neon-blue" />
              </div>
              <div>
                <CardTitle className="text-2xl text-neon-glow">{member.name}</CardTitle>
                <CardDescription className="text-lg text-neon-blue font-semibold">
                  {member.role}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <Button variant="ghost" size="sm" className="text-neon-blue hover:text-neon-blue/80">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                )}
                {member.social.github && (
                  <Button variant="ghost" size="sm" className="text-neon-green hover:text-neon-green/80">
                    <Github className="h-4 w-4" />
                  </Button>
                )}
                {member.social.twitter && (
                  <Button variant="ghost" size="sm" className="text-neon-yellow hover:text-neon-yellow/80">
                    <Twitter className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-3xl font-bold text-neon-red">25+</div>
          <div className="text-sm text-muted-foreground">Combined Years Experience</div>
        </div>
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-3xl font-bold text-neon-green">4</div>
          <div className="text-sm text-muted-foreground">Core Team Members</div>
        </div>
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-3xl font-bold text-neon-blue">24/7</div>
          <div className="text-sm text-muted-foreground">Commitment</div>
        </div>
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-3xl font-bold text-neon-yellow">100%</div>
          <div className="text-sm text-muted-foreground">Transparency</div>
        </div>
      </div>
    </div>
  );
};

const AboutMission = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-neon-glow">Our Mission & Vision</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Casino UN0 exists to revolutionize online gaming through unprecedented transparency, 
          community governance, and player empowerment.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="card-neon max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <Target className="h-16 w-16 text-neon-red mx-auto mb-4" />
          <CardTitle className="text-3xl text-neon-glow">Mission Statement</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            "To create the world's most transparent and community-driven gaming platform, 
            where every player can verify fairness, participate in governance, and experience 
            the future of trustworthy online entertainment."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-neon-blue rounded-full"></div>
              </div>
              <h3 className="font-semibold text-neon-blue">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Complete visibility into game mechanics, algorithms, and platform operations
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-neon-green rounded-full"></div>
              </div>
              <h3 className="font-semibold text-neon-green">Community</h3>
              <p className="text-sm text-muted-foreground">
                Player-driven decisions, community governance, and collaborative development
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-neon-yellow rounded-full"></div>
              </div>
              <h3 className="font-semibold text-neon-yellow">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Cutting-edge technology and features that set new industry standards
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Values */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center text-neon-glow">Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-neon-red">Integrity First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every decision, feature, and interaction is built on a foundation of honesty 
                and ethical practices. We believe trust is earned through consistent transparency.
              </p>
            </CardContent>
          </Card>

          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-neon-blue">Community-Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our platform evolves based on community feedback, voting, and collaborative 
                decision-making. Players aren't just users—they're partners in our journey.
              </p>
            </CardContent>
          </Card>

          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-neon-green">Innovation & Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We continuously push boundaries in gaming technology while maintaining 
                the highest standards of quality, security, and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-neon-yellow">Fair Play Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced anti-cheat systems, verifiable randomness, and transparent 
                algorithms ensure every game is fair for every player, every time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Future Vision */}
      <Card className="card-neon">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-neon-glow">Our Vision for the Future</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-foreground leading-relaxed">
            We envision a gaming ecosystem where transparency isn't revolutionary—it's standard. 
            Where players have meaningful voice in platform development. Where technology serves 
            community rather than profits.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Casino UN0 is just the beginning. We're building the foundation for a new era of 
            gaming that prioritizes player trust, community engagement, and technological innovation 
            in equal measure.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold text-neon-glow">Get In Touch</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Questions, partnerships, or just want to chat about transparent gaming? 
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card className="card-neon">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-glow flex items-center">
              <Mail className="h-6 w-6 mr-3 text-neon-red" />
              Send us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-muted-foreground/30 focus:border-neon-red"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-muted-foreground/30 focus:border-neon-red"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-muted-foreground/30 focus:border-neon-red"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-muted-foreground/30 focus:border-neon-red min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-neon-primary">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Direct Contact */}
          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-xl text-neon-glow">Direct Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon-blue" />
                <div>
                  <div className="font-medium">General Inquiries</div>
                  <div className="text-sm text-muted-foreground">hello@casinouno.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon-green" />
                <div>
                  <div className="font-medium">Partnerships</div>
                  <div className="text-sm text-muted-foreground">partners@casinouno.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon-yellow" />
                <div>
                  <div className="font-medium">Support</div>
                  <div className="text-sm text-muted-foreground">support@casinouno.com</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-xl text-neon-glow">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black flex-1">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
              <Button variant="outline" className="w-full border-neon-red text-neon-red hover:bg-neon-red hover:text-black">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-xl text-neon-glow">Response Times</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>General Inquiries</span>
                  <span className="text-neon-blue">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Partnership Requests</span>
                  <span className="text-neon-green">2-3 business days</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical Support</span>
                  <span className="text-neon-red">Same day</span>
                </div>
                <div className="flex justify-between">
                  <span>Community Issues</span>
                  <span className="text-neon-yellow">Within 12 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">About Casino UN0</span>
          </Link>

          <nav className="flex space-x-6">
            <Link 
              to="/about/team" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/about/team' 
                  ? 'text-neon-blue border-b-2 border-neon-blue' 
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/about/mission"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/about/mission'
                  ? 'text-neon-green border-b-2 border-neon-green'
                  : 'text-muted-foreground hover:text-neon-green'
              }`}
            >
              Mission
            </Link>
            <Link 
              to="/about/contact"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/about/contact'
                  ? 'text-neon-yellow border-b-2 border-neon-yellow'
                  : 'text-muted-foreground hover:text-neon-yellow'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/team" element={<AboutTeam />} />
        <Route path="/mission" element={<AboutMission />} />
        <Route path="/contact" element={<AboutContact />} />
        <Route path="/" element={<AboutTeam />} />
      </Routes>
    </div>
  );
};

export default About;