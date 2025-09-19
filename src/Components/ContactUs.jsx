// ContactUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative py-24 mt-15 px-6 lg:px-20 overflow-hidden">
      {/* Background gradient blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
      />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center relative z-10 mb-14"
      >
        Let’s{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Connect
        </span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 p-8 rounded-2xl shadow-xl bg-white/5 backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 mt-1 text-indigo-500" />
            <p>
              2nd Floor, Spline Arcade, Ayyappa Society Main Rd, Sri Sai Nagar,
              Madhapur, Hyderabad, Telangana 500081
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 mt-1 text-indigo-500" />
            <p>ops@vagarioussolutions.com</p>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 mt-1 text-indigo-500" />
            <div>
              <p>+91 8919801095</p>
              <p>+91 6304244117</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 p-8 rounded-2xl shadow-xl bg-white/5 backdrop-blur-md border border-white/10"
        >
          {/* Floating label inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full p-3 rounded-lg bg-transparent border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-3 top- text-gray-400 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500 bg-transparent"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full p-3 rounded-lg bg-transparent border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
              >
                Email
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              id="subject"
              className="peer w-full p-3 rounded-lg bg-transparent border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder=" "
            />
            <label
              htmlFor="subject"
              className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Subject
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows="5"
              className="peer w-full p-3 rounded-lg bg-transparent border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Enter your message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
