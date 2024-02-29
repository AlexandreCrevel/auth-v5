import { auth } from '@/auth';
import Navbar from '@/components/Navbar/Navbar';

const Dashboard = async () => {
  const session = await auth();
  return (
    <div>
      <Navbar />
      <div>{JSON.stringify(session)}</div>
    </div>
  );
};

export default Dashboard;
