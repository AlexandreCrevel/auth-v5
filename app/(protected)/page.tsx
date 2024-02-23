import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>       
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{JSON.stringify(session?.user)}</div>
    </main>
    </>
  );
}
