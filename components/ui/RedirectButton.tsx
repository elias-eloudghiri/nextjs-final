type RedirectButtonType = {
  redirectUrl: string;
  content: string;
};

export default function RedirectButton({
  redirectUrl,
  content,
}: RedirectButtonType) {
  return (
    <a href={redirectUrl}>
      <button className="redirect-button p-1">{content}</button>
    </a>
  );
}
