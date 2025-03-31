
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, BriefcaseBusiness, Code } from 'lucide-react';

const useCases = [
  {
    icon: <ShoppingBag className="h-12 w-12 text-viral-purple mb-6" />,
    title: "Online Stores",
    description: "E-commerce businesses use SalesBang to turn filled but unpaid shopping carts into completed sales. By offering Credits for viral tasks, stores motivate customers to complete purchases and return for more, increasing repeat purchases by 3-4x.",
    features: [
      "Conversion of abandoned carts",
      "Customer-generated product reviews",
      "Social media content from real users",
      "Increased repeat purchase rate",
      "Authentic word-of-mouth marketing"
    ],
    cta: "Ideal for any e-commerce business looking to boost sales"
  },
  {
    icon: <BriefcaseBusiness className="h-12 w-12 text-viral-purple mb-6" />,
    title: "Fintech & Banks",
    description: "Financial institutions leverage SalesBang to acquire new customers at a fraction of traditional costs. Our platform helps create authentic testimonials and reviews that build trust in an industry where credibility is essential.",
    features: [
      "Trust-building testimonials",
      "Reduced customer acquisition costs",
      "Increased app downloads and usage",
      "User-generated content for financial products",
      "Higher conversion rates for financial services"
    ],
    cta: "Trusted by financial services looking for authentic growth"
  },
  {
    icon: <Code className="h-12 w-12 text-viral-purple mb-6" />,
    title: "IT Companies",
    description: "Software and technology companies use SalesBang to accelerate user acquisition and product adoption. By incentivizing current users to create tutorials, reviews, and social media content, IT companies build credibility and drive organic growth.",
    features: [
      "User-generated tutorials and guides",
      "Authentic software reviews",
      "Technical content from real users",
      "Community building and engagement",
      "Viral product demonstrations"
    ],
    cta: "Perfect for SaaS, apps, and technology products"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">SalesBang for <span className="text-viral-purple">Your Industry</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See how businesses like yours are achieving exponential growth with our viral marketing platform.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-semibold text-viral-black mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-viral-black mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-viral-purple mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-500 italic">{useCase.cta}</p>
              </div>
              <div className="p-6 bg-viral-light-purple">
                <Button className="w-full bg-viral-purple hover:bg-viral-dark-purple text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Don't see your industry? SalesBang works for businesses of all types.</p>
          <a href="#contact" className="text-viral-purple font-medium hover:underline">Contact us for a custom solution</a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
