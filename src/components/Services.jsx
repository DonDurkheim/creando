import TeamMeeting from "./../assets/TeamMeeting.png"; 
import { FaCheckCircle } from "react-icons/fa";

export default function Services() {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src={TeamMeeting}
          alt="Team Meeting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[#003049] text-white flex items-center justify-center p-6 sm:p-10">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Entendemos las Necesidades <br /> del Usuario
          </h2>

          {/* Services List */}
          <div className="space-y-4">
            {[
              "Formalización Legal",
              "Consultoría Empresarial",
              "Cumplimiento Tributario",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white text-black p-3 rounded shadow hover:bg-gray-100 transition"
              >
                <div className="text-orange-600 text-xl mr-3">
                  <FaCheckCircle />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
