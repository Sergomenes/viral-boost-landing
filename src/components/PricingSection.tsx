
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with viral marketing",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 5,000 visitors/month",
        "Basic referral campaigns",
        "Social sharing tools",
        "Email support",
        "Basic analytics dashboard"
      ],
      cta: "Get Started",
      popular: false,
      ctaColor: "bg-white border border-viral-purple text-viral-purple hover:bg-viral-light-purple"
    },
    {
      name: "Growth",
      description: "For growing businesses ready to maximize their viral potential",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 50,000 visitors/month",
        "Advanced referral programs",
        "All social integrations",
        "A/B campaign testing",
        "Priority support",
        "Full analytics suite",
        "Custom incentives"
      ],
      cta: "Get Started",
      popular: true,
      ctaColor: "bg-viral-purple text-white hover:bg-viral-dark-purple"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations with advanced needs",
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        "Unlimited visitors",
        "Custom viral campaigns",
        "White-label options",
        "API access",
        "Dedicated account manager",
        "Advanced fraud protection",
        "Custom reporting",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      popular: false,
      ctaColor: "bg-white border border-viral-purple text-viral-purple hover:bg-viral-light-purple"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Simple, Transparent <span className="text-viral-purple">Pricing</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Choose the perfect plan for your business needs. No hidden fees or surprises.</p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${isAnnual ? 'text-viral-black font-medium' : 'text-gray-500'}`}>Annual</span>
            <button 
              onClick={togglePricing}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle pricing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-1' : 'translate-x-7'
                }`}
              />
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-viral-black font-medium' : 'text-gray-500'}`}>Monthly</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm ${
                plan.popular ? 'ring-2 ring-viral-purple shadow-lg' : 'border border-gray-100'
              } p-8 flex flex-col h-full relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-viral-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-viral-black mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-viral-black">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span className="text-gray-600">/month</span>
                {isAnnual && (
                  <p className="text-sm text-viral-purple mt-2">Save ${(plan.monthlyPrice - plan.annualPrice) * 12} annually</p>
                )}
              </div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start mb-3">
                    <Check className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full py-6 ${plan.ctaColor}`}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">Need a custom solution?</p>
          <a href="#" className="text-viral-purple font-medium hover:underline">Contact our sales team</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
