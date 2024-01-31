export const Footer = () => {
  return (
    <div className="flex h-[495px] pt-[64px] px-[352px] flex-col items-start gap-[25px] bg-[#F6F6F7]">
      <div className="flex w-[1215px] items-start gap-5">
        <div className="flex w-[289px] flex-col items-start gap-[24px] shrink-0">
          <div className="flex flex-col items-start gap-[12px]">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="flex w-[521px] justify-center items-start gap-20 srhink-0"></div>
        <div className="w-[144px] h-4 shrink-0"></div>
      </div>
    </div>
  );
};
