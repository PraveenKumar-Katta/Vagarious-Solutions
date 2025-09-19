import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop";
const serviceImages = {
  software:
    "https://www.rishabhsoft.com/wp-content/uploads/2022/03/Software-Product-Development-Strategy_Banner.jpg",
  staffing:
    "https://wallpapers.com/images/featured/recruitment-background-ed2p9ykc103wp82w.jpg",
  consulting:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
};

const banners = [
  {
    src: "https://img.freepik.com/premium-photo/creative-agency-business-brain-storm-meeting-presentation-team-discussing-roadmap-product-launch_926199-3658035.jpg",
    alt: "Developers discussing product roadmap",
    text: "Building innovative software solutions from the ground up.",
  },
  {
    src: "https://fortyseven47.com/storage/2023/09/Enhancing-Customer-Experiences-with-AI-and-Big-Data-1024x614.jpeg",
    alt: "Modern office with product design team",
    text: "Empowering businesses with exceptional talent.",
  },
  {
    src: "https://thumbs.dreamstime.com/z/concept-price-delivery-quality-reliability-leading-to-c-customer-satisfaction-blackboard-86097942.jpg?w=992",
    alt: "Software engineer coding for client project",
    text: "Delivering quality and reliability on every project.",
  },
];

const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const slideVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section className="font-sans text-gray-800">
      <div className="relative w-full h-[70vh] md:h-[85vh]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImage}
          alt="Team working together on a project"
        />
        <div className="absolute inset-0 bg-indigo-900/60 flex flex-col items-center justify-center p-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight"
          >
            Empowering Your Business Through Technology and Talent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-white max-w-3xl"
          >
            A solitary point IT Staffing and Software solutions provider.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-50 transition-colors duration-300"
          >
            Explore Our Services
          </motion.button>
        </div>
      </div>

      <div className="py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:text-2xl leading-relaxed max-w-5xl mx-auto "
        >
          Vagarious Solutions is your one-stop IT partner, providing{" "}
          <strong>tailored software solutions</strong> and{" "}
          <strong>strategic staffing services</strong>. We quickly identify your
          challenges and design solutions that minimize disruption, empowering
          your business to achieve its goals efficiently and effectively.
        </motion.p>
      </div>

      <div className="w-full relative py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">
          Our Commitment to Excellence
        </h2>
        <div className="relative w-full h-[750px] overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence>
            <motion.img
              key={index}
              src={banners[index].src}
              alt={banners[index].alt}
              className="w-full h-full object-cover"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <motion.p
                key={`text-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-3xl md:text-4xl font-semibold text-center max-w-3xl px-6"
              >
                {banners[index].text}
              </motion.p>
            </div>
          </AnimatePresence>
        </div>
        <div className="flex gap-4 p-5 items-center justify-center mt-6">
          {banners.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === i ? "bg-indigo-600 w-8" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <ServiceCard
            title="Software Development"
            description="We build custom software, web applications, and mobile apps tailored to your business needs."
            image={serviceImages.software}
          />
          <ServiceCard
            title="IT Staffing"
            description="We connect you with top-tier talent, from developers to project managers, to fill critical roles."
            image={serviceImages.staffing}
          />
          <ServiceCard
            title="IT Consulting"
            description="Our experts provide strategic guidance on technology roadmaps, system architecture, and digital transformation."
            image={serviceImages.consulting}
          />
        </div>
      </div>
    </section>
  );
};

// Helper component for Service Cards
const ServiceCard = ({ title, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="relative group w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-lg text-gray-200">{description}</p>
    </div>
  </motion.div>
);

export default Main;
