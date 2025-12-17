// 1. Define the component function
function Footer() {
  // Use 'footer' HTML tag for semantic meaning
  return (
    <footer className="w-full bg-black border-t border-gray-800 p-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Copyright Information */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        
        {/* Optional: Add social links or quick navigation */}
        <div className="mt-2 text-gray-500 text-xs space-x-4">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

// 2. Export the component as the default export
export default Footer;