import { useRouter } from 'next/router';

export const Button = ({
  title,
  fn,
  bgColor,
  textColor,
  textColorHover,
  bgColorHover,
  route,
  className,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        router.push(route);
      }}
      className={`rounded-md bg-${bgColor} text-${textColor} hover:bg-${bgColorHover} active:bg-${bgColorHover} hover:text-${textColorHover} w-full md:w-80 h-12 transition duration-150 ease-in-out font-header tracking-wider mb-4 text-lg flex flex-col justify-center items-center ring-2 ring-${bgColorHover} ${className}`}
    >
      {title}
    </button>
  );
};
