
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ViralBoost completely transformed our marketing approach. Within just 2 months, our customer acquisition cost dropped by 40% while conversions doubled.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechNova Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    stars: 5
  },
  {
    quote: "The referral system is simply brilliant. Our customers are now our best marketers, and the viral campaigns feature made our product launch a huge success.",
    author: "David Chen",
    position: "CEO",
    company: "Startup Foundry",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    stars: 5
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. Our social media engagement has increased by 300% and sales are up 70% quarter-over-quarter.",
    author: "Michelle Rodriguez",
    position: "E-commerce Manager",
    company: "Urban Styles",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    stars: 5
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. We can now see exactly what drives our viral growth and optimize accordingly.",
    author: "James Wilson",
    position: "Growth Lead",
    company: "DataPoint Solutions",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Loved by <span className="text-viral-purple">Growing Businesses</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers have to say about their experience with ViralBoost.</p>
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
          <p className="text-gray-600">from over 500+ reviews</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
