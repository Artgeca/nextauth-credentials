import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>NextAuth.ts</h1>
      <div className='flex gap-5 bg-neutral-300'>
        <Link href='/register'>Register Page</Link>
        <Link href='/login'>Login Page</Link>
        <Link href='/dashboard'>Dashboard</Link>
      </div>
    </main>
  );
}
