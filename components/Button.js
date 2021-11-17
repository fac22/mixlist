export const Button = ({ title, fn, bgColor, textColor, children }) => {
  return (
    <button
      className={`rounded-md bg-${bgColor} text-${textColor} w-full h-12`}
    >
      {children}
    </button>
  );
};
