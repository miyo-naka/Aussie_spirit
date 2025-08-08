import { motion } from "framer-motion";
import Link from "next/link";

type TimelineCardProps = {
  year: string;
  title: string;
  image: string;
  link: string;
  direction?: "left" | "right";
};

export function TimelineCard({
  year,
  title,
  image,
  link,
  direction,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 w-[300px] hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={link}>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">{year}</h3>
          <p className="mb-2">{title}</p>
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full aspect-[4/3] object-cover"
          />
        </div>
      </Link>
    </motion.div>
  );
}
