import { Mail, Phone,Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 border-t border-green-500/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Left Side */}
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">
            <span className="text-green-400">SharkEdge</span>{" "}
            <span className="text-white">Media</span>
          </h2>
          <p className="text-sm text-white/70 mt-2">
            © 2025 SharkEdge Media. All rights reserved.
          </p>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-green-400" />
            <span className="text-white">business@sharkedge.media</span>
          </div>
          <div className="flex items-center space-x-2">
    <Clock className="w-4 h-4 text-green-400" />
    <span className="text-white">Mon–Fri: 9AM – 6PM</span>
  </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
