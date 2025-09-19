// Careers.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Reusable SVG icon
const Icon = ({ path, className = "w-12 h-12 mb-4 text-current" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={path}
    />
  </svg>
);

const jobListings = [
  {
    title: "Senior Full Stack Engineer",
    location: "Hyderabad, India",
    type: "Full-Time",
    description:
      "Develop and maintain web applications using modern technologies (React, Node.js). Lead and mentor junior developers.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-Time",
    description:
      "Design intuitive and attractive user interfaces. Conduct user research and create wireframes and prototypes.",
  },
  // ... add other jobs
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Careers = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    coverLetter: "",
    resume: null,
  });

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      coverLetter: "",
      resume: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans mt-15">
      {/* Job Listings */}
      <section className="py-20 px-6 lg:px-20 bg-inherit">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-inherit"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Current Openings
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg border border-white-10 border-current p-6 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition duration-300"
              variants={fadeInUp}
            >
              <div>
                <h3 className="text-xl font-bold text-inherit">{job.title}</h3>
                <div className="flex items-center mt-2 text-sm text-inherit">
                  <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <span className="ml-2">{job.location}</span>
                </div>
                <p className="text-sm font-medium mt-1 text-inherit">
                  {job.type}
                </p>
                <p className="mt-4 text-inherit">{job.description}</p>
              </div>
              <button
                onClick={() => openApplyModal(job)}
                className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 border-current text-white font-semibold rounded-md text-sm hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300 self-start shadow-lg"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-8 relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-2xl"
            >
              ×
            </button>

            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Application Submitted!
                </h2>
                <p className="text-gray-700">
                  Thank you for applying for the {selectedJob.title} position.
                  We will review your application and get back to you soon.
                </p>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-md font-semibold hover:from-green-600 hover:to-teal-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white text-black">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Apply for {selectedJob.title}
                  </h2>
                  <p className="text-gray-600">
                    Fill out the details below and attach your resume
                  </p>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn Profile URL"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="github"
                  placeholder="GitHub Profile URL"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter"
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                ></textarea>
                <div className="w-full">
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    required
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md cursor-pointer file:border-0 file:bg-blue-500 file:text-white file:p-2 file:rounded-md file:font-semibold hover:file:bg-blue-600 transition-colors"
                    accept=".pdf,.doc,.docx"
                  />
                  {formData.resume && (
                    <p className="text-sm text-gray-600 mt-1">
                      Selected file: {formData.resume.name}
                    </p>
                  )}
                </div>
                {formData.resume && (
                  <p className="text-sm text-gray-600 mt-1">
                    Selected file: {formData.resume.name}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-md font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Careers;
