import { Navbar } from "@/components/Navbar";

export default function Page({ data }) {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const respond = await fetch("https://dev.to/api/articles?article&");
  const data = await respond.json();

  return {
    props: {
      data,
    },
  };
}
