'use client';

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session, status);

  const handleLogout = () => {
    signOut({ redirect: false });
    router.push('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {session?.user && (
        <>
          <p>Hi {session.user.name}</p>
          <button className='p-2 bg-neutral-400 rounded-md'
            onClick={handleLogout}
          >
            Log out
          </button>
        </>
      )}
      {status === 'authenticated' && (
        <p>authenticated</p>
      )}
    </div>
  );
};

export default Dashboard;
