import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Scale, 
  Users, 
  BarChart3, 
  Map, 
  Info, 
  Shield,
  Play,
  FileText,
  MessageSquare
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: "red" | "yellow" | "green" | "blue";
}

const dashboardCards: DashboardCard[] = [
  {
    title: "Play Game",
    description: "Experience Casino UN0 - practice modes and gameplay",
    icon: Play,
    href: "/game",
    color: "red"
  },
  {
    title: "Documentation",
    description: "Explore our business plan, whitepaper, and project history",
    icon: BookOpen,
    href: "/docs",
    color: "blue"
  },
  {
    title: "Community",
    description: "Join discussions, vote on features, and share ideas",
    icon: Users,
    href: "/community",
    color: "green"
  },
  {
    title: "Analytics",
    description: "View platform statistics and anti-cheat monitoring",
    icon: BarChart3,
    href: "/analytics",
    color: "yellow"
  },
  {
    title: "Legal",
    description: "Patents, trademarks, compliance, and licensing info",
    icon: Scale,
    href: "/legal",
    color: "red"
  },
  {
    title: "Roadmap",
    description: "Project milestones and development phases",
    icon: Map,
    href: "/roadmap",
    color: "blue"
  },
  {
    title: "About",
    description: "Meet the team, our mission, and contact information",
    icon: Info,
    href: "/about",
    color: "green"
  },
  {
    title: "Policies",
    description: "Terms of service, privacy policy, and responsible gaming",
    icon: Shield,
    href: "/policies",
    color: "yellow"
  }
];

const getCardStyles = (color: string) => {
  const styles = {
    red: "hover:border-neon-red hover:shadow-neon-red",
    yellow: "hover:border-neon-yellow hover:shadow-neon-yellow",
    green: "hover:border-neon-green hover:shadow-neon-green",
    blue: "hover:border-neon-blue hover:shadow-neon-blue"
  };
  return styles[color as keyof typeof styles] || styles.red;
};

const Dashboard = () => {
  // Generate floating particles
  const [particles, setParticles] = useState<Array<{
    id: number;
    color: string;
    size: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
  }>>([]);

  useEffect(() => {
    const colors = ['red', 'yellow', 'green', 'blue'];
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + 100) % 100,
        y: (particle.y + particle.vy + 100) % 100,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute particle-${particle.color} rounded-full opacity-40`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transition: 'all 0.05s linear',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-muted-foreground/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <Link to="/" className="flex items-center space-x-3 relative">
            {/* UNO Oval Background */}
            <div className="absolute -inset-4 uno-oval rounded-full opacity-30 blur-sm"></div>
            <h1 className="text-3xl font-bold animate-neon-glow relative z-10">
              Casino UN0
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold text-neon-glow animate-neon-glow">
            Welcome to Casino UN0
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our transparent, neon-powered platform where the community can see all our work, 
            play the game, and grow with us. Navigate through our comprehensive ecosystem below.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link key={card.title} to={card.href}>
                <Card className="card-neon group cursor-pointer h-full hover:border-neon-glow transition-all duration-300 hover:shadow-neon-rainbow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 animate-icon-trippy group-hover:scale-110 transition-transform duration-300" />
                      <CardTitle className="text-lg font-semibold group-hover:animate-neon-glow transition-colors">
                        {card.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <h3 className="text-2xl font-bold text-neon-green">Phase 0</h3>
            <p className="text-muted-foreground">Current Development</p>
          </div>
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <h3 className="text-2xl font-bold text-neon-blue">MVP Ready</h3>
            <p className="text-muted-foreground">Game Status</p>
          </div>
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <h3 className="text-2xl font-bold text-neon-yellow">Open Beta</h3>
            <p className="text-muted-foreground">Community Access</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;