// Service.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper component for dynamic "Read More"
const ExpandableText = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = children;

  const shortText = text.length > 300 ? text.substring(0, 300) + "..." : text;

  return (
    <div>
      <p className="text-lg leading-relaxed">{isExpanded ? text : shortText}</p>
      {text.length > 300 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-indigo-600 font-semibold hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

// Services data with images
const services = [
  {
    category: "Software Solutions",
    items: [
      {
        title: "Web Designing and Development",
        content: `At Vagarious Solutions Pvt. Ltd., we strongly believe that web design should pay great dividends for itself. We don't just design websites that look great, but they also deliver significant benefits for your business. Our team of award-winning web designers has all the expertise required to achieve your goals.`,
        image: "https://online.champlain.edu/sites/online/files/2024-10/blog-image-skills-web-designers-need-02.jpg",
      },
      {
        title: "Android & iOS Mobile Application Development",
        content: `Our mobile app design and development process for iPhone and Android apps puts the customer at the center. Mobile Apps tap into huge growth in mobile internet consumption and provide bespoke information anywhere, anytime.`,
        image: "https://tse3.mm.bing.net/th/id/OIP.G4TyEcBprzWWUgyHVA8wFQHaDw?pid=Api&P=0&h=180",
      },
      {
        title: "SEO & Digital Marketing",
        content: `We put the customer in the center of the experience. Our marketing strategies are refined and elegant, helping businesses tap into the huge growth in digital consumption.`,
        image: "https://tse2.mm.bing.net/th/id/OIP.bJG8ghn6hSzto7PQKR_w8AHaEK?pid=Api&P=0&h=180",
      },
    ],
  },
  {
    category: "IT Staffing",
    items: [
      {
        title: "Contract Staffing",
        content: `Short-term solutions for long-term goals. We contract a wide range of professionals to meet the needs of cyclical business growth.`,
        image: "https://tse2.mm.bing.net/th/id/OIP.j3CRStHJhgVzNQQyoQHHJwHaEK?pid=Api&P=0&h=180",
      },
      {
        title: "Payroll Service",
        content: `We handle payroll services, managing seasonal hiring surges and becoming the candidate’s employer on record.`,
        image: "https://hticglobal.com/blog/wp-content/uploads/2024/07/Payroll-Services-in-Dubai-scaled.webp",
      },
      {
        title: "Recruitment Process Outsourcing",
        content: `Flexible talent acquisition models including Project, Skill, Turnkey, Hybrid, or Total Solution models to meet your business needs.`,
        image: "https://peoplenorth.com/wp-content/uploads/2023/03/human-resources-hr-management-recruitment-employment-headhunting-concept-1-scaled-1.webp",
      },
      
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Service = () => {
  return (
    <div className=" text-black font-sans relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center p-6 bg-gray-900">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 opacity-20 animate-pulse-slow"
        />
        <div className="relative z-10 text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Building Scalable Solutions for World-Class Problems
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Come build the future with us. Invent, build, and improve solutions that impact millions worldwide.
          </motion.p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-6 lg:px-20">
        {services.map((serviceCategory, index) => (
          <div key={index} className="mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {serviceCategory.category}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <AnimatePresence>
                {serviceCategory.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="rounded-xl shadow-lg border border-gray-200 bg-white cursor-pointer hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                        {item.title}
                      </h3>
                      <ExpandableText>{item.content}</ExpandableText>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Service;
