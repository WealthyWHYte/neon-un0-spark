import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  BookOpen, 
  Building, 
  Presentation,
  History,
  ArrowLeft,
  Download,
  ExternalLink
} from "lucide-react";

const DocsHome = () => {
  const docSections = [
    {
      title: "Project History",
      description: "The origin story and evolution of the Casino UN0 concept",
      icon: History,
      href: "/docs/history",
      color: "neon-blue",
      status: "Available"
    },
    {
      title: "Business Plan",
      description: "Comprehensive business case and financial projections",
      icon: Building,
      href: "/docs/business-plan",
      color: "neon-green",
      status: "Available"
    },
    {
      title: "Whitepaper",
      description: "In-depth technical analysis and implementation strategy",
      icon: FileText,
      href: "/docs/whitepaper",
      color: "neon-red",
      status: "Available"
    },
    {
      title: "One-Pager",
      description: "Executive summary of the opportunity and vision",
      icon: FileText,
      href: "/docs/one-pager",
      color: "neon-yellow",
      status: "Available"
    },
    {
      title: "Pitch Decks",
      description: "Collection of pitch presentations for stakeholders",
      icon: Presentation,
      href: "/docs/pitch-decks",
      color: "neon-blue",
      status: "Available"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Documentation Hub</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive documentation covering our business strategy, technical implementation, 
          and project evolution. All materials are transparently available to the community.
        </p>
      </div>

      {/* Documentation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Link key={section.title} to={section.href}>
              <Card className={`card-neon group cursor-pointer h-full hover:border-${section.color} hover:shadow-${section.color}`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-${section.color}/20 rounded-full flex items-center justify-center mx-auto`}>
                    <Icon className={`h-8 w-8 text-${section.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-neon-glow transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground/80 transition-colors">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`text-sm font-medium text-${section.color} mb-3`}>
                    {section.status}
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-neon-red group-hover:text-neon-red">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Documentation
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-blue">5</div>
          <div className="text-sm text-muted-foreground">Document Categories</div>
        </div>
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-green">50+</div>
          <div className="text-sm text-muted-foreground">Pages of Content</div>
        </div>
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-yellow">100%</div>
          <div className="text-sm text-muted-foreground">Transparency</div>
        </div>
        <div className="text-center p-6 border border-muted-foreground/20 rounded-lg bg-card/50">
          <div className="text-2xl font-bold text-neon-red">Live</div>
          <div className="text-sm text-muted-foreground">Updates</div>
        </div>
      </div>
    </div>
  );
};

const DocViewer = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="card-neon max-w-4xl mx-auto">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl text-neon-glow">{title}</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-neon-blue text-neon-blue">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-neon-green text-neon-green">
                <ExternalLink className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
            {content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DocsHistory = () => (
  <DocViewer 
    title="Casino UN0: Project History" 
    content={`# Project Genesis

Casino UN0 began as an innovative concept to revolutionize online gaming through transparency and community engagement. Our journey started with a simple question: What if players could see behind the curtain of online casinos?

## Early Development (Q3 2023)

The initial concept emerged from recognizing the gap between traditional casino gaming and modern digital expectations. Players wanted transparency, community involvement, and fair play verification.

Key milestones:
- Initial concept development
- Market research and validation
- Technical feasibility studies
- Community feedback collection

## Foundation Phase (Q4 2023)

With validation in hand, we began building the technical foundation that would support our vision of transparent gaming.

Development priorities:
- Core platform architecture
- Game engine development  
- Anti-cheat system design
- Community platform planning

## Current Status (2024)

Today, Casino UN0 stands as a testament to what's possible when technology meets transparency. Our platform continues to evolve based on community feedback and technological advancement.

The journey continues as we work toward our vision of the most transparent and community-driven gaming platform ever created.`}
  />
);

const DocsBusinessPlan = () => (
  <DocViewer 
    title="Casino UN0: Business Plan" 
    content={`# Executive Summary

Casino UN0 represents a paradigm shift in online gaming, combining traditional casino entertainment with modern transparency and community governance principles.

## Market Opportunity

The online gaming industry is valued at over $60 billion globally, with continued growth projected across all segments. Casino UN0 targets the underserved market of transparency-conscious players.

### Target Demographics
- Tech-savvy millennials and Gen-Z gamers
- Players seeking fair and transparent gaming experiences
- Community-driven gaming enthusiasts
- Casual and competitive card game players

## Business Model

### Revenue Streams
1. **Premium Memberships**: Enhanced features and exclusive access
2. **Tournament Entry Fees**: Competitive gaming events
3. **Partnership Revenue**: Casino and gaming platform collaborations
4. **Licensing**: Technology licensing to other platforms

### Financial Projections
- Year 1: $500K revenue target
- Year 2: $2.5M revenue target  
- Year 3: $8M+ revenue target
- Break-even projected: Month 18

## Competitive Advantage

1. **Transparency**: Full visibility into game mechanics and statistics
2. **Community Governance**: Player-driven feature development
3. **Advanced Anti-Cheat**: Industry-leading fraud prevention
4. **Open Source Elements**: Community-verifiable game logic

## Go-to-Market Strategy

### Phase 1: Community Building
- Launch beta with core gaming community
- Establish transparency credentials
- Gather feedback and iterate

### Phase 2: Market Expansion  
- Partner with established gaming platforms
- Expand to mobile platforms
- International market entry

### Phase 3: Industry Leadership
- Set transparency standards for industry
- Expand to multiple game types
- Enterprise partnerships

## Risk Assessment

### Technical Risks
- Scalability challenges
- Security vulnerabilities
- Performance optimization

### Market Risks  
- Regulatory changes
- Competition from established players
- User adoption rates

### Mitigation Strategies
- Robust testing and security protocols
- Regulatory compliance focus
- Strong community engagement
- Diversified revenue streams

## Investment Requirements

Seeking $2M Series A funding for:
- Platform development and scaling (60%)
- Marketing and user acquisition (25%)
- Team expansion (10%)
- Regulatory and legal compliance (5%)

## Conclusion

Casino UN0 is positioned to capture significant market share in the growing online gaming sector through differentiated transparency and community-first approach.`}
  />
);

const DocsWhitepaper = () => (
  <DocViewer 
    title="Casino UN0: Technical Whitepaper" 
    content={`# Casino UN0: Technical Implementation and Architecture

## Abstract

This whitepaper outlines the technical architecture, implementation strategy, and innovative approaches employed in the Casino UN0 platform to achieve unprecedented transparency in online gaming.

## 1. Platform Architecture

### 1.1 Microservices Design
The Casino UN0 platform utilizes a microservices architecture to ensure scalability, maintainability, and fault tolerance:

- **Game Engine Service**: Handles all game logic and state management
- **Anti-Cheat Service**: Real-time fraud detection and prevention
- **User Management Service**: Authentication, profiles, and permissions
- **Analytics Service**: Real-time data collection and analysis
- **Community Service**: Voting, suggestions, and social features

### 1.2 Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Redis caching
- **Real-time**: WebSocket connections for live gameplay
- **Security**: JWT authentication, TLS encryption

## 2. Game Engine Implementation

### 2.1 Deterministic Game Logic
All game mechanics are implemented using deterministic algorithms to ensure reproducible results:

\`\`\`typescript
class GameEngine {
  private seed: string;
  private random: SeededRandom;
  
  constructor(gameId: string) {
    this.seed = generateVerifiableSeed(gameId);
    this.random = new SeededRandom(this.seed);
  }
  
  dealCards(): Card[] {
    // Deterministic card dealing based on verifiable seed
    return this.shuffleDeck().slice(0, this.playersCount * 2);
  }
}
\`\`\`

### 2.2 Transparency Mechanisms
- **Verifiable Randomness**: All random events use cryptographically secure, verifiable seeds
- **Game State Logging**: Complete audit trail of all game actions
- **Open Source Components**: Critical game logic available for community review

## 3. Anti-Cheat System

### 3.1 Multi-Layer Detection
Our anti-cheat system employs multiple detection layers:

1. **Behavioral Analysis**: Pattern recognition for unusual play styles
2. **Device Fingerprinting**: Hardware and browser characteristic analysis
3. **Network Analysis**: IP geolocation and connection pattern monitoring
4. **Statistical Analysis**: Win/loss ratio anomaly detection

### 3.2 Real-Time Monitoring
\`\`\`typescript
interface CheatDetectionResult {
  playerId: string;
  riskScore: number;
  flaggedBehaviors: string[];
  recommendedAction: 'monitor' | 'review' | 'suspend';
}

class AntiCheatEngine {
  analyzeGameSession(session: GameSession): CheatDetectionResult {
    const behaviors = this.detectAnomalous Behaviors(session);
    const riskScore = this.calculateRiskScore(behaviors);
    return this.generateRecommendation(riskScore, behaviors);
  }
}
\`\`\`

## 4. Scalability Considerations

### 4.1 Horizontal Scaling
- **Stateless Services**: All services designed to be stateless for easy scaling
- **Load Balancing**: Intelligent request distribution across service instances
- **Database Sharding**: User data partitioned across multiple database instances

### 4.2 Performance Optimization
- **Caching Strategy**: Multi-level caching with Redis and CDN integration
- **Database Optimization**: Query optimization and indexing strategy
- **Asset Delivery**: Optimized asset bundling and delivery

## 5. Security Framework

### 5.1 Data Protection
- **Encryption**: AES-256 encryption for sensitive data at rest
- **Secure Transmission**: TLS 1.3 for all client-server communication
- **Access Control**: Role-based access control with principle of least privilege

### 5.2 Privacy Considerations
- **Data Minimization**: Collection of only necessary user data
- **Anonymization**: Player statistics anonymized for public display
- **GDPR Compliance**: Full compliance with data protection regulations

## 6. Innovation Highlights

### 6.1 Transparent Game Verification
Players can verify game integrity through:
- Public game seed disclosure post-game
- Independent algorithm verification
- Community-run verification tools

### 6.2 Community Governance Integration
Technical implementation of community voting:
- Blockchain-inspired voting mechanism
- Transparent vote counting
- Immutable proposal and decision history

## 7. Future Technical Roadmap

### 7.1 Advanced Features
- **Machine Learning**: Enhanced cheat detection using ML algorithms
- **Blockchain Integration**: Exploring blockchain for ultimate transparency
- **VR Support**: Virtual reality gaming environment development

### 7.2 Platform Evolution
- **API Development**: Public APIs for third-party integrations
- **Plugin Architecture**: Community-developed game modifications
- **International Scaling**: Multi-region deployment strategy

## 8. Conclusion

The Casino UN0 platform represents a significant technical achievement in transparent online gaming. Through innovative architecture, robust security, and community-first design, we're setting new standards for the industry.

Our commitment to technical excellence and transparency ensures that Casino UN0 will remain at the forefront of gaming innovation while maintaining the trust and engagement of our community.`}
  />
);

const DocsOnePager = () => (
  <DocViewer 
    title="Casino UN0: Executive Summary" 
    content={`# Casino UN0: The Future of Transparent Gaming

## The Opportunity

The $60+ billion online gaming industry lacks transparency, community engagement, and player trust. Casino UN0 addresses these fundamental issues through innovative technology and community-first design.

## What We Do

Casino UN0 is a transparent, neon-powered gaming platform where players can:
- ✅ Verify game fairness through open algorithms
- ✅ Participate in platform governance through voting
- ✅ Access comprehensive analytics and statistics  
- ✅ Engage with a vibrant gaming community
- ✅ Experience cutting-edge anti-cheat protection

## Why Now

### Market Drivers
- Growing demand for transparency in digital services
- Increasing sophistication of gaming audiences  
- Rising concern about fair play in online gaming
- Community-driven development becoming standard

### Our Advantages
- **First-mover**: First truly transparent casino platform
- **Technology**: Advanced anti-cheat and analytics systems
- **Community**: Strong foundation of engaged players
- **Vision**: Clear roadmap to market leadership

## Business Model

**Revenue Streams**
- Premium memberships and features
- Tournament entry fees
- Casino partnership revenue
- Technology licensing

**Financial Targets**
- Year 1: $500K revenue
- Year 2: $2.5M revenue  
- Year 3: $8M+ revenue
- Break-even: Month 18

## Competitive Landscape

**Traditional Online Casinos**: Limited transparency, closed systems
**Social Gaming Platforms**: Lack serious gaming focus
**Blockchain Gaming**: Complex, limited adoption

**Casino UN0 Advantage**: Combines traditional gaming familiarity with modern transparency expectations.

## Development Roadmap

**Phase 0** ✅ Foundation & MVP (Completed)
**Phase 1** 🔄 Community & Engagement (In Progress)
**Phase 2** 📅 Multiplayer & Social (Q2 2024)
**Phase 3** 📅 Mobile & Accessibility (Q3 2024)
**Phase 4** 📅 Advanced Features (Q4 2024)
**Phase 5** 📅 Global Expansion (2025+)

## Investment Opportunity

**Seeking**: $2M Series A
**Use of Funds**:
- 60% Platform development and scaling
- 25% Marketing and user acquisition
- 10% Team expansion
- 5% Regulatory compliance

## Key Metrics

**Current Status**:
- 28K+ registered users
- 89K+ games played
- 98.7% clean gaming sessions
- Growing community engagement

## Team & Vision

Led by experienced gaming and technology professionals committed to revolutionizing online gaming through transparency and community engagement.

**Vision**: To become the world's most trusted and transparent gaming platform, setting new industry standards for fair play and community involvement.

## Call to Action

Join us in building the future of transparent gaming. Whether as a player, investor, or partner, there's a place for you in the Casino UN0 revolution.

**Contact**: Ready to learn more? Connect with our team to explore opportunities.`}
  />
);

const DocsPitchDecks = () => (
  <div className="container mx-auto px-6 py-12 space-y-8">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-neon-glow">Pitch Deck Collection</h2>
      <p className="text-xl text-muted-foreground">
        Professional presentations for stakeholders, investors, and partners
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-xl text-neon-glow">Investor Pitch Deck</CardTitle>
          <CardDescription>
            Comprehensive presentation covering market opportunity, business model, and financial projections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Last Updated: January 2024 • 24 slides
          </div>
          <div className="flex space-x-2">
            <Button className="btn-neon-primary flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-neon-blue text-neon-blue">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-xl text-neon-glow">Partnership Presentation</CardTitle>
          <CardDescription>
            Strategic partnership opportunities with casinos and gaming platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Last Updated: December 2023 • 18 slides
          </div>
          <div className="flex space-x-2">
            <Button className="btn-neon-secondary flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-neon-green text-neon-green">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-xl text-neon-glow">Technical Overview</CardTitle>
          <CardDescription>
            Deep dive into platform architecture and innovative transparency features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Last Updated: January 2024 • 32 slides
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-neon-yellow text-neon-yellow flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-neon-yellow text-neon-yellow">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-xl text-neon-glow">Community Presentation</CardTitle>
          <CardDescription>
            Community-focused presentation highlighting player benefits and engagement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Last Updated: November 2023 • 16 slides
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-neon-red text-neon-red flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-neon-red text-neon-red">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const Docs = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Documentation</span>
          </Link>

          <nav className="hidden md:flex space-x-6 text-sm">
            <Link 
              to="/docs" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/docs' 
                  ? 'text-neon-red border-b-2 border-neon-red' 
                  : 'text-muted-foreground hover:text-neon-red'
              }`}
            >
              Overview
            </Link>
            <Link 
              to="/docs/history"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/docs/history'
                  ? 'text-neon-blue border-b-2 border-neon-blue'
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              History
            </Link>
            <Link 
              to="/docs/business-plan"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/docs/business-plan'
                  ? 'text-neon-green border-b-2 border-neon-green'
                  : 'text-muted-foreground hover:text-neon-green'
              }`}
            >
              Business
            </Link>
            <Link 
              to="/docs/whitepaper"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/docs/whitepaper'
                  ? 'text-neon-yellow border-b-2 border-neon-yellow'
                  : 'text-muted-foreground hover:text-neon-yellow'
              }`}
            >
              Technical
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/" element={<DocsHome />} />
        <Route path="/history" element={<DocsHistory />} />
        <Route path="/business-plan" element={<DocsBusinessPlan />} />
        <Route path="/whitepaper" element={<DocsWhitepaper />} />
        <Route path="/one-pager" element={<DocsOnePager />} />
        <Route path="/pitch-decks" element={<DocsPitchDecks />} />
      </Routes>
    </div>
  );
};

export default Docs;