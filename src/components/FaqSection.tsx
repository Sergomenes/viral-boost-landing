
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is SalesBang and how does it work?",
    answer: "SalesBang is a viral marketing platform that helps businesses grow through customer referrals and social sharing. We provide the tools to create, launch, and manage viral marketing campaigns that incentivize your existing customers to promote your products or services to their networks, resulting in exponential growth at a fraction of traditional marketing costs."
  },
  {
    question: "How is SalesBang different from affiliate marketing?",
    answer: "Unlike affiliate marketing, which relies on professional marketers promoting your products, SalesBang leverages your existing satisfied customers as brand advocates. This results in more authentic recommendations, higher trust levels, better conversion rates, and lower customer acquisition costs. Our platform focuses on building genuine relationships rather than transactional promotions."
  },
  {
    question: "What types of businesses can benefit from SalesBang?",
    answer: "SalesBang is designed to work for businesses of all sizes across various industries. We've had particular success with e-commerce stores, fintech/banking services, SaaS companies, and various B2C and B2B businesses. If you have satisfied customers who could potentially recommend your products or services, SalesBang can help you leverage that potential for growth."
  },
  {
    question: "How quickly can I expect to see results?",
    answer: "Most customers start seeing initial results within 2-4 weeks of launching their first campaign. However, the viral effect compounds over time, with many businesses reporting significant growth acceleration after 2-3 months of consistent use of the platform. The exact timeline depends on your existing customer base, the appeal of your incentives, and how well your offering naturally lends itself to word-of-mouth marketing."
  },
  {
    question: "Do I need technical knowledge to use SalesBang?",
    answer: "Not at all! SalesBang is designed with a user-friendly interface that requires no coding or technical expertise. Our step-by-step campaign builder and intuitive dashboard make it easy for anyone to create and manage viral marketing campaigns. For more advanced customizations, we offer API access, but this is entirely optional."
  },
  {
    question: "What platforms and tools does SalesBang integrate with?",
    answer: "SalesBang seamlessly integrates with most popular e-commerce platforms (Shopify, WooCommerce, Magento), CRM systems (Salesforce, HubSpot), email marketing tools (Mailchimp, Klaviyo), payment processors (Stripe, PayPal), and many more. We also offer Zapier integration, which connects you to 3,000+ apps, and a robust API for custom integrations."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Frequently Asked <span className="text-viral-purple">Questions</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about SalesBang and how it can help your business grow.</p>
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
