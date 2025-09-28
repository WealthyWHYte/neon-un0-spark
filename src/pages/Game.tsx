import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Bot, 
  User, 
  Trophy, 
  Coins, 
  BarChart3,
  ArrowLeft,
  Users
} from "lucide-react";

const GamePlay = () => {
  const [gameMode, setGameMode] = useState<"computer" | "dealer" | null>(null);
  const [gameStats, setGameStats] = useState({
    gamesPlayed: 42,
    winRate: 67,
    eloRating: 1250,
    demoChips: 10000
  });

  const startGame = (mode: "computer" | "dealer") => {
    setGameMode(mode);
  };

  if (gameMode) {
    return (
      <div className="min-h-screen bg-background neon-bg p-6">
        {/* Game Header */}
        <header className="flex items-center justify-between mb-6">
          <Button
            onClick={() => setGameMode(null)}
            variant="ghost"
            className="text-muted-foreground hover:text-neon-red"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modes
          </Button>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-neon-yellow">
              <Coins className="h-4 w-4 mr-1" />
              {gameStats.demoChips.toLocaleString()} Demo Chips
            </Badge>
            <Badge variant="secondary" className="text-neon-green">
              <Trophy className="h-4 w-4 mr-1" />
              ELO: {gameStats.eloRating}
            </Badge>
          </div>
        </header>

        {/* Game Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-3">
            <Card className="card-neon h-[600px]">
              <CardContent className="p-6 h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-neon-glow">
                    Casino UN0 Table
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Playing against {gameMode === "computer" ? "Computer" : "AI Dealer"}
                  </p>
                  
                  {/* Simulated Game Interface */}
                  <div className="space-y-4 p-8 border-2 border-neon-red/50 rounded-lg bg-muted/10">
                    <div className="text-lg text-neon-yellow">Game ID: UN0-{Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>Your Cards: [Hidden]</div>
                      <div>Opponent Cards: [Hidden]</div>
                      <div>Table Cards: None</div>
                      <div>Current Bet: 100 chips</div>
                    </div>
                    <div className="flex space-x-4 justify-center">
                      <Button className="btn-neon-primary">Call</Button>
                      <Button className="btn-neon-secondary">Raise</Button>
                      <Button variant="outline" className="border-neon-yellow text-neon-yellow">Fold</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
            {/* Player Stats */}
            <Card className="card-neon">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Player Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Games Played</span>
                  <span className="text-neon-green">{gameStats.gamesPlayed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="text-neon-blue">{gameStats.winRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ELO Rating</span>
                  <span className="text-neon-yellow">{gameStats.eloRating}</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Log */}
            <Card className="card-neon">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Action Log</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm max-h-40 overflow-y-auto">
                  <div className="text-muted-foreground">Game started</div>
                  <div className="text-neon-blue">Cards dealt</div>
                  <div className="text-neon-green">Waiting for your action...</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neon-glow">Casino UN0 Game</h1>
        <p className="text-xl text-muted-foreground">Choose your game mode and start playing!</p>
      </div>

      {/* Game Modes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Practice vs Computer */}
        <Card className="card-neon group cursor-pointer" onClick={() => startGame("computer")}>
          <CardHeader className="text-center space-y-4">
            <Bot className="h-16 w-16 text-neon-blue mx-auto group-hover:animate-pulse" />
            <CardTitle className="text-2xl text-neon-glow">Practice vs Computer</CardTitle>
            <CardDescription className="text-muted-foreground">
              Perfect for learning the game mechanics and rules at your own pace
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="btn-neon-primary w-full">
              <Play className="h-4 w-4 mr-2" />
              Start Practice
            </Button>
          </CardContent>
        </Card>

        {/* Practice vs Dealer */}
        <Card className="card-neon group cursor-pointer" onClick={() => startGame("dealer")}>
          <CardHeader className="text-center space-y-4">
            <User className="h-16 w-16 text-neon-green mx-auto group-hover:animate-pulse" />
            <CardTitle className="text-2xl text-neon-glow">Practice vs AI Dealer</CardTitle>
            <CardDescription className="text-muted-foreground">
              Experience authentic casino gameplay with our intelligent AI dealer
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="btn-neon-secondary w-full">
              <Play className="h-4 w-4 mr-2" />
              Face the Dealer
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Future Features */}
      <div className="max-w-2xl mx-auto">
        <Card className="card-neon opacity-60">
          <CardHeader className="text-center space-y-4">
            <Users className="h-16 w-16 text-muted-foreground mx-auto" />
            <CardTitle className="text-2xl text-muted-foreground">PvP Lobbies</CardTitle>
            <CardDescription className="text-muted-foreground">
              Coming in Phase 2 - Real-time multiplayer matches with other players
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" className="cursor-not-allowed" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Current Stats Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-green">{gameStats.gamesPlayed}</div>
          <div className="text-sm text-muted-foreground">Games Played</div>
        </div>
        <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-blue">{gameStats.winRate}%</div>
          <div className="text-sm text-muted-foreground">Win Rate</div>
        </div>
        <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-yellow">{gameStats.eloRating}</div>
          <div className="text-sm text-muted-foreground">ELO Rating</div>
        </div>
        <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-red">{gameStats.demoChips.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Demo Chips</div>
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Casino UN0 Game</span>
          </Link>

          <nav className="flex space-x-6">
            <Link 
              to="/game" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/game' 
                  ? 'text-neon-red border-b-2 border-neon-red' 
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              Play
            </Link>
            <Link 
              to="/game/practice"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/game/practice'
                  ? 'text-neon-green border-b-2 border-neon-green'
                  : 'text-muted-foreground hover:text-neon-green'
              }`}
            >
              Practice
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/" element={<GamePlay />} />
        <Route path="/practice" element={<GamePlay />} />
      </Routes>
    </div>
  );
};

export default Game;