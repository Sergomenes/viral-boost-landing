
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const painPoints = [
  {
    title: "Expensive advertising and high cost of leads",
    problems: [
      "High cost of direct advertising",
      "Low user trust in direct advertising",
      "Low conversion rate of ad impressions into clicks to your website",
      "As a consequence, the high cost of attracting a new customer"
    ],
    solution: "Your customers will regularly publish the content you want in the form and on the platforms where you want. Free of charge for you! Come up with marketing assignments for your customers, or use the many ready-made viral templates from SalesBang, and offer them to your customers."
  },
  {
    title: "Standard affiliate and referral programs are not effective",
    problems: [
      "Many sites prohibit referral links, consider them toxic, and remove referral content",
      "In standard referral programs, the partner's reward for his efforts and actions is postponed indefinitely and unpredictable, so his motivation tends to zero",
      "Your referrals usually have no marketing expertise and don't know where, how and what to publish, so it's profitable for both them and you",
      "As a consequence, your users are not interested in participating in standard affiliate programs, and you lose their potential"
    ],
    solution: "Your client is rewarded for the fulfillment of your viral assignment immediately after its execution. Your client has clear instructions for each viral task - how to make content about you, where and how to publish it."
  },
  {
    title: "SEO is expensive, time-consuming, and unpredictable",
    problems: [
      "The position of your site in organic search depends on the number of mentions and links to your site on external resources. Buying them is expensive, difficult, and ineffective",
      "Links mass and mentions on the Internet about your business should be constantly replenished. This can only be done by a lot of users and only on a regular basis",
      "Search engines regularly change the rules of prioritization in search engine results, the only constant ranking factor is the number of mentions of your brand/product and the number of external links to your site",
      "As a consequence, it is almost impossible to get organic search traffic without multiple \"white\" mentions of your website or brand on the internet"
    ],
    solution: "You provide all your customers with a convenient tool to regularly publish positive reviews, recommendations, articles, and videos about your company or product. As a result, you get direct traffic of new clients from the flow of viral publications, \"white\" SEO and growth of organic search traffic by improving the position of the site in search engines."
  },
  {
    title: "Low conversion of users into purchases, low share of repeat purchases",
    problems: [
      "The customer's decision to pay for the first purchase is the most difficult stage in your sales funnel. Filled and unpaid \"shopping carts\" are a real pain for any online store",
      "Once a user has made a purchase, there is almost nothing to motivate him to come back to you again. He has no \"asset\" left on your site that he would be sorry to lose",
      "Competition in your market niche is high, and the ease of your customer switching to a competitor drastically reduces their lifecycle and likelihood of a repeat purchase"
    ],
    solution: "Your customers get a special virtual currency that they can spend on partial payment for only your products and services. On which ones, you decide for yourself. This is an \"asset\" that binds the client to your site, and an effective tool that increases the statistics of repeat purchases by 3-4 times."
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">How SalesBang <span className="text-viral-purple">Solves Your Key Problems</span> of Delivering Sales Growth</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang tackles the most challenging obstacles to sustainable sales growth with innovative solutions.</p>
        </div>

        <div className="space-y-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-viral-black mb-4 flex items-center">
                <span className="bg-viral-purple text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">{index + 1}</span>
                {point.title}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                    <h4 className="font-semibold text-lg text-viral-black">The Problems:</h4>
                  </div>
                  <ul className="ml-9 space-y-2">
                    {point.problems.map((problem, idx) => (
                      <li key={idx} className="text-gray-700 list-disc">{problem}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <h4 className="font-semibold text-lg text-viral-black">SalesBang Solution:</h4>
                  </div>
                  <p className="ml-9 text-gray-700">{point.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
