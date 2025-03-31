
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
                <span className="text-gray-700">Immediate rewards for customers</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Clear task instructions for customers</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Authentic content that doesn't get flagged</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">3-4x increase in repeat purchases</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Free customer-generated marketing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Improved SEO through genuine mentions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Virtual currency builds customer loyalty</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Affiliate Programs</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Commission-based structure</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">External promoters involved</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Rewards delayed and unpredictable</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Many sites prohibit referral links</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Referrals lack marketing expertise</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Low participation rate</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">No customer loyalty mechanism</span>
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
                <span className="text-gray-700">Professional content creation</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">High cost of advertising</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Low user trust in ads</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">Poor conversion rates</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">High cost per acquisition</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-500">No mechanism for repeat purchases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
