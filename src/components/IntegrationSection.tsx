
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const integrations = [
  {
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    name: "Shopify",
    description: "Seamlessly integrate with your Shopify store for customer rewards and viral campaigns."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    name: "WooCommerce",
    description: "Connect your WordPress store to implement viral marketing through your existing site."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    name: "Salesforce",
    description: "Leverage your CRM data to create personalized viral campaigns for your customers."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
    name: "HubSpot",
    description: "Align your marketing automation with viral campaigns for maximum effectiveness."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/mailchimp.svg",
    name: "Mailchimp",
    description: "Invite customers to participate in viral tasks through your email marketing."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    name: "Stripe",
    description: "Process payments and handle virtual currency conversions seamlessly."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
    name: "Zapier",
    description: "Connect with 3,000+ apps to automate your viral marketing workflow."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    name: "Slack",
    description: "Receive real-time notifications when customers complete viral tasks."
  }
];

const IntegrationSection = () => {
  return (
    <section id="integration" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Integrate SalesBang With <span className="text-viral-purple">Your Business</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang connects with your existing platforms to create a unified viral marketing ecosystem that drives growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`} 
                  className="h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-viral-black mb-2 text-center">{integration.name}</h3>
              <p className="text-gray-600 text-center text-sm">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Already have an affiliate program? SalesBang can integrate with your existing system without transferring any customer data.</p>
          <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto">
            Learn About Integration Options <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
