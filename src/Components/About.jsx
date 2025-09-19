
import React from "react";
import { motion } from "framer-motion";

const HeroImage = "https://images.unsplash.com/photo-1556761175-4b46a572b786";
const TeamSectionImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0";

const aboutContent = [
  {
    title: "Who We Are",
    text: `Vagarious Solutions is a trusted partner in IT staffing and software development. We specialize in understanding your unique challenges and crafting tailored solutions that minimize disruption and accelerate your business goals. Our mission is to empower your success.`,
    image: HeroImage,
    reverse: false,
  },
  {
    title: "Our Story & Strengths",
    text: `Founded in 2019 in Hyderabad, our journey began with a simple goal: to help businesses achieve their ambitions with speed and quality. Our core strength lies in our commitment to excellence, offering top-tier staffing services and innovative IT development.`,
    stats: [
      { number: "5+", label: "Years in Business" },
      { number: "150+", label: "Successful Projects" },
      { number: "25+", label: "Industry Partners" },
    ],
    reverse: true,
  },
  {
    title: "Our Expertise",
    text: `Our competencies span the entire project lifecycle, from strategic planning and consulting to value analysis and custom solution delivery. Each of our consultants is an industry expert with a higher degree and a minimum of ten years of practical experience, ensuring you receive the highest level of service.`,
    image: TeamSectionImage,
    reverse: false,
  },
];

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "A visionary leader with a decade of experience in tech innovation and strategic growth.",
    image: "https://images.unsplash.com/photo-1542157077-8490a072049e",
  },
  {
    name: "John Smith",
    role: "Chief Technology Officer",
    bio: "An architect of cutting-edge solutions, focused on leveraging technology to solve complex problems.",
    image: "https://images.unsplash.com/photo-1531427110197-0b81c201413a",
  },
  {
    name: "Emily Clark",
    role: "Head of Staffing",
    bio: "A talent acquisition expert dedicated to building elite teams that drive organizational success.",
    image: "https://images.unsplash.com/photo-1579783483458-755c9115b634",
  },
];

const values = [
  { icon: "💡", title: "Innovation", description: "Pioneering new solutions to meet future challenges." },
  { icon: "🤝", title: "Collaboration", description: "Working as one team to achieve shared goals." },
  { icon: "💎", title: "Quality", description: "Delivering excellence in every line of code and every hire." },
  { icon: "🎯", title: "Integrity", description: "Operating with transparency and unwavering ethics." },
];

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="mt-15 py-16 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 leading-tight">
          Innovating the Future of IT Solutions.
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto">
          We're not just a company; we're a team of innovators dedicated to
          empowering businesses with the best talent and technology.
        </p>
      </motion.div>

      {/* About Content Sections */}
      {aboutContent.map((section, idx) => (
        <motion.div
          key={idx}
          className={`grid md:grid-cols-2 items-center gap-12 my-20 ${
            section.reverse ? "md:flex-row-reverse" : ""
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {section.image && (
            <motion.div
              className="w-full h-80 overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              variants={itemVariants}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed ">{section.text}</p>
            {section.stats && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {section.stats.map((stat, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + sIdx * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-4xl font-bold text-indigo-700">
                      {stat.number}
                    </h3>
                    <p className="text-sm mt-2 font-medium text-gray-500">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}

      <hr className="my-16 border-gray-200" />

      {/* Values Section */}
      <div className="text-center my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
          Our Core Values
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-white rounded-xl shadow-lg border-b-4 border-indigo-400 transform hover:translate-y-2 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <hr className="my-16 border-gray-200" />

      {/* Team Section */}
      <div className="text-center my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
          Meet Our Team
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-indigo-600 text-sm font-medium">
                {member.role}
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}