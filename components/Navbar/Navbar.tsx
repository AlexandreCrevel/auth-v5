import { auth, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={'/'} passHref>
          <button className="btn btn-ghost text-xl">Circles</button>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <button className="avatar btn btn-circle btn-ghost w-10 rounded-full">
            {session?.user?.image && (
              <Image
                alt="Tailwind CSS Navbar component"
                src={session?.user?.image}
                width={40}
                height={40}
              />
            )}
          </button>
          <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <button className="justify-between">
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li>
              <button>Settings</button>
            </li>
            <li>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>
            </li>
            <li>
              {/* <form>
                            
                            </form><button className='btn' onClick={() => signOut()}>Logout</button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
