
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "SalesBang revolutionized our customer acquisition strategy. Our referral rate increased by 320% in just 3 months, and our CAC dropped by 40%.",
    author: "Michael Chen",
    position: "CMO",
    company: "TechGrowth Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5
  },
  {
    quote: "The viral campaigns feature is incredible. We launched our product and reached 5x our expected sales targets because our customers became our marketers.",
    author: "Sophia Rodriguez",
    position: "E-commerce Director",
    company: "Urban Styles",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5
  },
  {
    quote: "As a fintech company, trust is everything. SalesBang helped us leverage our existing customers to bring in qualified leads that converted at 3x our normal rate.",
    author: "James Wilson",
    position: "Growth Lead",
    company: "FinSecure",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    stars: 5
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. We can finally see the exact ROI of our referral marketing and optimize accordingly.",
    author: "Emily Johnson",
    position: "Digital Marketing Manager",
    company: "RetailNova",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Trusted by <span className="text-viral-purple">Industry Leaders</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See what our customers have to say about how SalesBang transformed their business growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-viral-purple text-viral-purple" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-viral-black">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-viral-purple text-viral-purple" />
            ))}
          </div>
          <p className="text-2xl font-bold text-viral-black mb-2">4.9 out of 5 stars</p>
          <p className="text-gray-600">from over 800+ verified reviews</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
