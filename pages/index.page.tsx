import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  let a = 1;
  let c = 2;
  useEffect(() => {
    console.log(a + c);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="test flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>
    </div>
  );
}
