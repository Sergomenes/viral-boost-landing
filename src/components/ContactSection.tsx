
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-viral-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viral-black mb-4">Ready to <span className="text-viral-purple">Get Started?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions or ready to boost your sales? Get in touch with our team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-viral-black mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-viral-black mb-1">Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-viral-black mb-1">Email</label>
                  <Input id="email" type="email" placeholder="you@example.com" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-viral-black mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-viral-black mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="w-full min-h-[120px]" />
              </div>
              <Button className="w-full bg-viral-purple hover:bg-viral-dark-purple text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-viral-black mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-viral-light-purple rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-viral-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-viral-black">Email</p>
                    <a href="mailto:hello@viralboost.com" className="text-gray-600 hover:text-viral-purple">hello@viralboost.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-viral-light-purple rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-viral-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-viral-black">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-viral-purple">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-viral-light-purple rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-viral-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-viral-black">Office</p>
                    <p className="text-gray-600">123 Growth Street, San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-viral-purple to-viral-dark-purple rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Start Your 14-Day Free Trial</h3>
              <p className="mb-6 text-white/80">No credit card required. Full access to all features.</p>
              <Button className="w-full bg-white text-viral-purple hover:bg-viral-light-purple">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
