import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col w-[800px] gap-8 ">
      <div className="w-[800px] gap-5 flex flex-col">
        <Image src={}/>
      </div>
    </div>
  );
}

export async function getServerSideProps(context){
const respond = await fetch(`https://dev.to/api/articles/${id}`)
}
