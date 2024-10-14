import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Dedicated to Justice and Excellence
            </p>
            <p className="mt-4 text-lg text-gray-500">
              At Justice Law, we believe in the power of the law to protect rights, resolve disputes, and create a just society. Our team of experienced attorneys is committed to providing exceptional legal services with integrity and compassion.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 1995, we have built a reputation for excellence in various areas of law. Our client-centered approach ensures that we understand your unique needs and work tirelessly to achieve the best possible outcomes for you.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Team of lawyers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;