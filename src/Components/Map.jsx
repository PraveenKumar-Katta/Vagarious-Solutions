import React from "react";

const Map = () => {
  return (
    <div className="w-full h-60 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Vagarious Solutions Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.574343161027!2d78.38987661586961!3d17.4463582840947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97244d6395b1%3A0x9673bc9d99225ed!2sVagarious%20Solutions%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1694762832131!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
