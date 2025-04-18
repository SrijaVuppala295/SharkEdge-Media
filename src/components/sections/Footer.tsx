
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
            <p className="text-sm">
              At Sharkedge Media, we respect your privacy. We collect minimal data, only for service delivery, analytics, or communication purposes. No user data is ever sold or misused.
            </p>
            <p className="text-sm mt-2">
              Contact us at: support@sharkedgemedia.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Terms & Conditions</h3>
            <p className="text-sm">
              By using this site and our services, you agree to abide by our standard terms of service. All tools and services are provided as-is.
            </p>
            <p className="text-sm mt-2">
              Sharkedge Media is not liable for platform policy changes or account issues on Facebook, Meta, or other third-party services.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Sharkedge Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
