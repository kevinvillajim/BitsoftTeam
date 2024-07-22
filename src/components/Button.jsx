export default function Button({ link, title, text, dark }) {
  return (
    <>
      <a
        href={link}
        title={title}
        className={dark === true ? "cta-button-dark" : "cta-button"}
      >
        {text}
      </a>
    </>
  );
}
