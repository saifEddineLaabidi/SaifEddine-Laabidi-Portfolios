import SectionTitle from "@/components/SectionTitle";
import { certifications } from "@/data/certifications";
import Image from "next/image";

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={cert.image}
                alt={`${cert.name} logo`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {cert.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

