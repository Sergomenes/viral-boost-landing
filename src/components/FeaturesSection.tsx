
import React from 'react';
import { 
  Rocket, 
  Users, 
  LineChart, 
  Share2, 
  Shield, 
  Code,
  Target,
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-viral-purple" />,
    title: 'Viral Campaigns',
    description: 'Create campaigns that spread exponentially through your existing customer base, turning satisfied customers into brand advocates.'
  },
  {
    icon: <Users className="h-8 w-8 text-viral-purple" />,
    title: 'Customer Engagement',
    description: 'Build deeper relationships with your customers through personalized interactions and referral incentives.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-viral-purple" />,
    title: 'Advanced Analytics',
    description: 'Track performance metrics with comprehensive analytics showing real-time campaign results and ROI calculations.'
  },
  {
    icon: <Share2 className="h-8 w-8 text-viral-purple" />,
    title: 'Social Sharing',
    description: 'Leverage the power of social media with seamless integration across all major platforms to maximize your reach.'
  },
  {
    icon: <Target className="h-8 w-8 text-viral-purple" />,
    title: 'Targeted Campaigns',
    description: 'Create custom audiences and segments to ensure your campaigns reach the right people at the right time.'
  },
  {
    icon: <Zap className="h-8 w-8 text-viral-purple" />,
    title: 'Quick Integration',
    description: 'Easy API integration with your existing tech stack, CRM systems, and e-commerce platforms for seamless workflow.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Powerful Features to <span className="text-viral-purple">Grow Your Business</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang comes loaded with tools designed to make your products and services go viral, increasing reach and sales exponentially.</p>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience viral growth?</h3>
              <p className="text-white/80">Join thousands of businesses already using SalesBang to boost their sales and customer engagement.</p>
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
