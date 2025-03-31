
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ViralBoost help increase sales?",
    answer: "ViralBoost leverages the power of word-of-mouth marketing by implementing viral referral campaigns, social sharing incentives, and customer advocacy programs. Our platform makes it easy for satisfied customers to share your products, bringing in new leads and increasing conversions at a fraction of traditional marketing costs."
  },
  {
    question: "Is ViralBoost suitable for my industry?",
    answer: "Absolutely! ViralBoost has been successfully implemented across various industries including e-commerce, SaaS, financial services, education, and healthcare. Our customizable campaigns can be tailored to your specific industry needs and compliance requirements."
  },
  {
    question: "How quickly can I expect to see results?",
    answer: "Most customers start seeing initial results within 2-4 weeks of launching their first campaign. However, the viral effect compounds over time, with many businesses reporting significant growth acceleration after 2-3 months of consistent use of the platform."
  },
  {
    question: "Do I need technical knowledge to use ViralBoost?",
    answer: "Not at all! ViralBoost is designed with a user-friendly interface that requires no coding or technical expertise. Our step-by-step campaign builder and intuitive dashboard make it easy for anyone to create and manage viral marketing campaigns."
  },
  {
    question: "Can I integrate ViralBoost with my existing tools?",
    answer: "Yes, ViralBoost seamlessly integrates with most popular CRM systems, e-commerce platforms, email marketing tools, and analytics software. We offer ready-made integrations for platforms like Shopify, WooCommerce, Salesforce, HubSpot, and more. We also provide API access for custom integrations."
  },
  {
    question: "Is there a limit to how many campaigns I can run?",
    answer: "The number of campaigns you can run depends on your subscription plan. Our Starter plan allows up to 3 concurrent campaigns, Growth plan supports up to 10, and Enterprise plans offer unlimited campaigns. You can always upgrade your plan as your needs grow."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Frequently Asked <span className="text-viral-purple">Questions</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about ViralBoost and how it can help your business grow.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-viral-black py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="text-viral-purple font-medium hover:underline">Contact our support team</a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
