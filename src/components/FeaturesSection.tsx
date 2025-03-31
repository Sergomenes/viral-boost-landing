
import React from 'react';
import { 
  Rocket, 
  Users, 
  LineChart, 
  Share2, 
  Target,
  Zap,
  Star,
  Award 
} from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-viral-purple" />,
    title: 'Viral Marketing Tasks',
    description: 'Create a pool of viral promotional tasks for your customers based on ready-made templates or custom campaigns to promote your business.'
  },
  {
    icon: <Users className="h-8 w-8 text-viral-purple" />,
    title: 'Customer Ambassadors',
    description: 'Turn all your customers into ambassadors, promoters, and salespeople who actively promote your products and services.'
  },
  {
    icon: <Star className="h-8 w-8 text-viral-purple" />,
    title: 'Virtual Currency Rewards',
    description: 'Reward your clients with virtual currency (Credits) for completing viral tasks, which they can use for purchases.'
  },
  {
    icon: <Share2 className="h-8 w-8 text-viral-purple" />,
    title: 'Content Generation',
    description: 'Customers create and publish valuable content about your company or product on various platforms, boosting your online presence.'
  },
  {
    icon: <Target className="h-8 w-8 text-viral-purple" />,
    title: 'Immediate Rewards',
    description: 'Customers receive rewards immediately after task completion, providing instant gratification and encouraging participation.'
  },
  {
    icon: <Award className="h-8 w-8 text-viral-purple" />,
    title: 'Special Benefits',
    description: 'Create exclusive offers that customers can purchase only with Credits, increasing loyalty and retention.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">How Can You Achieve <span className="text-viral-purple">250% Monthly Growth</span> Without Advertising?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang provides powerful tools to leverage your customers as your most effective marketing force, driving exponential growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-viral-light-purple rounded-lg inline-flex p-3 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-viral-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-viral-purple to-viral-dark-purple rounded-2xl p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to harness your customers' potential?</h3>
              <p className="text-white/80">Join businesses already using SalesBang to boost sales by 250% monthly without additional advertising costs.</p>
            </div>
            <a 
              href="#" 
              className="px-8 py-3 bg-white text-viral-purple font-medium rounded-lg hover:bg-viral-light-purple transition-colors duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
