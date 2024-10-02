import HomePage from "@/components/pages/Home";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = () => {
  const publicKey = cookies().get("publicKey");

  if (publicKey) {
    redirect("/chat");
  }
  return <HomePage />;
};

export default Home;
