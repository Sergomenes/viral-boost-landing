
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Smartphone } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section id="integration" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Integrate SalesBang With <span className="text-viral-purple">Your Business</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Integrate SalesBang with your online store, website, or app.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-viral-black mb-4">Flexible Integration Options</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-viral-light-purple p-3 rounded-lg">
                    <Code className="h-6 w-6 text-viral-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Seamless Integration</h4>
                    <p className="text-gray-600">If you already have your own existing affiliate referral program, integrate it seamlessly with SalesBang, and implement our "viral" functionality into the interface of your website / app / online store.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-viral-light-purple p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-viral-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Data Privacy</h4>
                    <p className="text-gray-600">When integrating, you do not transfer any personal data of your customers to SalesBang.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-viral-light-purple p-3 rounded-lg">
                    <Smartphone className="h-6 w-6 text-viral-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Test Before Full Integration</h4>
                    <p className="text-gray-600">If you can't implement seamless integration yet or want to test the platform's capabilities before the full integration, organize a viral campaign for your customers in the SalesBang platform interface.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://placehold.co/600x400/e5deff/6d28d9?text=Integration+Diagram&font=roboto" 
                alt="Integration Diagram" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-12">
          <CollapsibleTrigger className="w-full">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-viral-black">View Compatible Platforms</h3>
              <Button variant="ghost" className="rounded-full h-8 w-8 p-0">
                <span className="sr-only">Toggle</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
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
          </CollapsibleContent>
        </Collapsible>

        <div className="text-center">
          <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto">
            Learn About Integration Options <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
