
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const painPoints = [
  {
    problem: "High customer acquisition costs",
    solution: "Reduce CAC by leveraging existing customers as marketers through incentivized referrals"
  },
  {
    problem: "Low conversion rates",
    solution: "Increase conversions with trusted recommendations from friends and family"
  },
  {
    problem: "Limited marketing budget",
    solution: "Stretch your budget with cost-effective viral campaigns that scale organically"
  },
  {
    problem: "Difficulty standing out in crowded markets",
    solution: "Create buzz and differentiate your brand with innovative viral marketing strategies"
  },
  {
    problem: "Building customer trust",
    solution: "Leverage social proof and personal recommendations to establish credibility"
  },
  {
    problem: "Measuring marketing ROI",
    solution: "Track every step of the viral campaign with detailed analytics and attribution"
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Problems <span className="text-viral-purple">We Solve</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SalesBang addresses critical business challenges by transforming your marketing approach.</p>
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
