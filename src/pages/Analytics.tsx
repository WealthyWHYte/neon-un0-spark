import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Shield, 
  AlertTriangle,
  ArrowLeft,
  Eye,
  Calendar
} from "lucide-react";

const AnalyticsGraphs = () => {
  const metrics = {
    dau: 1247,
    mau: 15632,
    retention: 67,
    totalMembers: 28456,
    gamesPlayed: 89543,
    demoBets: 1234567
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Platform Analytics</h2>
        <p className="text-xl text-muted-foreground">Real-time insights into Casino UN0 performance</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="card-neon">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Active Users</CardTitle>
            <Users className="h-4 w-4 text-neon-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-blue">{metrics.dau.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12.3% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Active Users</CardTitle>
            <Calendar className="h-4 w-4 text-neon-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-green">{metrics.mau.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8.7% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-neon-yellow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-yellow">{metrics.retention}%</div>
            <p className="text-xs text-muted-foreground">7-day retention rate</p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-neon-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-red">{metrics.totalMembers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All-time registrations</p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Games Played</CardTitle>
            <BarChart3 className="h-4 w-4 text-neon-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-blue">{metrics.gamesPlayed.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +234 today
            </p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demo Bets</CardTitle>
            <BarChart3 className="h-4 w-4 text-neon-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-green">{metrics.demoBets.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total chips wagered</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-neon">
          <CardHeader>
            <CardTitle className="text-neon-glow">User Growth</CardTitle>
            <CardDescription>Daily and monthly active users over time</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/30 rounded-lg">
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-4" />
              <p>Chart visualization will be integrated here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader>
            <CardTitle className="text-neon-glow">Game Activity</CardTitle>
            <CardDescription>Games played and betting patterns</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/30 rounded-lg">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <p>Real-time game analytics coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AnalyticsAntiCheat = () => {
  const flaggedSessions = [
    {
      id: "UN0-FLAG-001",
      playerId: "Player_12345",
      flagReason: "IP/Device Overlap",
      details: "Multiple accounts from same IP address",
      timestamp: "2024-01-15 14:30:22",
      status: "Under Review",
      riskLevel: "Medium"
    },
    {
      id: "UN0-FLAG-002",
      playerId: "SuspiciousUser",
      flagReason: "Opposite Betting Pattern",
      details: "Consistent pattern of betting against previous account",
      timestamp: "2024-01-15 13:45:10",
      status: "Confirmed",
      riskLevel: "High"
    },
    {
      id: "UN0-FLAG-003",
      playerId: "QuickPlayer99",
      flagReason: "Rapid Account Creation",
      details: "Account created immediately after previous ban",
      timestamp: "2024-01-15 12:15:33",
      status: "Pending Review",
      riskLevel: "Low"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "text-neon-red";
      case "Medium": return "text-neon-yellow";
      case "Low": return "text-neon-green";
      default: return "text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "text-neon-red";
      case "Under Review": return "text-neon-yellow";
      case "Pending Review": return "text-neon-blue";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Anti-Cheat Monitoring</h2>
        <p className="text-xl text-muted-foreground">Real-time fraud detection and prevention</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-neon">
          <CardHeader className="text-center">
            <AlertTriangle className="h-8 w-8 text-neon-red mx-auto" />
            <CardTitle className="text-neon-red">Active Flags</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-neon-red">12</div>
            <p className="text-sm text-muted-foreground">Requiring attention</p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="text-center">
            <Shield className="h-8 w-8 text-neon-green mx-auto" />
            <CardTitle className="text-neon-green">Clean Sessions</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-neon-green">98.7%</div>
            <p className="text-sm text-muted-foreground">No suspicious activity</p>
          </CardContent>
        </Card>

        <Card className="card-neon">
          <CardHeader className="text-center">
            <Eye className="h-8 w-8 text-neon-blue mx-auto" />
            <CardTitle className="text-neon-blue">Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-neon-blue">24/7</div>
            <p className="text-sm text-muted-foreground">Automated detection</p>
          </CardContent>
        </Card>
      </div>

      {/* Flagged Sessions Table */}
      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-neon-glow flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-neon-red" />
            Flagged Sessions
          </CardTitle>
          <CardDescription>Recent suspicious activities requiring manual review</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {flaggedSessions.map((session) => (
              <div key={session.id} className="border border-muted-foreground/20 rounded-lg p-4 bg-muted/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                  <div>
                    <div className="font-mono text-sm text-neon-blue">{session.id}</div>
                    <div className="text-sm text-muted-foreground">{session.playerId}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">{session.flagReason}</div>
                    <div className="text-sm text-muted-foreground">{session.details}</div>
                  </div>
                  
                  <div className="space-y-1">
                    <Badge variant="secondary" className={getRiskColor(session.riskLevel)}>
                      {session.riskLevel} Risk
                    </Badge>
                    <Badge variant="secondary" className={getStatusColor(session.status)}>
                      {session.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="text-xs text-muted-foreground">{session.timestamp}</div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black">
                        Review
                      </Button>
                      <Button size="sm" variant="outline" className="border-neon-red text-neon-red hover:bg-neon-red hover:text-black">
                        Flag
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Analytics = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Analytics Dashboard</span>
          </Link>

          <nav className="flex space-x-6">
            <Link 
              to="/analytics/graphs" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/analytics/graphs' || location.pathname === '/analytics' 
                  ? 'text-neon-blue border-b-2 border-neon-blue' 
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              Graphs
            </Link>
            <Link 
              to="/analytics/anti-cheat"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/analytics/anti-cheat'
                  ? 'text-neon-red border-b-2 border-neon-red'
                  : 'text-muted-foreground hover:text-neon-red'
              }`}
            >
              Anti-Cheat
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/graphs" element={<AnalyticsGraphs />} />
        <Route path="/anti-cheat" element={<AnalyticsAntiCheat />} />
        <Route path="/" element={<AnalyticsGraphs />} />
      </Routes>
    </div>
  );
};

export default Analytics;