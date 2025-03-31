
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BarChart, Award, Share2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Users className="h-10 w-10 text-viral-purple" />,
    title: "Set Up Your Campaign",
    description: "Define your goals, incentives, and target audience. Configure your campaign parameters and customize the user experience to match your brand."
  },
  {
    number: "02",
    icon: <Share2 className="h-10 w-10 text-viral-purple" />,
    title: "Engage Your Customers",
    description: "Invite your existing customers to participate in your viral campaign through email, social media, or your website."
  },
  {
    number: "03",
    icon: <Award className="h-10 w-10 text-viral-purple" />,
    title: "Reward Participation",
    description: "Incentivize sharing with rewards, discounts, or exclusive access. Our reward engine automatically tracks and distributes rewards."
  },
  {
    number: "04",
    icon: <BarChart className="h-10 w-10 text-viral-purple" />,
    title: "Monitor & Optimize",
    description: "Track performance in real-time with our advanced analytics dashboard. Optimize your campaign based on data-driven insights."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">How <span className="text-viral-purple">SalesBang</span> Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our simple 4-step process makes it easy to launch and manage successful viral marketing campaigns.</p>
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
            Start Your First Campaign <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
