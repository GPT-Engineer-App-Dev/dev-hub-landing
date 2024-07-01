import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Index() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Connecting Top Developers with Leading Companies</h1>
          <p className="mt-4 text-xl">Join our network and find your dream job or hire the best talent</p>
          <Button variant="primary" className="mt-6">Get Started</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/images/about-us.jpg" alt="About Us" className="w-full md:w-1/2 rounded-lg shadow-lg" />
              <div className="mt-6 md:mt-0 md:ml-6">
                <p className="text-lg">We are a leading recruiting agency focused on connecting top developers with leading companies. Our mission is to help developers find their dream jobs and assist companies in hiring the best talent.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/service-job-placement.jpg" alt="Job Placement" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold">Job Placement</h3>
                <p className="text-center">We help developers find the best job opportunities that match their skills and career goals.</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/service-talent-acquisition.jpg" alt="Talent Acquisition" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold">Talent Acquisition</h3>
                <p className="text-center">We assist companies in acquiring top talent to meet their business needs and drive success.</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/service-career-counseling.jpg" alt="Career Counseling" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold">Career Counseling</h3>
                <p className="text-center">We provide career counseling services to help developers navigate their career paths and achieve their goals.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/testimonial-1.jpg" alt="Client 1" className="w-16 h-16 rounded-full mb-4" />
                <p className="text-center">"DevConnect helped me find my dream job in no time. Their team is professional and dedicated."</p>
                <p className="mt-2 font-semibold">- John Doe</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/testimonial-2.jpg" alt="Client 2" className="w-16 h-16 rounded-full mb-4" />
                <p className="text-center">"The talent acquisition services provided by DevConnect are top-notch. We found the perfect candidates for our company."</p>
                <p className="mt-2 font-semibold">- Jane Smith</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/testimonial-3.jpg" alt="Client 3" className="w-16 h-16 rounded-full mb-4" />
                <p className="text-center">"I highly recommend DevConnect for their career counseling services. They helped me navigate my career path effectively."</p>
                <p className="mt-2 font-semibold">- Michael Johnson</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" name="message" rows="4" required />
              </div>
              <Button type="submit" variant="primary">Send Message</Button>
            </form>
            <div className="mt-8">
              <p className="text-lg font-semibold">Contact Details</p>
              <p className="mt-2">Address: 123 Developer Lane, Tech City, TX 12345</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p className="mt-2">Email: contact@devconnect.com</p>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f3c8e0e2!2s123%20Developer%20Lane%2C%20Tech%20City%2C%20TX%2012345!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </div>
            <div className="mt-4 md:mt-0">
              <p>&copy; 2023 DevConnect. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;