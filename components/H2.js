export const H2 = ({ children, color }) => {
  return (
    <h2
      className={`font-header text-4xl tracking-widest text-center mt-3 text-${color}`}
    >
      {children}
    </h2>
  );
};
