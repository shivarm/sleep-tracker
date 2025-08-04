import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About SleepTracker
        </h1>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          At SleepTracker, we aim to help individuals achieve better sleep and overall well-being by
          providing insights into their sleep patterns. Better sleep leads to a healthier, happier
          life, and we’re here to guide you every step of the way.
        </p>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose SleepTracker?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Comprehensive Tracking</h3>
            <p className="text-gray-600">
              Monitor your sleep patterns and identify areas for improvement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
            <p className="text-gray-600">
              Receive tailored recommendations to enhance your sleep quality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">User-Friendly Design</h3>
            <p className="text-gray-600">
              Enjoy an intuitive and seamless experience across all devices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="max-w-3xl m-auto text-center text-gray-600">
          SleepTracker was created to address the growing need for better sleep management tools.
          Our team of sleep experts and technologists developed a platform that combines
          cutting-edge technology with actionable insights. Since our launch, we’ve helped countless
          users achieve better sleep and improve their overall health.
        </p>
      </section>

      <section className='py-16 px-8 bg-gray-100 text-center'>
        <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Want to Sleep Better?
        </h2>
        <p className='text-lg mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Join SleepTracker today and take the first step towards healthier life.
        </p>
        <Link
          href='/sign-up'
          className='inline-block bg-white text-purple-600 hover:text-purple-700 px-6 py-3 rounded-md font-medium shadow-md transition'
        >
         Start Today
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
