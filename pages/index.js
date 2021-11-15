import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <head>
        <title>Mixlist</title>
      </head>
      <header>
        <div>Menu</div>
        <h1>Mixlist</h1>
        <button>Search</button>
      </header>
      <main>
        <img src=""></img>
        <div>Explanation</div>
        <p>Explore</p>
        <button>Sign up/ Log in</button>
      </main>
      <footer>
        <p>Contact us</p>
        <button>Help</button>
      </footer>
    </>
  );
}
