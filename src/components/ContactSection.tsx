
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
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions or ready to boost your sales with viral marketing? Get in touch with our team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-viral-black mb-6">Contact Us</h3>
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
                <label htmlFor="company" className="block text-sm font-medium text-viral-black mb-1">Company</label>
                <Input id="company" placeholder="Your company name" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-viral-black mb-1">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="w-full min-h-[120px]" />
              </div>
              <Button className="w-full bg-viral-purple hover:bg-viral-dark-purple text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-viral-black mb-6">Register for a Free Trial</h3>
              <p className="text-gray-600 mb-8">Experience the power of viral marketing with our 14-day free trial. No credit card required.</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="reg-name" className="block text-sm font-medium text-viral-black mb-1">Full Name</label>
                  <Input id="reg-name" placeholder="Your full name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium text-viral-black mb-1">Work Email</label>
                  <Input id="reg-email" type="email" placeholder="you@company.com" className="w-full" />
                </div>
                <div>
                  <label htmlFor="reg-company" className="block text-sm font-medium text-viral-black mb-1">Company Name</label>
                  <Input id="reg-company" placeholder="Your company" className="w-full" />
                </div>
                <div>
                  <label htmlFor="reg-website" className="block text-sm font-medium text-viral-black mb-1">Website</label>
                  <Input id="reg-website" placeholder="https://yourcompany.com" className="w-full" />
                </div>
                <Button className="w-full bg-viral-purple hover:bg-viral-dark-purple text-white">
                  Start Free Trial
                </Button>
                <p className="text-xs text-center text-gray-500">By signing up, you agree to our Terms of Service and Privacy Policy</p>
              </form>
            </div>

            <div className="mt-12 flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="bg-viral-light-purple rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-viral-purple" />
                </div>
                <div>
                  <p className="font-medium text-viral-black">Email</p>
                  <a href="mailto:info@salesbang.com" className="text-gray-600 hover:text-viral-purple">info@salesbang.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-viral-light-purple rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-viral-purple" />
                </div>
                <div>
                  <p className="font-medium text-viral-black">Phone</p>
                  <a href="tel:+18005550199" className="text-gray-600 hover:text-viral-purple">+1 (800) 555-0199</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
