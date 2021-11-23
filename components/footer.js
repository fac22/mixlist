import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-WHITE flex justify-between w-full p-5 mt-20">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div> 2021 Made by Cemal, Michael Jihye and Sasha</div>
    </footer>
  );
}
