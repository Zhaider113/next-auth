import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; // Add useState import

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState(''); // Add userName state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
    // Get user name from localStorage and set it to userName state
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <>
      <div className="welcome">
        <Head>
          <title>Welcome Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="welcome-card">
          <h1 className={styles.title}>Welcome to Dashboard...! </h1>
          <p>{userName?.name} is successfully Authenticated to view Dashboard!</p>
          <button className={'btn btn-light w-50'} onClick={handleLogout}>
            Logout
          </button>
        </main>
      </div>
    </>
  );
}
