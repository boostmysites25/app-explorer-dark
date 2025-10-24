import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Users, Calendar, Shield, Zap, TrendingUp, Target, DollarSign, TrendingUp as TrendingUpIcon, Code, Lightbulb, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mockProducts, DetailedProduct } from "@/data/products";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product: DetailedProduct | undefined = mockProducts.find(
    (p) => p.id === parseInt(id || "0")
  );

  // Scroll animation hooks
  const heroRef = useScrollAnimation();
  const overviewRef = useScrollAnimation();
  const problemRef = useScrollAnimation();
  const solutionRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const marketRef = useScrollAnimation();
  const monetizationRef = useScrollAnimation();
  const roiRef = useScrollAnimation();
  const fundingRef = useScrollAnimation();
  const techRef = useScrollAnimation();
  const competitiveRef = useScrollAnimation();
  const budgetRef = useScrollAnimation();
  const visionRef = useScrollAnimation();
  const sidebarRef = useScrollAnimation();

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")} variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Marketplace
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-x-hidden">
      {/* Hero Section */}
      <div 
        ref={heroRef.ref as React.RefObject<HTMLDivElement>}
        className={`relative overflow-hidden transition-all duration-700 ${
          heroRef.isVisible ? 'animate-fade-in' : 'scroll-hidden'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 py-8 relative">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:bg-accent/50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Button>
            <Badge variant="secondary" className="bg-gradient-primary border-0 text-white">
              {product.category}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-2 leading-relaxed">
                  {product.tagline}
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  Premium AI-powered solution by {product.author}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-lg">{product.rating}</span>
                  <span className="text-muted-foreground">rating</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-lg">{product.sales.toLocaleString()}</span>
                  <span className="text-muted-foreground">sales</span>
                </div>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 text-lg font-semibold">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold hover:bg-accent/50">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div> */}
            </div>

            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Overview Section */}
            <div
              ref={overviewRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                overviewRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Overview</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.overview}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Problem Section */}
            <div
              ref={problemRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                problemRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">⚠️</span>
                    </div>
                    <h2 className="text-2xl font-bold">The Problem</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.problem}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Solution Section */}
            <div
              ref={solutionRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                solutionRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">The Solution</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.solution}
                  </p>
                  {product.howItWorks && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                      <h3 className="font-semibold text-lg mb-3">How It Works:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.howItWorks}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Core Features Section */}
            <div
              ref={featuresRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                featuresRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">✨</span>
                    </div>
                    <h2 className="text-2xl font-bold">Core Features</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.coreFeatures.map((feature, index) => (
                      <div 
                        key={index} 
                        className={`group flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-md animate-stagger-${(index % 6) + 1}`}
                      >
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Target Users Section */}
            {product.targetUsers && (
              <div
                ref={marketRef.ref as React.RefObject<HTMLDivElement>}
                className={`transition-all duration-700 ${
                  marketRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
                }`}
              >
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">Target Users</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {product.targetUsers}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Market Opportunity Section */}
            <div
              ref={marketRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                marketRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <TrendingUpIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Market Opportunity</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.marketOpportunity}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Monetization Model Section */}
            <div
              ref={monetizationRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                monetizationRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Monetization Model</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Plans</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.monetizationModel.plans.map((plan, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground">{plan}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Pricing</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.monetizationModel.pricing.map((price, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground">{price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {product.monetizationModel.revenue && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Revenue Projections</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.monetizationModel.revenue.map((revenue, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground">{revenue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Projection Section */}
            <div
              ref={roiRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                roiRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">ROI & Financial Projection</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Timeline</h3>
                      <div className="space-y-2">
                        {product.roiProjection.timeline.map((item, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Projections</h3>
                      <div className="space-y-2">
                        {product.roiProjection.projections.map((projection, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground">{projection}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {product.roiProjection.userROI && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">User ROI</h3>
                        <div className="space-y-2">
                          {product.roiProjection.userROI.map((roi, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground">{roi}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Funding Opportunities Section */}
            {product.fundingOpportunities && (
              <div
                ref={fundingRef.ref as React.RefObject<HTMLDivElement>}
                className={`transition-all duration-700 ${
                  fundingRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
                }`}
              >
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">💰</span>
                      </div>
                      <h2 className="text-2xl font-bold">Funding Opportunities</h2>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Stages</h3>
                        <div className="space-y-2">
                          {product.fundingOpportunities.stages.map((stage, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground">{stage}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Amounts</h3>
                        <div className="space-y-2">
                          {product.fundingOpportunities.amounts.map((amount, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground">{amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {product.fundingOpportunities.valuations && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">Valuations</h3>
                          <div className="space-y-2">
                            {product.fundingOpportunities.valuations.map((valuation, index) => (
                              <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                                <span className="text-foreground">{valuation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Tech Stack Section */}
            {product.techStack && (
              <div
                ref={techRef.ref as React.RefObject<HTMLDivElement>}
                className={`transition-all duration-700 ${
                  techRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
                }`}
              >
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">Tech Stack</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Frontend</h3>
                        <div className="space-y-2">
                          {product.techStack.frontend.map((tech, index) => (
                            <div key={index} className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Backend</h3>
                        <div className="space-y-2">
                          {product.techStack.backend.map((tech, index) => (
                            <div key={index} className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {product.techStack.ai && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">AI Stack</h3>
                          <div className="space-y-2">
                            {product.techStack.ai.map((tech, index) => (
                              <div key={index} className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                                <span className="text-foreground text-sm">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Database</h3>
                        <div className="space-y-2">
                          {product.techStack.database.map((tech, index) => (
                            <div key={index} className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Hosting</h3>
                        <div className="space-y-2">
                          {product.techStack.hosting.map((tech, index) => (
                            <div key={index} className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {product.techStack.integrations && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">Integrations</h3>
                          <div className="space-y-2">
                            {product.techStack.integrations.map((tech, index) => (
                              <div key={index} className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                                <span className="text-foreground text-sm">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Competitive Advantage Section */}
            {product.competitiveAdvantage && (
              <div
                ref={competitiveRef.ref as React.RefObject<HTMLDivElement>}
                className={`transition-all duration-700 ${
                  competitiveRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
                }`}
              >
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">🏆</span>
                      </div>
                      <h2 className="text-2xl font-bold">Competitive Advantage</h2>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.competitiveAdvantage.features.map((feature, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">Comparisons</h3>
                        <div className="space-y-2">
                          {product.competitiveAdvantage.comparisons.map((comparison, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                              <span className="text-foreground">{comparison}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {product.competitiveAdvantage.uniqueSelling && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">Unique Selling Points</h3>
                          <div className="space-y-2">
                            {product.competitiveAdvantage.uniqueSelling.map((selling, index) => (
                              <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                                <span className="text-foreground">{selling}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Development Budget Section */}
            <div
              ref={budgetRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                budgetRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">💵</span>
                    </div>
                    <h2 className="text-2xl font-bold">Development Budget</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">MVP</h3>
                      <div className="space-y-2">
                        {product.developmentBudget.mvp.map((item, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Standard</h3>
                      <div className="space-y-2">
                        {product.developmentBudget.standard.map((item, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Premium</h3>
                      <div className="space-y-2">
                        {product.developmentBudget.premium.map((item, index) => (
                          <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <span className="text-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vision Section */}
            <div
              ref={visionRef.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                visionRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
              }`}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🚀</span>
                    </div>
                    <h2 className="text-2xl font-bold">Vision</h2>
                  </div>
                  <blockquote className="text-lg italic text-foreground leading-relaxed">
                    "{product.vision}"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Sidebar */}
          <div 
            ref={sidebarRef.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 transition-all duration-700 ${
              sidebarRef.isVisible ? 'animate-slide-left' : 'scroll-hidden-left'
            }`}
          >
            {/* Developer Card */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-bold">Developer</h3>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {product.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{product.author}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-green-500" />
                      Verified Developer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">📊</span>
                  </div>
                  <h3 className="text-xl font-bold">Product Stats</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium">Rating</span>
                    </div>
                    <span className="font-bold text-lg">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Sales</span>
                    </div>
                    <span className="font-bold text-lg">{product.sales.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Category</span>
                    </div>
                    <Badge variant="secondary" className="bg-gradient-primary border-0 text-white">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            {/* <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">Join thousands of users who are already using this powerful AI solution.</p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="w-full hover:bg-accent/50">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    View Pricing
                  </Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
