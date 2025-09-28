import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  MessageCircle, 
  ThumbsUp, 
  Send, 
  ArrowLeft, 
  CheckCircle, 
  Clock,
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommunityJoin = () => {
  const [socialStats] = useState({
    discord: 1247,
    telegram: 892
  });

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Join Our Community</h2>
        <p className="text-xl text-muted-foreground">Connect with fellow players and stay updated</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Discord */}
        <Card className="card-neon hover:border-neon-blue hover:shadow-neon-blue">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="h-8 w-8 text-neon-blue" />
            </div>
            <CardTitle className="text-2xl">Discord Server</CardTitle>
            <CardDescription>
              Real-time chat, game discussions, and community events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">{socialStats.discord.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <Button className="w-full btn-neon-secondary">
              <MessageCircle className="h-4 w-4 mr-2" />
              Join Discord
            </Button>
          </CardContent>
        </Card>

        {/* Telegram */}
        <Card className="card-neon hover:border-neon-green hover:shadow-neon-green">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto">
              <Send className="h-8 w-8 text-neon-green" />
            </div>
            <CardTitle className="text-2xl">Telegram Channel</CardTitle>
            <CardDescription>
              Updates, announcements, and quick community polls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green">{socialStats.telegram.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <Button className="w-full bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black">
              <Send className="h-4 w-4 mr-2" />
              Join Telegram
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const CommunityVote = () => {
  const [polls] = useState([
    {
      id: 1,
      title: "Preferred Table Layout Design",
      description: "Which table design appeals to you most for the game interface?",
      options: [
        { id: 1, text: "Classic Green Felt", votes: 342 },
        { id: 2, text: "Modern Neon Grid", votes: 487 },
        { id: 3, text: "Minimalist Dark", votes: 231 }
      ],
      totalVotes: 1060,
      hasVoted: false
    },
    {
      id: 2,
      title: "Card Back Design Style",
      description: "What style should we use for the card backs in Casino UN0?",
      options: [
        { id: 1, text: "Geometric Patterns", votes: 298 },
        { id: 2, text: "Neon Circuit Design", votes: 421 },
        { id: 3, text: "Casino UN0 Logo", votes: 156 },
        { id: 4, text: "Abstract Art", votes: 89 }
      ],
      totalVotes: 964,
      hasVoted: true,
      votedOption: 2
    }
  ]);

  const { toast } = useToast();

  const handleVote = (pollId: number, optionId: number) => {
    toast({
      title: "Vote Submitted",
      description: "Thank you for participating in our community poll!",
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Community Polls</h2>
        <p className="text-xl text-muted-foreground">Help shape the future of Casino UN0</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {polls.map((poll) => (
          <Card key={poll.id} className="card-neon">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-neon-glow">{poll.title}</CardTitle>
                  <CardDescription>{poll.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="text-neon-blue">
                  {poll.totalVotes} votes
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {poll.options.map((option) => (
                <div key={option.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{option.text}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.round((option.votes / poll.totalVotes) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress 
                      value={(option.votes / poll.totalVotes) * 100} 
                      className="flex-1 h-2"
                    />
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {option.votes}
                    </span>
                    {!poll.hasVoted ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleVote(poll.id, option.id)}
                        className="border-neon-red text-neon-red hover:bg-neon-red hover:text-black"
                      >
                        Vote
                      </Button>
                    ) : poll.votedOption === option.id ? (
                      <CheckCircle className="h-4 w-4 text-neon-green" />
                    ) : null}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const CommunitySuggest = () => {
  const [suggestions] = useState([
    {
      id: 1,
      title: "Tournament Mode",
      description: "Add weekly tournaments with leaderboards and prizes",
      upvotes: 127,
      status: "Open" as const,
      author: "Player_42",
      createdAt: "2 days ago"
    },
    {
      id: 2,
      title: "Custom Avatar System",
      description: "Let players customize their avatars with earned items",
      upvotes: 89,
      status: "In Review" as const,
      author: "CasinoFan",
      createdAt: "5 days ago"
    },
    {
      id: 3,
      title: "Mobile App Version",
      description: "Native mobile app for iOS and Android",
      upvotes: 203,
      status: "Shipped" as const,
      author: "MobileGamer",
      createdAt: "1 week ago"
    }
  ]);

  const [newSuggestion, setNewSuggestion] = useState({
    title: "",
    description: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Suggestion Submitted",
      description: "Thank you for your idea! The community can now vote on it.",
    });
    setNewSuggestion({ title: "", description: "" });
  };

  const handleUpvote = (id: number) => {
    toast({
      title: "Upvoted!",
      description: "Your vote has been recorded.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "text-neon-blue";
      case "In Review": return "text-neon-yellow";
      case "Shipped": return "text-neon-green";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open": return <Eye className="h-4 w-4" />;
      case "In Review": return <Clock className="h-4 w-4" />;
      case "Shipped": return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Suggestion Box</h2>
        <p className="text-xl text-muted-foreground">Share your ideas and vote on community suggestions</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submit New Suggestion */}
        <div className="lg:col-span-1">
          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-neon-glow">Submit New Idea</CardTitle>
              <CardDescription>Help us improve Casino UN0</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Suggestion title"
                  value={newSuggestion.title}
                  onChange={(e) => setNewSuggestion(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-background border-muted-foreground/30 focus:border-neon-red"
                  required
                />
                <Textarea
                  placeholder="Describe your idea in detail..."
                  value={newSuggestion.description}
                  onChange={(e) => setNewSuggestion(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-background border-muted-foreground/30 focus:border-neon-red min-h-[120px]"
                  required
                />
                <Button type="submit" className="w-full btn-neon-primary">
                  Submit Suggestion
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Existing Suggestions */}
        <div className="lg:col-span-2 space-y-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="card-neon">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg text-neon-glow">{suggestion.title}</CardTitle>
                    <CardDescription>{suggestion.description}</CardDescription>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>by {suggestion.author}</span>
                <span>{suggestion.createdAt}</span>
              </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="secondary" className={getStatusColor(suggestion.status)}>
                      {getStatusIcon(suggestion.status)}
                      <span className="ml-1">{suggestion.status}</span>
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpvote(suggestion.id)}
                      className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex items-center space-x-1"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>{suggestion.upvotes}</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Community Hub</span>
          </Link>

          <nav className="flex space-x-6">
            <Link 
              to="/community/join" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/community/join' 
                  ? 'text-neon-blue border-b-2 border-neon-blue' 
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              Join
            </Link>
            <Link 
              to="/community/vote"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/community/vote'
                  ? 'text-neon-green border-b-2 border-neon-green'
                  : 'text-muted-foreground hover:text-neon-green'
              }`}
            >
              Vote
            </Link>
            <Link 
              to="/community/suggest"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/community/suggest'
                  ? 'text-neon-yellow border-b-2 border-neon-yellow'
                  : 'text-muted-foreground hover:text-neon-yellow'
              }`}
            >
              Suggest
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/join" element={<CommunityJoin />} />
        <Route path="/vote" element={<CommunityVote />} />
        <Route path="/suggest" element={<CommunitySuggest />} />
        <Route path="/" element={<CommunityJoin />} />
      </Routes>
    </div>
  );
};

export default Community;
