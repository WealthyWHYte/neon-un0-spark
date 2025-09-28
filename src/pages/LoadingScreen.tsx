import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoaded(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background neon-bg flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Border Frame */}
      <div className="absolute inset-4 border-2 border-neon-red animate-neon-pulse rounded-lg"></div>
      <div className="absolute inset-8 border border-neon-blue opacity-60 rounded-lg"></div>

      {/* Main Content */}
      <div className="z-10 text-center space-y-8 max-w-lg px-8">
        {/* Title */}
        <h1 className="text-6xl font-bold text-neon-glow animate-neon-glow tracking-wider">
          CASINO UN0
        </h1>

        {/* Loading Section */}
        {!isLoaded ? (
          <div className="space-y-4">
            <p className="text-xl text-foreground/80 animate-pulse">Loading...</p>
            
            {/* Loading Bar */}
            <div className="w-full max-w-md mx-auto">
              <div className="h-3 bg-muted rounded-full overflow-hidden border border-muted-foreground/30">
                <div 
                  className="h-full loading-bar animate-neon-pulse transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {/* CTA Button */}
            <Button 
              onClick={handleEnter}
              className="btn-neon-primary text-2xl px-12 py-4 font-bold tracking-wider hover:scale-105 transition-all duration-300"
            >
              UN0 OUT
            </Button>
            
            {/* Subtext */}
            <p className="text-muted-foreground animate-pulse">
              Click 'UN0 OUT' to enter
            </p>
          </div>
        )}
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-red rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;