type SecondaryTitleType = {
  content: string;
};

export default function SecondaryTitle({ content }: SecondaryTitleType) {
  return <h2>{content}</h2>;
}
