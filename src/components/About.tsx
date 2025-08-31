import { motion } from "framer-motion";
import { useSection } from "../hooks/useContent";
import IconWrapper from "./ui/IconWrapper";
import SectionTitle from "./ui/SectionTitle";
import { Content } from "../data/types";

const About = () => {
  const about = useSection("about") as Content["about"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={about.title} description={about.description} />

        <div className="grid md:grid-cols-3 gap-8">
          {about.skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <IconWrapper name={skill.icon.toLowerCase()} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
