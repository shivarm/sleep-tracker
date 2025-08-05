"use client";

const ContactPage = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Contact SleepTracker
        </h1>
        <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Get in touch</h2>
        <form
          className="max-w-3xl mx-auto space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById("name") as HTMLInputElement)?.value;
            const email = (document.getElementById("email") as HTMLInputElement)?.value;
            const message = (document.getElementById("message") as HTMLTextAreaElement)?.value;
            const mailtoLink = `mailto:meshivam81@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
            window.location.href = mailtoLink;
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium shadow-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">support@sleeptracker.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+91 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">123 SleepTracker St, Dream City, India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
