import Navbar from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>       
    <Navbar session={session?.user} />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{JSON.stringify(session?.user)}</div>
    </main>
    </>
  );
}
