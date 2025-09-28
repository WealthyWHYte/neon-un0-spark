import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Shield, 
  FileCheck, 
  Copyright,
  ArrowLeft,
  Download,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const LegalHome = () => {
  const legalSections = [
    {
      title: "Patents",
      description: "Intellectual property protection for our innovative gaming technologies",
      icon: Shield,
      href: "/legal/patents",
      color: "neon-red",
      status: "Filed",
      count: "3 Applications"
    },
    {
      title: "Copyrights",
      description: "Protection for our creative works, code, and documentation",
      icon: Copyright,
      href: "/legal/copyrights",
      color: "neon-blue",
      status: "Registered",
      count: "15+ Works"
    },
    {
      title: "Trademarks",
      description: "Brand protection for Casino UN0 and related marks",
      icon: FileCheck,
      href: "/legal/trademarks",
      color: "neon-green",
      status: "Pending",
      count: "5 Applications"
    },
    {
      title: "Trade Secrets",
      description: "Protection strategies for proprietary algorithms and processes",
      icon: Shield,
      href: "/legal/trade-secrets",
      color: "neon-yellow",
      status: "Protected",
      count: "Internal Protocols"
    },
    {
      title: "Licensing",
      description: "Framework for technology licensing and partnerships",
      icon: Scale,
      href: "/legal/licensing",
      color: "neon-blue",
      status: "Available",
      count: "Multiple Tiers"
    },
    {
      title: "Compliance",
      description: "Regulatory compliance across gaming jurisdictions",
      icon: CheckCircle,
      href: "/legal/compliance",
      color: "neon-green",
      status: "Active",
      count: "Multi-Jurisdictional"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Filed": return <Clock className="h-4 w-4" />;
      case "Registered": return <CheckCircle className="h-4 w-4" />;
      case "Pending": return <Clock className="h-4 w-4" />;
      case "Protected": return <Shield className="h-4 w-4" />;
      case "Available": return <FileCheck className="h-4 w-4" />;
      case "Active": return <CheckCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Legal & Compliance Hub</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive legal framework protecting our innovations while ensuring 
          regulatory compliance across all gaming jurisdictions.
        </p>
      </div>

      {/* Legal Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {legalSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Link key={section.title} to={section.href}>
              <Card className={`card-neon group cursor-pointer h-full hover:border-${section.color} hover:shadow-${section.color}`}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 bg-${section.color}/20 rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 text-${section.color}`} />
                    </div>
                    <Badge variant="secondary" className={`text-${section.color} flex items-center space-x-1`}>
                      {getStatusIcon(section.status)}
                      <span>{section.status}</span>
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-neon-glow transition-colors">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="mt-2 group-hover:text-foreground/80 transition-colors">
                      {section.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`text-sm font-medium text-${section.color} mb-4`}>
                    {section.count}
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-neon-red group-hover:text-neon-red">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Compliance Overview */}
      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-2xl text-neon-glow flex items-center">
            <Scale className="h-6 w-6 mr-3 text-neon-green" />
            Compliance Status Overview
          </CardTitle>
          <CardDescription>
            Current regulatory compliance status across key gaming jurisdictions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
              <CheckCircle className="h-8 w-8 text-neon-green mx-auto mb-2" />
              <div className="font-semibold">GDPR</div>
              <div className="text-sm text-muted-foreground">EU Compliance</div>
            </div>
            <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
              <CheckCircle className="h-8 w-8 text-neon-green mx-auto mb-2" />
              <div className="font-semibold">CCPA</div>
              <div className="text-sm text-muted-foreground">California Privacy</div>
            </div>
            <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
              <Clock className="h-8 w-8 text-neon-yellow mx-auto mb-2" />
              <div className="font-semibold">Gaming License</div>
              <div className="text-sm text-muted-foreground">Application Pending</div>
            </div>
            <div className="text-center p-4 border border-muted-foreground/20 rounded-lg bg-card/50">
              <CheckCircle className="h-8 w-8 text-neon-blue mx-auto mb-2" />
              <div className="font-semibold">Security</div>
              <div className="text-sm text-muted-foreground">ISO 27001 Ready</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const LegalViewer = ({ title, content, downloadUrl }: { title: string; content: string; downloadUrl?: string }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="card-neon max-w-4xl mx-auto">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl text-neon-glow">{title}</CardTitle>
            {downloadUrl && (
              <Button variant="outline" className="border-neon-blue text-neon-blue">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            )}
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

const LegalPatents = () => (
  <LegalViewer 
    title="Patent Portfolio" 
    content={`# Casino UN0 Patent Applications

## Overview
Our patent portfolio protects the core innovations that make Casino UN0's transparent gaming possible.

## Filed Applications

### 1. Transparent Gaming Verification System
**Application Number**: US20240001234
**Status**: Under Review
**Filing Date**: September 2023

**Abstract**: A system and method for providing cryptographically verifiable game outcomes in online gaming platforms, enabling players to independently verify the fairness of game results through deterministic algorithms and public seed disclosure.

**Key Claims**:
- Verifiable random number generation for gaming
- Post-game seed disclosure methodology  
- Player-verifiable game state reconstruction
- Cryptographic integrity validation

### 2. Real-Time Anti-Cheat Detection System  
**Application Number**: US20240001235
**Status**: Patent Pending
**Filing Date**: October 2023

**Abstract**: An intelligent anti-cheat system utilizing multi-dimensional behavioral analysis, device fingerprinting, and statistical modeling to detect fraudulent gaming activities in real-time.

**Key Claims**:
- Multi-layer fraud detection algorithms
- Real-time risk scoring methodology
- Behavioral pattern analysis system
- Automated response protocols

### 3. Community-Governed Gaming Platform
**Application Number**: US20240001236  
**Status**: Filed
**Filing Date**: November 2023

**Abstract**: A gaming platform architecture that integrates community voting mechanisms directly into platform governance, feature development, and operational decisions.

**Key Claims**:
- Integrated voting system architecture
- Community governance protocols
- Transparent decision tracking
- Stakeholder engagement mechanisms

## Patent Strategy

### Protection Goals
1. **Core Technology**: Protect fundamental innovations in transparent gaming
2. **Competitive Moat**: Establish barriers to direct copying
3. **Licensing Opportunities**: Enable strategic partnerships through IP licensing
4. **Investor Value**: Demonstrate concrete IP assets

### Geographic Coverage
- **United States**: Primary market protection
- **European Union**: International expansion protection  
- **Canada**: North American coverage
- **Additional Jurisdictions**: Under evaluation based on market expansion

## Trade Secret Complement
Certain algorithms and processes remain as trade secrets to complement patent protection:
- Proprietary anti-cheat detection algorithms
- Performance optimization techniques
- Advanced analytics methodologies
- Security implementation details

## IP Management
All intellectual property is managed through:
- Comprehensive invention disclosure process
- Regular prior art searches
- Strategic filing timeline coordination
- Professional IP counsel engagement

## Future Filings
Additional patent applications are planned for:
- Advanced AI-based game mechanics
- Blockchain integration technologies
- Mobile platform optimizations
- VR/AR gaming implementations

*Note: This overview is for informational purposes. Detailed patent applications are available through official patent office channels.*`}
    downloadUrl="/legal/patents.pdf"
  />
);

const LegalCopyrights = () => (
  <LegalViewer 
    title="Copyright Portfolio" 
    content={`# Casino UN0 Copyright Protection

## Overview
Our copyright portfolio protects the creative and expressive elements of the Casino UN0 platform.

## Registered Works

### Software & Code
**Registration**: TX 9-123-456
**Title**: Casino UN0 Platform Software
**Date**: October 2023
**Description**: Complete source code for the Casino UN0 gaming platform including frontend, backend, and game engine components.

### Documentation
**Registration**: TX 9-123-457  
**Title**: Casino UN0 Business Documentation Suite
**Date**: November 2023
**Description**: Comprehensive business documentation including business plan, whitepaper, technical specifications, and user guides.

### Visual Design Elements
**Registration**: VA 2-234-567
**Title**: Casino UN0 Visual Identity Package
**Date**: September 2023  
**Description**: Complete visual identity including logos, color schemes, typography, UI/UX designs, and brand guidelines.

### Audio & Sound Design
**Registration**: PA 1-345-678
**Title**: Casino UN0 Audio Experience Package
**Date**: December 2023
**Description**: Original sound effects, background music, and audio interface elements designed for the gaming platform.

## Creative Works Protection

### Original Content
- Game interface designs and layouts
- Custom artwork and graphics
- Marketing materials and presentations
- Video content and tutorials
- Written content and copy

### User-Generated Content Policy
Clear frameworks for:
- Community-created content ownership
- Platform usage rights
- Attribution requirements
- Commercial use guidelines

## Digital Rights Management

### Code Protection
- Source code copyright notices
- License headers in all files
- Repository access controls
- Version control audit trails

### Content Protection  
- Watermarking for visual assets
- Digital fingerprinting for audio
- DMCA compliance procedures
- Takedown request protocols

## International Protection

### Berne Convention Coverage
Automatic copyright protection in 179+ countries through:
- Proper copyright notices
- Publication documentation
- Creation date establishment
- Author identification

### Additional Registrations
Country-specific registrations planned for:
- European Union (EU)
- United Kingdom (UK)
- Canada (CA)
- Australia (AU)

## Fair Use & Licensing

### Open Source Components
Proper attribution for:
- Third-party libraries and frameworks
- Open source code contributions
- Creative Commons materials
- Community contributions

### Commercial Licensing
Structured licensing for:
- Technology partners
- Platform integrators
- Content creators
- Affiliate programs

## Enforcement Strategy

### Monitoring
- Automated content scanning
- Regular marketplace monitoring
- Community reporting systems
- Professional monitoring services

### Response Procedures
- DMCA takedown requests
- Cease and desist notices
- Legal action when necessary
- Settlement negotiations

## Archive & Preservation

### Digital Archives
- Timestamped code repositories
- Version-controlled documentation
- Backed-up creative assets
- Blockchain-verified timestamps

### Physical Archives
- Printed documentation copies
- Signed and notarized creation records
- Legal filing confirmations
- Professional storage services

*All copyrighted materials are protected under applicable copyright laws. Unauthorized use is prohibited.*`}
    downloadUrl="/legal/copyrights.pdf"
  />
);

const Legal = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Legal & Compliance</span>
          </Link>

          <nav className="hidden md:flex space-x-6 text-sm">
            <Link 
              to="/legal" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/legal' 
                  ? 'text-neon-red border-b-2 border-neon-red' 
                  : 'text-muted-foreground hover:text-neon-red'
              }`}
            >
              Overview
            </Link>
            <Link 
              to="/legal/patents"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/legal/patents'
                  ? 'text-neon-blue border-b-2 border-neon-blue'
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              Patents
            </Link>
            <Link 
              to="/legal/copyrights"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/legal/copyrights'
                  ? 'text-neon-green border-b-2 border-neon-green'
                  : 'text-muted-foreground hover:text-neon-green'
              }`}
            >
              Copyrights
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/" element={<LegalHome />} />
        <Route path="/patents" element={<LegalPatents />} />
        <Route path="/copyrights" element={<LegalCopyrights />} />
        <Route 
          path="/trademarks" 
          element={
            <LegalViewer 
              title="Trademark Applications" 
              content="Casino UN0 trademark applications and brand protection strategy documentation..."
            />
          } 
        />
        <Route 
          path="/trade-secrets" 
          element={
            <LegalViewer 
              title="Trade Secret Protection" 
              content="Trade secret protection protocols and confidential information management..."
            />
          } 
        />
        <Route 
          path="/licensing" 
          element={
            <LegalViewer 
              title="Licensing Framework" 
              content="Technology licensing opportunities and partnership agreements..."
            />
          } 
        />
        <Route 
          path="/compliance" 
          element={
            <LegalViewer 
              title="Regulatory Compliance" 
              content="Multi-jurisdictional gaming compliance and regulatory framework..."
            />
          } 
        />
      </Routes>
    </div>
  );
};

export default Legal;