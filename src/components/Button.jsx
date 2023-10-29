export const ButtonPrimary = ({ children, styles }) => {
  return (
    <button
      className={`flex justify-center bg-blue items-center gap-3 rounded-md capitalize p-btn hover:shadow-lg hover:shadow-blue/70 cursor-pointer ${styles}`}
    >
      {children}
    </button>
  );
};
export const ButtonSecondary = ({ children, styles }) => {
  return (
    <button
      className={`flex  justify-center border border-white/50 items-center gap-3 rounded-md capitalize p-btn hover:shadow-lg hover:shadow-white/20 cursor-pointer text-white ${styles}`}
    >
      {children}
    </button>
  );
};
export const ButtonTertiary = ({ children, styles, onclick = () => {} }) => {
  return (
    <button
      onClick={onclick}
      className={`flex justify-center bg-blue/10 items-center gap-3 rounded-md capitalize text-blue p-btn cursor-pointer hover:bg-blue/30 ${styles}`}
    >
      {children}
    </button>
  );
};
