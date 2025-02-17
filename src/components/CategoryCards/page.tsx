import Link from "next/link";

type CategoryCardsProps = {
  category: string;
  comment: string;
  imgSrc: string;
};

export function CategoryCards(props: CategoryCardsProps) {
  return (
    <div className="w-1/4 relative">
      <Link href={`/${props.category}`}>
        <img
          className="w-full min-h-28 h-[20vh] opacity-30 rounded-lg"
          src={`/img/${props.imgSrc}`}
        />
        <h2 className="absolute top-10 w-full text-center text-3xl font-hurricane font-bold">
          {props.category}
        </h2>
        <p className="mt-4 text-sm text-orange-700">{props.comment}</p>
      </Link>
    </div>
  );
}
