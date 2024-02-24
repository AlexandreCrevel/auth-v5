import LoginButton from '@/components/auth/LoginButton';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold drop-shadow-md">⭕️Circles</h1>
      <div>
        <LoginButton>
          <button className="btn">Login</button>
        </LoginButton>
      </div>
    </main>
  );
}
