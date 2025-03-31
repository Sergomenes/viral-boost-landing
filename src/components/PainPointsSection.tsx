
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const painPoints = [
  {
    problem: "Expensive advertising and high cost of leads",
    solution: "Your customers will publish content about your business for free. Use ready-made viral task templates to get optimal results."
  },
  {
    problem: "Low user trust in direct advertising",
    solution: "Leverage the authentic voice of your customers through word-of-mouth recommendations that build genuine trust."
  },
  {
    problem: "Standard affiliate programs are ineffective",
    solution: "Provide immediate rewards and clear instructions for each viral task, making it easy and attractive for customers to participate."
  },
  {
    problem: "Many sites prohibit and remove referral content",
    solution: "Our approach generates authentic content that doesn't get flagged as promotional or affiliate marketing."
  },
  {
    problem: "SEO is expensive, time-consuming, and unpredictable",
    solution: "Get regular 'white' mentions of your brand across the web from real customers, improving your search rankings organically."
  },
  {
    problem: "Low conversion and few repeat purchases",
    solution: "Create a virtual currency system that binds customers to your site and increases repeat purchase statistics by 3-4 times."
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">How SalesBang <span className="text-viral-purple">Solves Your Key Problems</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang tackles the most challenging obstacles to sustainable sales growth with innovative solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-viral-black mb-2">The Problem:</h3>
                      <p className="text-gray-700">{point.problem}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-viral-black mb-2">Our Solution:</h3>
                      <p className="text-gray-700">{point.solution}</p>
                    </div>
                  </div>
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
