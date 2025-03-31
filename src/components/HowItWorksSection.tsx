
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Layout, Gift, CheckSquare, ShoppingBag } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Layout className="h-10 w-10 text-viral-purple" />,
    title: "Create Viral Tasks",
    description: "Create a pool of viral marketing tasks for your clients using SalesBang's ready-made templates or design your own custom tasks related to content creation and publishing."
  },
  {
    number: "02",
    icon: <Gift className="h-10 w-10 text-viral-purple" />,
    title: "Assign Rewards",
    description: "Set rewards for each viral task in virtual Credits. For example: a review on TrustPilot = 2 Credits, a post on Instagram = 3 Credits, a post on Reddit = 5 Credits."
  },
  {
    number: "03",
    icon: <CheckSquare className="h-10 w-10 text-viral-purple" />,
    title: "Verify & Reward",
    description: "Connect your customers to your viral campaign, verify the quality of completed tasks, and immediately reward them with Credits upon verification."
  },
  {
    number: "04",
    icon: <ShoppingBag className="h-10 w-10 text-viral-purple" />,
    title: "Create Special Benefits",
    description: "Offer exclusive products, services, or discounts that customers can only purchase with their earned Credits, increasing loyalty and engagement."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">How <span className="text-viral-purple">SalesBang</span> Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our simple 4-step process makes it easy to turn your customers into your most powerful marketing force.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute -top-4 -right-4 bg-viral-purple text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                {step.number}
              </div>
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-viral-black mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 mx-auto shadow-lg shadow-viral-purple/30">
            Start Your Viral Campaign <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
