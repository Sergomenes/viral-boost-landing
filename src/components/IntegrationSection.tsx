
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const integrations = [
  {
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    name: "Shopify",
    description: "Connect your Shopify store to launch viral campaigns directly to your customers."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    name: "WooCommerce",
    description: "Seamlessly integrate with your WooCommerce store for WordPress websites."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    name: "Salesforce",
    description: "Connect with Salesforce to leverage your CRM data for targeted campaigns."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
    name: "HubSpot",
    description: "Integrate with HubSpot to align your marketing automation with viral campaigns."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/mailchimp.svg",
    name: "Mailchimp",
    description: "Connect your email marketing to power viral campaigns through your newsletters."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    name: "Stripe",
    description: "Process payments and rewards seamlessly with Stripe integration."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
    name: "Zapier",
    description: "Connect with 3,000+ apps through Zapier to automate your workflow."
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    name: "Slack",
    description: "Get real-time notifications and updates directly in your Slack channels."
  }
];

const IntegrationSection = () => {
  return (
    <section id="integration" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Seamless <span className="text-viral-purple">Integrations</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang connects with your favorite tools and platforms to create a unified marketing ecosystem.</p>
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
          <p className="text-gray-600 mb-6">Don't see your platform? We offer custom API integration for any service.</p>
          <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto">
            View All Integrations <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
