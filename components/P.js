export const P = ({ children, color }) => {
  return (
    <p
      className={`font-body text-xs tracking-normal mt-1 text-justify text-WHITE`}
    >
      {children}
    </p>
  );
};
