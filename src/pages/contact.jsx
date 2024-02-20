export default function Page() {
  return (
    <div className="w-full flex justify-center items-center pb-16">
      <div className="w-[895px] j-[895px] flex flex-col justify-center items-center gap-8">
        <div className="w-[769px] h-389px pt-[14px] px-[10px] flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Contact Us</h1>
            <p className="text-base w-[624px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex py-[10px] gap-[50px]">
            <div className="w-[294px] h-[133px] rounded-xl border p-4 gap-[10px]">
              <h1>Adress</h1>
              <p className="2-[260px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-[294px] h-[133px] rounded-xl border p-4 gap-[10px]">
              <h1>Contact</h1>
              <p className="w-[160px]">313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F6F7] w-[643px] h-[440px] rounded-xl">
          <div className="mt-[29px] ml-[35px] gap-6 flex flex-col items-start">
            <h1>Leave a Message</h1>
            <div className="w-[478px] h-[38px] flex flex-col gap-5">
              <div className="w-[589px] h-[39px] flex gap-8">
                <input type="text" name="" id="" placeholder="Your Name" />
                <input type="text" name="" id="" placeholder="Your Email" />
              </div>
              <div className="w-[478px] h-[35px]">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-[387px]"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Write a message"
                  className="w-[387px] h-[134px] resize-none"
                />
              </div>
              <div className="w-[130px] h-10 flex justify-center items-center rounded-md bg-blue-500 border py-[10px] px-[4] cursor-pointer">
                <p className="text-sm text-white">Send Message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
