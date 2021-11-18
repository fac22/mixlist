export const Button = ({
  title,
  fn,
  bgColor,
  textColor,
  textColorHover,
  bgColorHover,
}) => {
  return (
    <button
      className={`rounded-md bg-${bgColor} text-${textColor} hover:bg-${bgColorHover} active:bg-${bgColorHover} hover:text-${textColorHover} content-center w-2/3 md:w-80 h-12 transition duration-150 ease-in-out font-header tracking-wider mb-4 border-solid border text-lg flex flex-col justify-center ali`}
    >
      {title}
    </button>
  );
};
