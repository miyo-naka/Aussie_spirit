type HeadlineProps = {
  category: string;
  comment: string;
};

export function Headline(props: HeadlineProps) {
  return (
    <div className="text-center m-4">
      <h1 className="text-2xl">{props.category}</h1>
      <p>{props.comment}</p>
    </div>
  );
}
