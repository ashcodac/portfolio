const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
  
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* ✅ Left - Contact Info */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <p className="text-lg text-gray-700">Feel free to reach out for collaborations or just a friendly chat.</p>
            <p className="text-lg">
              📧 Email: <a href="mailto:ashcodac@gmail.com" className="text-blue-600 hover:underline">ashcodac@gmail.com</a>
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/ashcodac" target="_blank" className="text-gray-700 hover:text-blue-600 text-2xl">🐙 GitHub</a>
              <a href="https://linkedin.com/in/ashcodac" target="_blank" className="text-gray-700 hover:text-blue-600 text-2xl">🔗 LinkedIn</a>
            </div>
          </div>
  
          {/* ✅ Right - Contact Form */}
          <form className="md:w-1/2 bg-white shadow-lg p-6 rounded-lg mt-8 md:mt-0">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input type="text" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" rows="4" required></textarea>
            </div>
  
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  