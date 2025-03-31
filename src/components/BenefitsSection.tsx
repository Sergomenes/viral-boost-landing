
import React from 'react';
import { Check, X } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Why Choose <span className="text-viral-purple">SalesBang</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our viral marketing approach offers significant advantages over traditional affiliate programs and direct advertising.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-viral-purple mb-6">SalesBang</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Leverages your existing customer base</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Builds brand advocacy and loyalty</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Natural, word-of-mouth promotion</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Higher trust and conversion rates</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Lower customer acquisition costs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Scalable exponential growth</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Detailed analytics and insights</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Affiliate Programs</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Professional marketers promotion</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Commission-based structure</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Often lacks genuine recommendations</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Limited community building</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Higher costs with variable results</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Linear growth model</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Less targeted audience reach</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Direct Advertising</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Wide reach potential</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Brand awareness building</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Decreasing effectiveness (ad blindness)</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Highest customer acquisition cost</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Limited trust and engagement</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">No community or loyalty building</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Difficult to measure true ROI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
