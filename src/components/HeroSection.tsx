
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-white via-viral-light-purple/20 to-white bg-hero-pattern bg-repeat py-16 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-viral-black mb-6 leading-tight">
              Boost Your Sales <span className="text-viral-purple">Virally</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Unlock exponential growth with our platform that turns customers into your best marketers. Drive sales, increase engagement, and watch your business go viral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 shadow-lg shadow-viral-purple/30">
                Get Started Free <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-viral-purple border-viral-purple hover:bg-viral-light-purple px-8 py-6 text-lg rounded-lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-viral-light-purple rounded-full p-2">
                  <TrendingUp className="h-5 w-5 text-viral-purple" />
                </div>
                <p className="text-sm text-gray-600"><span className="font-semibold">3.5x</span> Growth Rate</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-viral-light-purple rounded-full p-2">
                  <Users className="h-5 w-5 text-viral-purple" />
                </div>
                <p className="text-sm text-gray-600"><span className="font-semibold">10k+</span> Happy Users</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-viral-light-purple rounded-full p-2">
                  <BarChart className="h-5 w-5 text-viral-purple" />
                </div>
                <p className="text-sm text-gray-600"><span className="font-semibold">40%</span> Conversion Rate</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-viral-purple/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-viral-light-purple rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                    alt="Dashboard preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <p className="text-white text-lg font-medium">Watch your campaigns go viral in real-time</p>
                    <div className="mt-2 flex items-center">
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white text-sm ml-2">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
