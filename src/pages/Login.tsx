import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [accessCode, setAccessCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (accessCode === "UN0-DEMO" || accessCode === "CASINO-ACCESS") {
        toast({
          title: "Access Granted",
          description: "Welcome to Casino UN0!",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Access Denied",
          description: "Invalid access code. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background neon-bg flex flex-col items-center justify-center p-6">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-neon-blue">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Login Card */}
      <Card className="card-neon w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center border-2 border-neon-red shadow-neon-red">
            <Lock className="h-8 w-8 text-neon-red" />
          </div>
          <CardTitle className="text-2xl font-bold text-neon-glow">
            Access Portal
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your access code to continue to the Casino UN0 platform
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="accessCode" className="text-sm font-medium">
                Access Code
              </Label>
              <Input
                id="accessCode"
                type="text"
                placeholder="Enter your access code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="bg-background border-muted-foreground/30 focus:border-neon-red focus:shadow-neon-red"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full btn-neon-primary"
              disabled={isLoading || !accessCode.trim()}
            >
              {isLoading ? "Verifying..." : "Access Platform"}
            </Button>
          </form>

          {/* Demo Codes Info */}
          <div className="mt-6 p-4 border border-muted-foreground/20 rounded-lg bg-muted/20">
            <p className="text-sm text-muted-foreground mb-2">Demo Access Codes:</p>
            <div className="space-y-1 text-xs font-mono">
              <div className="text-neon-green">UN0-DEMO</div>
              <div className="text-neon-blue">CASINO-ACCESS</div>
            </div>
          </div>

          {/* Future Discord Integration */}
          <div className="mt-6 pt-6 border-t border-muted-foreground/20">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Future Integration (Phase 2)
            </p>
            <Button 
              variant="outline" 
              className="w-full border-muted-foreground/50 text-muted-foreground/50 cursor-not-allowed"
              disabled
            >
              Login with Discord
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;