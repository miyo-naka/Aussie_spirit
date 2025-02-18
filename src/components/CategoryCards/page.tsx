import Link from "next/link";

type CategoryCardsProps = {
  category: string;
  comment: string;
  imgSrc: string;
};

export function CategoryCards({
  category,
  imgSrc,
  comment,
}: CategoryCardsProps) {
  return (
    <div className="w-full relative rounded-lg ">
      <Link href={`/${category}`}>
        <img
          className="w-full min-h-28 h-[25vh] opacity-40 rounded-lg  hover:scale-105 shadow-2xl "
          src={`/img/${imgSrc}`}
        />
        <h2 className="absolute top-10 w-full text-center font-hurricane font-bold text-3xl md:text-5xl">
          {category}
        </h2>
        <p className="my-4 text-sm text-orange-900">{comment}</p>
        <p className="text-sm text-gray-500 hover:text-blue-500">
          ページに行く
        </p>
      </Link>
    </div>
  );
}
