export default function adduser() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 mb-20 mt-20">
        <div className="flex gap-4">
          <p>Name</p>
          <input type="text" name="" id="" className="border" />
        </div>
        <div className="flex gap-7">
          <p>Age</p>
          <input type="text" name="" id="" className="border" />
        </div>
        <button className="border px-10">Send</button>
      </div>
    </div>
  );
}
