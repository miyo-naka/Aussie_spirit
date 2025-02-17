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
        <img className="w-full h-28 opacity-30" src={`/img/${props.imgSrc}`} />
        <h2 className="absolute top-10 w-full text-center text-3xl font-hurricane font-bold">
          {props.category}
        </h2>
        <p className="text-sm">{props.comment}</p>
      </Link>
    </div>
  );
}
