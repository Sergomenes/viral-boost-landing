
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const painPoints = [
  {
    title: "Expensive advertising and high cost of leads",
    problems: [
      "High cost of direct advertising",
      "Low user trust in direct advertising",
      "Low conversion rate of ad impressions into conversions to your website",
      "Consequently, high cost of attracting a new customer"
    ],
    solution: [
      "Your customers themselves regularly create and publish the content you want, in the form and on the platforms you want, on a regular basis. At no cost to you!",
      "Come up with marketing assignments for your clients, or use the many ready-made viral templates from SalesBang. Offer them to all of your clients."
    ]
  },
  {
    title: "Standard affiliate and referral programs don't work",
    problems: [
      "Many sites prohibit the use of referral links, consider them toxic and remove referral content",
      "In a standard referral program, an affiliate's reward for their efforts and actions is deferred and unpredictable, so their motivation tends to zero",
      "More often than not, the referral has no expertise and doesn't know where, how, or what to publish so that it's profitable for both him and you",
      "As a consequence, your users are not interested in participating in standard affiliate programs and you lose their potential"
    ],
    solution: [
      "In addition to referral links, SalesBang enables your referrals to use \"referral nicknames\" when publishing affiliate content, indistinguishable from a regular username, which eliminates the deletion or pessimization of their publications",
      "Your client is rewarded for the performance of your viral assignment instantly upon execution and quality check",
      "Your client has a detailed and clear instruction for each task - how to make content about you, where and how to publish it"
    ]
  },
  {
    title: "SEO promotion is expensive, time-consuming, and unpredictable",
    problems: [
      "Your site's position in organic search depends on the number of mentions and links to your site on external resources. Buying them is expensive and not effective",
      "Link mass and mentions of your business should be constantly replenished and grow, this can only do a lot of users and only on a regular basis",
      "Search engines regularly change the rules of prioritization in search engine results, the only constant ranking factor is the number of mentions of your brand/product and the number of external links to your site",
      "As a consequence, it is almost impossible to get organic search traffic without multiple \"white\" mentions of your website or brand on the internet"
    ],
    solution: [
      "You provide all your customers with a convenient and clear tool to regularly publish positive reviews, recommendations, articles, videos about your company or product",
      "You get exponentially growing direct traffic of new customers from a stream of viral publications from your old and new customers",
      "You get an increase in search traffic by improving your site's position in search engines due to the growing number of mentions"
    ]
  },
  {
    title: "Low user-to-purchase conversion, low repeat purchase rate",
    problems: [
      "A customer's decision to pay for their first purchase is the most difficult step in your sales funnel. Refilled, unpaid and abandoned \"shopping carts\" are the pain of any online retailer",
      "Once a purchase is made, there is almost nothing to keep users in your marketplace, or motivate them to come back to you again. They have no \"asset\" left on your marketplace that he would be sorry to lose",
      "Competition in your marketplace niche is high, and the ease of your customer switching to a competitor drastically reduces customer loyalty, customer lifecycle, and likelihood of repeat purchase"
    ],
    solution: [
      "Your customers get a special virtual currency \"Credits\", which they get for performing your viral tasks, and can spend on partial or full payment for your products and services only",
      "The range and conditions of receiving \"benefits\" for your \"viral sellers\" you determine yourself, forming their motivation to continue promoting your site or your products",
      "\"Credits\" is an asset that binds the client to your site for a long time, and an effective tool that increases the statistics of his repeat purchases by 3-4 times"
    ]
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
                  <ul className="ml-9 space-y-2">
                    {point.solution.map((solutionItem, idx) => (
                      <li key={idx} className="text-gray-700 list-disc">{solutionItem}</li>
                    ))}
                  </ul>
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
