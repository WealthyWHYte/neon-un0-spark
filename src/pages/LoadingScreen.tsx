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

  // Generate flowing particles
  const particles = Array.from({ length: 30 }, (_, i) => {
    const colors = ['red', 'yellow', 'green', 'blue'];
    const color = colors[i % colors.length];
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const randomX = (Math.random() - 0.5) * 200;
    
    return {
      id: i,
      color,
      size,
      duration,
      delay,
      randomX,
      left: Math.random() * 100,
    };
  });

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Sequential Border Frames */}
      <div className="absolute inset-4 border-2 border-neon-red border-sequence-1 rounded-lg"></div>
      <div className="absolute inset-8 border-2 border-neon-yellow border-sequence-2 rounded-lg"></div>
      <div className="absolute inset-12 border-2 border-neon-green border-sequence-3 rounded-lg"></div>
      <div className="absolute inset-16 border-2 border-neon-blue border-sequence-4 rounded-lg"></div>

      {/* Flowing Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-${particle.size} h-${particle.size} particle-${particle.color} rounded-full animate-particle-flow`}
            style={{
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              '--random-x': `${particle.randomX}px`,
            } as React.CSSProperties & { '--random-x': string }}
          ></div>
        ))}
      </div>

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
              className="bg-transparent border-2 border-neon-red text-neon-red px-12 py-4 text-2xl font-bold tracking-wider rounded-lg animate-neon-glow hover:scale-105 transition-all duration-300 hover:shadow-neon-rainbow"
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
    </div>
  );
};

export default LoadingScreen;