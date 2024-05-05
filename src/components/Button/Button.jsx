export default function Button({theme,text}) {
  return (
  <button className={theme}>
    {text}
  </button>
  );
}