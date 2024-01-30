export const Badge = ({ text, opacity, textcolor }) => {
  return (
    <div
      className={`flex py-1 px-[10px] gap-1 justify-center items-center rounded-lg bg-[#4B6BFB] ${textcolor} ${opacity}`}
    >
      {text}
    </div>
  );
};
