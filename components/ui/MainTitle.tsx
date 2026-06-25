type MainTitle = {
  content: string;
};
export default function MainTitle({ content }: MainTitle) {
  return (
    <div className="title-container">
      <h1>{content}</h1>
    </div>
  );
}
