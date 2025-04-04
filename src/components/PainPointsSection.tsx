
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Shield, DollarSign, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const painPoints = [
  {
    title: "Expensive advertising and high cost of leads",
    icon: <DollarSign className="h-10 w-10 text-amber-500" />,
    problems: [
      "High cost of direct advertising across digital marketing channels continues to increase year after year, pushing many businesses to seek alternatives",
      "Low user trust in direct advertising due to market saturation and increasing ad-fatigue among potential customers",
      "Extremely low conversion rate of ad impressions into conversions to your website, with industry averages often below 2%",
      "Digital advertising platforms offering diminishing returns on investment as competition for ad space intensifies",
      "Consequently, sky-high cost of attracting a new customer, which often exceeds the initial profit from their first purchase"
    ],
    solution: [
      "Your customers themselves regularly create and publish the content you want, in the form and on the platforms you want, on a regular basis. At no cost to you!",
      "Come up with marketing assignments for your clients, or use the many ready-made viral templates from SalesBang. Offer them to all of your clients.",
      "Transform your existing customer base into an army of content creators who genuinely promote your products and services to their networks",
      "Eliminate dependency on expensive advertising platforms while building authentic brand advocacy"
    ]
  },
  {
    title: "Standard affiliate and referral programs don't work",
    icon: <Shield className="h-10 w-10 text-amber-500" />,
    problems: [
      "Many sites prohibit the use of referral links, consider them toxic and remove referral content",
      "In a standard referral program, an affiliate's reward for their efforts and actions is deferred and unpredictable, so their motivation tends to zero",
      "More often than not, the referral has no expertise and doesn't know where, how, or what to publish so that it's profitable for both him and you",
      "As a consequence, your users are not interested in participating in standard affiliate programs and you lose their potential"
    ],
    solution: [
      "In addition to referral links, SalesBang enables your referrals to use \"referral nicknames\" when publishing affiliate content, indistinguishable from a regular username, which eliminates the deletion or pessimization of their publications",
      "Your client is rewarded for the performance of your viral assignment instantly upon execution and quality check",
      "Your client has a detailed and clear instruction for each task - how to make content about you, where and how to publish it"
    ]
  },
  {
    title: "SEO promotion is expensive, time-consuming, and unpredictable",
    icon: <Search className="h-10 w-10 text-amber-500" />,
    problems: [
      "Your site's position in organic search depends on the number of mentions and links to your site on external resources. Buying them is expensive and not effective",
      "Link mass and mentions of your business should be constantly replenished and grow, this can only do a lot of users and only on a regular basis",
      "Search engines regularly change the rules of prioritization in search engine results, the only constant ranking factor is the number of mentions of your brand/product and the number of external links to your site",
      "As a consequence, it is almost impossible to get organic search traffic without multiple \"white\" mentions of your website or brand on the internet"
    ],
    solution: [
      "You provide all your customers with a convenient and clear tool to regularly publish positive reviews, recommendations, articles, videos about your company or product",
      "You get exponentially growing direct traffic of new customers from a stream of viral publications from your old and new customers",
      "You get an increase in search traffic by improving your site's position in search engines due to the growing number of mentions"
    ]
  },
  {
    title: "Low user-to-purchase conversion, low repeat purchase rate",
    icon: <ShoppingCart className="h-10 w-10 text-amber-500" />,
    problems: [
      "A customer's decision to pay for their first purchase is the most difficult step in your sales funnel. Refilled, unpaid and abandoned \"shopping carts\" are the pain of any online retailer",
      "Once a purchase is made, there is almost nothing to keep users in your marketplace, or motivate them to come back to you again. They have no \"asset\" left on your marketplace that he would be sorry to lose",
      "Competition in your marketplace niche is high, and the ease of your customer switching to a competitor drastically reduces customer loyalty, customer lifecycle, and likelihood of repeat purchase"
    ],
    solution: [
      "Your customers get a special virtual currency \"Credits\", which they get for performing your viral tasks, and can spend on partial or full payment for your products and services only",
      "The range and conditions of receiving \"benefits\" for your \"viral sellers\" you determine yourself, forming their motivation to continue promoting your site or your products",
      "\"Credits\" is an asset that binds the client to your site for a long time, and an effective tool that increases the statistics of his repeat purchases by 3-4 times"
    ]
  }
];

const PainPointsSection = () => {
  // Track which problem sections are open
  const [openProblems, setOpenProblems] = useState<Record<number, boolean>>({});
  // Track which solution sections are open
  const [openSolutions, setOpenSolutions] = useState<Record<number, boolean>>({});

  const toggleProblem = (index: number) => {
    setOpenProblems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleSolution = (index: number) => {
    setOpenSolutions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-viral-gray to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How SalesBang <span className="text-viral-purple">Solves Your Key Problems</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SalesBang tackles the most challenging obstacles to sustainable sales growth with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-viral-purple/10 to-viral-purple/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                    {point.icon}
                  </div>
                  <CardTitle className="text-xl text-viral-black">
                    {point.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Problems Accordion */}
                  <Collapsible
                    open={openProblems[index]}
                    onOpenChange={() => toggleProblem(index)}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                        <h4 className="font-semibold text-viral-black">The Problem:</h4>
                      </div>
                      <CollapsibleTrigger className="rounded-full w-8 h-8 inline-flex items-center justify-center hover:bg-viral-purple/10 transition-colors">
                        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openProblems[index] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                    </div>
                    
                    <div className="pl-7 space-y-0.5">
                      {/* Always show the first problem point */}
                      <div className="text-gray-700 text-sm leading-relaxed flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{point.problems[0]}</span>
                      </div>
                      
                      {/* Show remaining problem points when expanded */}
                      <CollapsibleContent className="space-y-1.5 mt-1.5">
                        {point.problems.slice(1).map((problem, idx) => (
                          <div key={idx} className="text-gray-700 text-sm leading-relaxed flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{problem}</span>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                  
                  {/* Solutions Accordion */}
                  <Collapsible
                    open={openSolutions[index]}
                    onOpenChange={() => toggleSolution(index)}
                    className="space-y-2 bg-viral-light-purple/30 p-4 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0" />
                        <h4 className="font-semibold text-viral-black">SalesBang Solution:</h4>
                      </div>
                      <CollapsibleTrigger className="rounded-full w-8 h-8 inline-flex items-center justify-center hover:bg-viral-purple/20 transition-colors">
                        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openSolutions[index] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                    </div>
                    
                    <div className="pl-7 space-y-0.5">
                      {/* Always show the first solution point */}
                      <div className="text-gray-700 text-sm leading-relaxed flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-viral-purple mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{point.solution[0]}</span>
                      </div>
                      
                      {/* Show remaining solution points when expanded */}
                      <CollapsibleContent className="space-y-1.5 mt-1.5">
                        {point.solution.slice(1).map((solution, idx) => (
                          <div key={idx} className="text-gray-700 text-sm leading-relaxed flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-viral-purple mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{solution}</span>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
            Start Solving These Problems Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
