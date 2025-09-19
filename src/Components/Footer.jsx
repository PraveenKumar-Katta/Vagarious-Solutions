import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Join us On</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white p-4 hover:bg-blue-700 rounded-full bg-blue-500">
              <Facebook size={35}/>
            </a>
            <a href="#" className="hover:text-white p-4 rounded-full bg-blue-500">
              <Linkedin size={35} />
            </a>
            <a href="#" className="hover:text-white p-4 rounded-full bg-blue-500">
              <Twitter size={35}/>
            </a>
            <a href="#" className="hover:text-white p-4 hover:bg-pink-500 rounded-full bg-blue-500">
              <Instagram size={35}/>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-4">Address</h2>
          <p className="text-xl leading-relaxed">
            Vagarious Solutions Pvt. Ltd <br />
            2nd Floor, Spline Arcade, Ayyappa Society Main Rd <br />
            Sri Sai Nagar, Madhapur, Hyderabad <br />
            Telangana - 500081
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-4">Find Us</h2>
          <Map/>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vagarious Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
