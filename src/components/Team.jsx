import team1 from "./../assets/team1.png";
import team2 from "./../assets/team2.png";
import team3 from "./../assets/team3.png";
import team4 from "./../assets/team4.png";

const teamMembers = [
  {
    name: "Jenny Hudson",
    role: "Business Consultant",
    image: team1,
  },
  {
    name: "Judith Hudson",
    role: "Research Consultant",
    image: team2,
  },
  {
    name: "Sarah Tyler",
    role: "Marketing Consultant",
    image: team3,
  },
  {
    name: "Alisha Ward",
    role: "Business Consultant",
    image: team4,
  },
];

export default function Team() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-white text-center">
      <div className="mb-10">
        <h4 className="text-sm text-yellow-500 font-semibold uppercase tracking-wide">
          Team Members
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Conoce a Nuestro Experto
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="pt-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
