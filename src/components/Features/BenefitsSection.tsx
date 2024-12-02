import { FaClock, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">See What THERE Offers</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* No Wait Times */}
          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 p-4 rounded-lg">
              <FaClock className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600">No wait times</h3>
              <p className="text-gray-600 mt-2">Connect with a therapist instantly.</p>
            </div>
          </div>

          {/* Free Trial */}
          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 p-4 rounded-lg">
              <FaDollarSign className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600">Free trial sessions</h3>
              <p className="text-gray-600 mt-2">Start with a free consultation, no obligation.</p>
            </div>
          </div>

          {/* 24/7 Availability */}
          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 p-4 rounded-lg">
              <FaCalendarAlt className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600">24/7 Availability</h3>
              <p className="text-gray-600 mt-2">Therapists available around the clock.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
