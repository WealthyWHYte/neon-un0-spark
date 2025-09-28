import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Shield, 
  Heart,
  ArrowLeft,
  Download,
  Calendar,
  CheckCircle
} from "lucide-react";

const PoliciesHome = () => {
  const policySections = [
    {
      title: "Terms of Service",
      description: "Comprehensive terms governing platform usage and user responsibilities",
      icon: FileText,
      href: "/policies/tos",
      color: "neon-red",
      lastUpdated: "January 2024",
      status: "Current"
    },
    {
      title: "Privacy Policy",
      description: "Detailed privacy practices and data protection commitments",
      icon: Shield,
      href: "/policies/privacy",
      color: "neon-blue", 
      lastUpdated: "January 2024",
      status: "GDPR Compliant"
    },
    {
      title: "Responsible Gaming",
      description: "Guidelines and resources for safe and responsible gaming practices",
      icon: Heart,
      href: "/policies/responsible-gaming",
      color: "neon-green",
      lastUpdated: "December 2023",
      status: "Industry Standard"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-neon-glow">Platform Policies</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transparent policies ensuring fair play, privacy protection, and responsible gaming 
          for all Casino UN0 community members.
        </p>
      </div>

      {/* Policy Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {policySections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Link key={section.title} to={section.href}>
              <Card className={`card-neon group cursor-pointer h-full hover:border-${section.color} hover:shadow-${section.color}`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-${section.color}/20 rounded-full flex items-center justify-center mx-auto`}>
                    <Icon className={`h-8 w-8 text-${section.color}`} />
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
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary" className={`text-${section.color}`}>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {section.status}
                    </Badge>
                    <div className="text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {section.lastUpdated}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-neon-red group-hover:text-neon-red">
                    Read Policy
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Policy Highlights */}
      <Card className="card-neon">
        <CardHeader>
          <CardTitle className="text-2xl text-neon-glow">Policy Highlights</CardTitle>
          <CardDescription>
            Key commitments that define our approach to user protection and platform governance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-neon-blue flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Privacy & Security
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• End-to-end data encryption</li>
                <li>• Minimal data collection policy</li>
                <li>• Full GDPR & CCPA compliance</li>
                <li>• User data control and deletion rights</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-neon-green flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Responsible Gaming
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Self-exclusion tools available</li>
                <li>• Spending limit controls</li>
                <li>• Problem gambling resources</li>
                <li>• Age verification requirements</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-neon-yellow flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Fair Play
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Transparent game algorithms</li>
                <li>• Anti-cheat protection</li>
                <li>• Verifiable randomness</li>
                <li>• Community-driven governance</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-neon-red flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Compliance
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Regular legal review process</li>
                <li>• Industry best practices</li>
                <li>• Regulatory alignment</li>
                <li>• Community feedback integration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PolicyViewer = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="card-neon max-w-4xl mx-auto">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl text-neon-glow">{title}</CardTitle>
            <Button variant="outline" className="border-neon-blue text-neon-blue">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Effective Date: January 1, 2024 | Last Updated: January 15, 2024
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

const PoliciesTerms = () => (
  <PolicyViewer 
    title="Terms of Service" 
    content={`# Casino UN0 Terms of Service

## 1. Agreement to Terms

By accessing and using the Casino UN0 platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.

## 2. Description of Service

Casino UN0 is a transparent online gaming platform that provides:
- Verifiable fair gaming experiences
- Community-driven platform governance
- Advanced anti-cheat protection
- Comprehensive analytics and statistics
- Social gaming features and community interaction

## 3. User Accounts and Registration

### 3.1 Account Creation
- You must be at least 18 years old to create an account
- You must provide accurate and complete information during registration
- You are responsible for maintaining the security of your account credentials
- One account per person; multiple accounts are prohibited

### 3.2 Account Responsibilities
- Keep your login credentials secure and confidential
- Notify us immediately of any unauthorized use of your account
- You are responsible for all activities that occur under your account
- We reserve the right to suspend or terminate accounts for violations

## 4. Acceptable Use Policy

### 4.1 Permitted Uses
- Play games in accordance with platform rules
- Participate in community discussions and voting
- Access analytics and statistics
- Provide feedback and suggestions

### 4.2 Prohibited Activities
- Cheating, hacking, or exploiting game mechanics
- Creating multiple accounts or sharing account access
- Harassment, abuse, or inappropriate behavior toward other users
- Attempting to circumvent anti-cheat or security measures
- Using bots, scripts, or automated tools
- Engaging in money laundering or fraudulent activities

## 5. Game Rules and Fair Play

### 5.1 Game Integrity
- All games use verified random number generation
- Game algorithms are transparent and verifiable
- Anti-cheat systems monitor all gameplay continuously
- Suspicious activity may result in account investigation or suspension

### 5.2 Demo Gaming
- Current platform operates in demo mode with virtual chips
- Virtual chips have no monetary value and cannot be exchanged
- Demo mode is for entertainment and practice purposes only

## 6. Community Participation

### 6.1 Voting and Governance
- Eligible users may participate in community votes
- Voting rights may be tied to account standing and activity
- Vote manipulation or fraud is strictly prohibited
- Community decisions are advisory and subject to platform policies

### 6.2 User-Generated Content
- Users retain ownership of content they create
- By posting content, you grant us license to display and distribute it
- Content must comply with community guidelines and applicable laws
- We reserve the right to remove inappropriate content

## 7. Privacy and Data Protection

### 7.1 Data Collection
- We collect only necessary data for platform operation
- All data handling complies with applicable privacy laws
- Users have rights to access, modify, and delete their data
- See our Privacy Policy for detailed information

### 7.2 Security
- We implement industry-standard security measures
- Users must also take reasonable security precautions
- Report security vulnerabilities responsibly through proper channels

## 8. Intellectual Property

### 8.1 Platform Content
- Casino UN0 platform and content are protected by intellectual property laws
- Users may not copy, modify, or distribute platform content without permission
- Open source components are subject to their respective licenses

### 8.2 User Content
- Users retain rights to their original content
- Users grant necessary licenses for platform operation
- Users must not infringe on others' intellectual property rights

## 9. Disclaimers and Limitations

### 9.1 Service Availability
- Platform is provided "as is" without warranties
- We do not guarantee uninterrupted availability
- Maintenance and updates may temporarily affect service

### 9.2 Limitation of Liability
- Our liability is limited to the maximum extent permitted by law
- We are not liable for indirect, incidental, or consequential damages
- Users participate at their own risk

## 10. Termination

### 10.1 Termination Rights
- Either party may terminate the agreement at any time
- We may suspend or terminate accounts for violations
- Termination does not affect accrued rights and obligations

### 10.2 Effect of Termination
- Access to the platform will be discontinued
- User data handling follows our data retention policies
- Certain provisions survive termination

## 11. Changes to Terms

We reserve the right to modify these Terms at any time. Changes will be:
- Posted on the platform with effective date
- Communicated to active users via email or platform notification
- Subject to a reasonable notice period for material changes

Continued use after changes constitutes acceptance of new terms.

## 12. Governing Law and Disputes

### 12.1 Governing Law
These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.

### 12.2 Dispute Resolution
- Initial disputes should be addressed through customer support
- Formal disputes may be subject to binding arbitration
- Class action waivers may apply where legally permissible

## 13. Contact Information

For questions about these Terms, please contact us at:
- Email: legal@casinouno.com
- Platform: Contact form in About section
- Address: [To be provided based on legal entity formation]

## 14. Severability

If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.

---

**Effective Date**: January 1, 2024
**Last Updated**: January 15, 2024
**Version**: 1.1`}
  />
);

const PoliciesPrivacy = () => (
  <PolicyViewer 
    title="Privacy Policy" 
    content={`# Casino UN0 Privacy Policy

## 1. Introduction

Casino UN0 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our gaming platform.

## 2. Information We Collect

### 2.1 Information You Provide Directly
- **Account Information**: Username, email address, password (encrypted)
- **Profile Information**: Optional display name, avatar, preferences
- **Communication Data**: Support requests, community posts, feedback
- **Verification Data**: Age verification information as required by law

### 2.2 Information Collected Automatically
- **Gaming Data**: Game statistics, performance metrics, session logs
- **Technical Data**: IP address, device information, browser type
- **Usage Analytics**: Platform interaction patterns, feature usage
- **Security Data**: Anti-cheat detection logs, security event records

### 2.3 Information from Third Parties
- **Social Logins**: If you use social media to log in (future feature)
- **Payment Processors**: Transaction data if real money features are added
- **Legal Requirements**: Information required by gaming regulators

## 3. How We Use Your Information

### 3.1 Platform Operation
- Provide and maintain gaming services
- Process account registration and authentication
- Enable community features and social interaction
- Maintain game statistics and leaderboards

### 3.2 Security and Anti-Cheat
- Detect and prevent cheating and fraud
- Monitor for suspicious or prohibited activities
- Maintain platform security and integrity
- Comply with legal and regulatory requirements

### 3.3 Communication and Support
- Respond to customer service requests
- Send important platform updates and notifications
- Provide community voting and governance information
- Share relevant news and feature updates

### 3.4 Analytics and Improvement
- Analyze platform usage and performance
- Improve user experience and platform features
- Conduct research and development
- Generate anonymous statistical reports

## 4. Information Sharing and Disclosure

### 4.1 We Do Not Sell Personal Information
We do not sell, rent, or trade your personal information to third parties for their commercial purposes.

### 4.2 Limited Sharing Scenarios
- **Service Providers**: Trusted third parties who assist with platform operation
- **Legal Requirements**: When required by law or to protect legal rights
- **Business Transfers**: In connection with mergers, acquisitions, or asset sales
- **Consent**: When you explicitly agree to sharing for specific purposes

### 4.3 Anonymous and Aggregated Data
We may share anonymous, aggregated statistics that cannot identify individual users for:
- Platform transparency reports
- Industry research and analysis
- Marketing and promotional materials
- Academic or research partnerships

## 5. Data Security

### 5.1 Security Measures
- **Encryption**: All data transmitted and stored is encrypted using industry standards
- **Access Controls**: Strict employee access controls and authentication requirements
- **Security Monitoring**: Continuous monitoring for security threats and vulnerabilities
- **Regular Audits**: Periodic security assessments and penetration testing

### 5.2 Data Breach Response
- Immediate containment and investigation procedures
- Prompt notification to affected users and relevant authorities
- Transparent communication about the nature and scope of any breach
- Remediation measures and prevention improvements

## 6. Your Privacy Rights

### 6.1 Access and Control
- **Access**: Request copies of your personal information
- **Correction**: Update or correct inaccurate information
- **Deletion**: Request deletion of your personal information
- **Portability**: Receive your data in a portable format

### 6.2 Communication Preferences
- **Opt-out**: Unsubscribe from non-essential communications
- **Preferences**: Control types of notifications you receive
- **Marketing**: Opt-out of promotional communications

### 6.3 Regional Rights
- **GDPR** (EU): Full data subject rights under European law
- **CCPA** (California): Consumer privacy rights under California law
- **Other Jurisdictions**: Rights as applicable under local privacy laws

## 7. Data Retention

### 7.1 Retention Periods
- **Active Accounts**: Data retained while account is active and necessary for service
- **Inactive Accounts**: May be deleted after extended periods of inactivity
- **Legal Requirements**: Some data retained longer as required by law
- **Security Logs**: Anti-cheat and security data retained for fraud prevention

### 7.2 Deletion Process
- **User-Initiated**: Account deletion requests processed within 30 days
- **Automatic**: Inactive accounts may be automatically purged after notice
- **Exceptions**: Some data may be retained for legal or security purposes

## 8. Cookies and Tracking

### 8.1 Cookie Usage
- **Essential Cookies**: Required for platform functionality and security
- **Analytics Cookies**: Help us understand how you use the platform
- **Preference Cookies**: Remember your settings and preferences

### 8.2 Cookie Control
- **Browser Settings**: Most browsers allow you to control cookie settings
- **Opt-out Options**: Available for non-essential cookies
- **Impact Notice**: Disabling cookies may affect platform functionality

## 9. Third-Party Services

### 9.1 Integrated Services
We may integrate with third-party services for:
- Analytics and performance monitoring
- Customer support and communication
- Security and anti-cheat protection
- Payment processing (future feature)

### 9.2 Third-Party Privacy Practices
- Each service has its own privacy policy and practices
- We select partners who maintain appropriate privacy standards
- We limit data sharing to what's necessary for service provision

## 10. International Data Transfers

### 10.1 Cross-Border Processing
- Data may be processed in countries where our service providers operate
- We ensure appropriate safeguards for international transfers
- Transfers comply with applicable privacy law requirements

### 10.2 Data Protection Standards
- Adequacy decisions and standard contractual clauses where applicable
- Regular assessment of data protection standards in processing countries
- Additional safeguards implemented as necessary

## 11. Children's Privacy

### 11.1 Age Requirements
- Platform is intended for users 18 years and older
- We do not knowingly collect information from children under 18
- Age verification measures are implemented during registration

### 11.2 Parental Rights
- Parents may contact us regarding children's information
- Immediate deletion of any inadvertently collected children's data
- Enhanced protection measures for any users under 18

## 12. Changes to Privacy Policy

### 12.1 Update Process
- Privacy Policy may be updated periodically
- Material changes will be prominently communicated
- Continued use constitutes acceptance of updated policy

### 12.2 Notification Methods
- Email notification to active users
- Prominent platform notices
- Reasonable advance notice for significant changes

## 13. Contact Information

### 13.1 Privacy Questions
For privacy-related questions or requests, contact us at:
- **Email**: privacy@casinouno.com
- **Subject Line**: Include "Privacy Request" for faster processing
- **Response Time**: We aim to respond within 72 hours

### 13.2 Data Protection Officer
For GDPR-related matters:
- **Email**: dpo@casinouno.com
- **Role**: Responsible for overseeing privacy compliance
- **Availability**: Accessible for data subject rights requests

## 14. Regulatory Information

### 14.1 Legal Basis (GDPR)
We process personal information based on:
- **Contract**: Necessary for providing gaming services
- **Legitimate Interest**: Platform security, analytics, and improvement
- **Consent**: Marketing communications and optional features
- **Legal Obligation**: Compliance with gaming and financial regulations

### 14.2 Supervisory Authority
EU residents may contact their local data protection authority with privacy concerns.

---

**Effective Date**: January 1, 2024
**Last Updated**: January 15, 2024
**Version**: 1.1`}
  />
);

const PoliciesResponsibleGaming = () => (
  <PolicyViewer 
    title="Responsible Gaming Policy" 
    content={`# Casino UN0 Responsible Gaming Policy

## 1. Our Commitment

Casino UN0 is committed to promoting responsible gaming and protecting players from the potential harms associated with problem gambling. We believe gaming should be entertaining, social, and conducted within appropriate limits.

## 2. Current Platform Status

### 2.1 Demo Gaming Only
- Casino UN0 currently operates in demo mode with virtual chips
- No real money gambling is currently available on the platform
- Virtual chips have no monetary value and cannot be exchanged
- Demo mode allows players to enjoy gaming without financial risk

### 2.2 Future Real Money Considerations
When and if real money features are introduced, comprehensive responsible gaming measures will be implemented in full compliance with applicable regulations.

## 3. Responsible Gaming Principles

### 3.1 Gaming Should Be Fun
- Gaming is entertainment, not a way to make money
- Players should only engage when they can afford the time and attention
- Gaming should not interfere with personal, professional, or social responsibilities
- Players should take regular breaks and maintain perspective

### 3.2 Know Your Limits
- Set time and spending limits before you start
- Never chase losses with larger bets or longer sessions
- Stop playing when limits are reached
- Avoid gaming when stressed, depressed, or under the influence

### 3.3 Stay in Control
- Make conscious decisions about gaming participation
- Be aware of time spent on the platform
- Monitor your gaming behavior and emotional responses
- Seek help if gaming becomes problematic

## 4. Age Verification and Protection

### 4.1 Age Requirements
- Minimum age of 18 years for platform access
- Robust age verification processes during registration
- Additional verification may be required for certain features
- Zero tolerance for underage gaming

### 4.2 Protection Measures
- Regular age verification audits
- Suspicious account monitoring and investigation
- Cooperation with legal authorities when necessary
- Educational resources about age restrictions

## 5. Problem Gaming Recognition

### 5.1 Warning Signs
Players should be aware of these potential warning signs of problem gaming:

**Behavioral Changes:**
- Gaming for longer periods than intended
- Thinking about gaming frequently when not playing
- Feeling restless or irritable when not gaming
- Gaming to escape problems or negative emotions

**Social and Personal Impact:**
- Neglecting relationships, work, or other responsibilities
- Lying about gaming activities or time spent
- Gaming in secret or feeling shame about gaming habits
- Financial problems related to gaming (when real money is involved)

**Loss of Control:**
- Unsuccessful attempts to reduce or stop gaming
- Increasing gaming activity despite negative consequences
- Using gaming as the primary coping mechanism for stress
- Feeling unable to enjoy other activities

### 5.2 Risk Factors
Certain factors may increase the risk of developing gaming problems:
- History of addiction or compulsive behaviors
- Mental health conditions such as depression or anxiety
- Social isolation or relationship problems
- Financial stress or instability
- Easy access to gaming platforms

## 6. Self-Help Tools and Controls

### 6.1 Current Available Tools
Even in demo mode, we provide tools to help players maintain control:

**Session Management:**
- Visible session time tracking
- Voluntary session time limits
- Break reminders and cooling-off periods
- Activity summaries and statistics

**Account Controls:**
- Self-exclusion options (temporary or permanent)
- Account suspension requests
- Communication preferences management
- Support contact integration

### 6.2 Future Real Money Tools
When real money features are introduced, additional tools will include:
- Deposit limits (daily, weekly, monthly)
- Loss limits and spending controls
- Reality checks and time warnings
- Enhanced self-exclusion systems

## 7. Support Resources

### 7.1 Professional Help Organizations
We recommend these professional resources for gambling-related problems:

**United States:**
- National Council on Problem Gambling: 1-800-522-4700
- Gamblers Anonymous: www.gamblersanonymous.org
- National Suicide Prevention Lifeline: 988

**International:**
- GamCare (UK): 0808 8020 133
- Gambling Help Online (Australia): 1800 858 858
- Responsible Gambling Council (Canada): www.rgco.org

### 7.2 Online Resources
- Problem gambling assessment tools
- Educational materials about responsible gaming
- Support group finder tools
- Crisis intervention resources

### 7.3 Platform Support
- Dedicated responsible gaming support team
- Confidential assistance and guidance
- Referrals to appropriate professional services
- Account management assistance

## 8. Family and Friend Support

### 8.1 Recognizing Problems in Others
Signs that someone may have a gaming problem:
- Secretive behavior about gaming activities
- Mood changes related to gaming wins or losses
- Neglecting responsibilities or relationships
- Borrowing money frequently
- Defensive or angry when questioned about gaming

### 8.2 How to Help
- Approach with empathy and understanding, not judgment
- Encourage professional help and offer to assist in finding resources
- Set boundaries about financial assistance
- Take care of your own emotional well-being
- Consider joining support groups for affected family members

## 9. Platform Responsibilities

### 9.1 Staff Training
- All staff receive responsible gaming training
- Regular updates on problem gambling recognition
- Protocols for handling player concerns
- Collaboration with responsible gaming experts

### 9.2 Marketing and Promotion
- Honest and transparent marketing practices
- No targeting of vulnerable populations
- Responsible gaming messages in promotional materials
- Clear terms and conditions for all offers

### 9.3 Data Monitoring
- Behavioral pattern analysis for early intervention
- Proactive outreach to players showing concerning patterns
- Integration with self-exclusion databases
- Regular responsible gaming policy reviews

## 10. Research and Education

### 10.1 Ongoing Research
- Collaboration with research institutions
- Study of responsible gaming best practices
- Player behavior analysis for harm prevention
- Technology development for better protection tools

### 10.2 Community Education
- Regular responsible gaming awareness campaigns
- Educational content in multiple formats
- Community discussions about healthy gaming habits
- Transparency reports on responsible gaming measures

## 11. Regulatory Compliance

### 11.1 Current Compliance
- Adherence to applicable consumer protection laws
- Implementation of industry best practices
- Regular policy reviews and updates
- Cooperation with regulatory authorities

### 11.2 Future Licensing Requirements
When pursuing gaming licenses for real money operations:
- Full compliance with licensing jurisdiction requirements
- Implementation of mandated responsible gaming tools
- Regular audits and reporting to regulatory bodies
- Participation in responsible gaming initiatives

## 12. Continuous Improvement

### 12.1 Policy Evolution
- Regular review and update of responsible gaming measures
- Integration of new research findings and best practices
- Community feedback incorporation
- Technology advancement adoption

### 12.2 Industry Collaboration
- Participation in responsible gaming organizations
- Sharing of best practices with industry peers
- Support for responsible gaming research initiatives
- Advocacy for player protection improvements

## 13. Getting Help

### 13.1 Immediate Assistance
If you or someone you know needs immediate help:
- Contact our support team: support@casinouno.com
- Call a problem gambling helpline (numbers listed above)
- Reach out to a mental health professional
- Contact emergency services if there is immediate danger

### 13.2 Platform Resources
- Responsible gaming information center in user accounts
- Direct links to support organizations
- Self-assessment tools and questionnaires
- Community support and discussion forums

## 14. Contact Information

For responsible gaming questions, support, or to request self-exclusion:

**Primary Contact:**
- Email: responsiblegaming@casinouno.com
- Response time: Within 24 hours
- Available 24/7 for urgent matters

**Support Team:**
- General support: support@casinouno.com
- Phone support: [To be implemented]
- Live chat: Available through platform

---

**Remember**: Gaming should always be fun, safe, and within your means. If it stops being enjoyable or starts causing problems, please seek help immediately.

**Effective Date**: December 1, 2023
**Last Updated**: January 10, 2024
**Version**: 1.0`}
  />
);

const Policies = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background neon-bg">
      {/* Navigation Header */}
      <header className="border-b border-muted-foreground/20 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-neon-red" />
            <span className="text-lg font-semibold text-neon-glow">Platform Policies</span>
          </Link>

          <nav className="flex space-x-6 text-sm">
            <Link 
              to="/policies" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/policies' 
                  ? 'text-neon-red border-b-2 border-neon-red' 
                  : 'text-muted-foreground hover:text-neon-red'
              }`}
            >
              Overview
            </Link>
            <Link 
              to="/policies/tos"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/policies/tos'
                  ? 'text-neon-blue border-b-2 border-neon-blue'
                  : 'text-muted-foreground hover:text-neon-blue'
              }`}
            >
              Terms
            </Link>
            <Link 
              to="/policies/privacy"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/policies/privacy'
                  ? 'text-neon-green border-b-2 border-neon-green'
                  : 'text-muted-foreground hover:text-neon-green'
              }`}
            >
              Privacy
            </Link>
            <Link 
              to="/policies/responsible-gaming"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/policies/responsible-gaming'
                  ? 'text-neon-yellow border-b-2 border-neon-yellow'
                  : 'text-muted-foreground hover:text-neon-yellow'
              }`}
            >
              Responsible Gaming
            </Link>
          </nav>
        </div>
      </header>

      {/* Route Content */}
      <Routes>
        <Route path="/" element={<PoliciesHome />} />
        <Route path="/tos" element={<PoliciesTerms />} />
        <Route path="/privacy" element={<PoliciesPrivacy />} />
        <Route path="/responsible-gaming" element={<PoliciesResponsibleGaming />} />
      </Routes>
    </div>
  );
};

export default Policies;