import React from 'react';
import { Briefcase, Home, Users, FileText } from 'lucide-react';

const services = [
  {
    name: 'Corporate Law',
    description: 'Expert guidance for businesses on legal matters, contracts, and compliance.',
    icon: Briefcase,
  },
  {
    name: 'Real Estate Law',
    description: 'Assistance with property transactions, leases, and real estate disputes.',
    icon: Home,
  },
  {
    name: 'Family Law',
    description: 'Compassionate support for divorce, child custody, and family-related legal issues.',
    icon: Users,
  },
  {
    name: 'Civil Litigation',
    description: 'Strong representation in civil disputes and lawsuits.',
    icon: FileText,
  },
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Legal Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our experienced team offers a wide range of legal services to meet your needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;