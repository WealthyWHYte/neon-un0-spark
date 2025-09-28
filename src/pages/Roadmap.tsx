import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  ArrowLeft,
  Users,
  Gamepad2,
  Shield,
  Smartphone,
  CreditCard,
  Globe
} from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 0",
    title: "Foundation & MVP",
    description: "Core platform development and initial game implementation",
    status: "completed" as const,
    progress: 100,
    timeframe: "Q4 2023 - Q1 2024",
    features: [
      { name: "Website Platform", completed: true },
      { name: "Game MVP (Practice Mode)", completed: true },
      { name: "Basic Anti-Cheat", completed: true },
      { name: "Documentation System", completed: true },
      { name: "Community Hub", completed: true }
    ]
  },
  {
    phase: "Phase 1",
    title: "Community & Engagement", 
    description: "Enhanced community features and player engagement systems",
    status: "in-progress" as const,
    progress: 75,
    timeframe: "Q1 2024 - Q2 2024",
    features: [
      { name: "Advanced Voting System", completed: true },
      { name: "Player Statistics", completed: true },
      { name: "Achievement System", completed: false },
      { name: "Enhanced Analytics", completed: false },
      { name: "Community Tournaments", completed: false }
    ]
  },
  {
    phase: "Phase 2", 
    title: "Multiplayer & Social",
    description: "Real-time multiplayer gameplay and social features",
    status: "planned" as const,
    progress: 0,
    timeframe: "Q2 2024 - Q3 2024",
    features: [
      { name: "PvP Lobbies", completed: false },
      { name: "Real-time Chat", completed: false },
      { name: "Friend System", completed: false },
      { name: "Discord Integration", completed: false },
      { name: "Spectator Mode", completed: false }
    ]
  },
  {
    phase: "Phase 3",
    title: "Mobile & Accessibility",
    description: "Mobile applications and enhanced accessibility features",
    status: "planned" as const,
    progress: 0,
    timeframe: "Q3 2024 - Q4 2024",
    features: [
      { name: "iOS Mobile App", completed: false },
      { name: "Android Mobile App", completed: false },
      { name: "Cross-Platform Sync", completed: false },
      { name: "Accessibility Features", completed: false },
      { name: "Offline Practice Mode", completed: false }
    ]
  },
  {
    phase: "Phase 4",
    title: "Advanced Features",
    description: "Premium features and advanced gameplay mechanics",
    status: "planned" as const,
    progress: 0,
    timeframe: "Q4 2024 - Q1 2025",
    features: [
      { name: "Premium Tournaments", completed: false },
      { name: "Advanced AI Opponents", completed: false },
      { name: "Custom Game Modes", completed: false },
      { name: "Professional Leagues", completed: false },
      { name: "Streaming Integration", completed: false }
    ]
  },
  {
    phase: "Phase 5",
    title: "Global Expansion",
    description: "International markets and enterprise partnerships",
    status: "planned" as const,
    progress: 0,
    timeframe: "Q1 2025+",
    features: [
      { name: "Multi-language Support", completed: false },
      { name: "Regional Tournaments", completed: false },
      { name: "Casino Partnerships", completed: false },
      { name: "Regulatory Compliance", completed: false },
      { name: "Global Leaderboards", completed: false }
    ]
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed": return <CheckCircle className="h-5 w-5 text-neon-green" />;
    case "in-progress": return <Clock className="h-5 w-5 text-neon-yellow animate-pulse" />;
    case "planned": return <Circle className="h-5 w-5 text-muted-foreground" />;
    default: return <Circle className="h-5 w-5 text-muted-foreground" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "text-neon-green border-neon-green";
    case "in-progress": return "text-neon-yellow border-neon-yellow";
    case "planned": return "text-muted-foreground border-muted-foreground/30";
    default: return "text-muted-foreground border-muted-foreground/30";
  }
};

const getPhaseIcon = (phase: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "Phase 0": Gamepad2,
    "Phase 1": Users,
    "Phase 2": Globe,
    "Phase 3": Smartphone,
    "Phase 4": Shield,
    "Phase 5": CreditCard
  };
  const IconComponent = iconMap[phase] || Circle;
  return <IconComponent className="h-6 w-6" />;
};

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Development Roadmap</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl font-bold text-neon-glow animate-neon-glow">
            Casino UN0 Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey from concept to global platform. Track our progress and see what's coming next 
            as we build the future of transparent online gaming.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                {/* Connection Line */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-neon-red/50 to-transparent"></div>
                )}
                
                <Card className={`card-neon ${getStatusColor(phase.status)} transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full border-2 ${getStatusColor(phase.status)} bg-background`}>
                          {getPhaseIcon(phase.phase)}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-3">
                            <CardTitle className="text-2xl text-neon-glow">{phase.phase}</CardTitle>
                            {getStatusIcon(phase.status)}
                          </div>
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                          <CardDescription className="text-base">{phase.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant="secondary" className={getStatusColor(phase.status)}>
                          {phase.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                        <div className="text-sm text-muted-foreground">{phase.timeframe}</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-semibold">{phase.progress}%</span>
                      </div>
                      <Progress value={phase.progress} className="h-2" />
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          {feature.completed ? (
                            <CheckCircle className="h-4 w-4 text-neon-green flex-shrink-0" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          )}
                          <span className={feature.completed ? "text-foreground" : "text-muted-foreground"}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <div className="text-3xl font-bold text-neon-green">1</div>
            <div className="text-sm text-muted-foreground">Phases Completed</div>
          </div>
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <div className="text-3xl font-bold text-neon-yellow">1</div>
            <div className="text-sm text-muted-foreground">Phase In Progress</div>
          </div>
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <div className="text-3xl font-bold text-neon-blue">4</div>
            <div className="text-sm text-muted-foreground">Phases Planned</div>
          </div>
          <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
            <div className="text-3xl font-bold text-neon-red">18+</div>
            <div className="text-sm text-muted-foreground">Months Timeline</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;