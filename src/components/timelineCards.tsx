import { motion } from "framer-motion";
import Link from "next/link";

type TimelineCardProps = {
  year: string;
  title: string;
  image: string;
  link: {
    title: string;
    link: string;
  }[];
};

export function TimelineCard({ year, title, image, link }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white rounded-xl shadow-lg p-4 w-[450px] hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold">{year}</h3>
        <p className="mb-2">{title}</p>
        <div className="w-full flex flex-col md:flex-row">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full md:w-3/5  aspect-[4/3] object-cover"
          />
          <ul className="space-y-2 m-4 text-sm text-gray-700">
            {link.map((linkItem) => (
              <li key={linkItem.link}>
                <Link href={linkItem.link} className="hover:text-indigo-600">
                  ➡{linkItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
