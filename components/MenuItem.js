import Link from 'next/link';

export default function MenuItem(props) {
  return (
    <li
      className={`text-${props.tCol} cursor-pointer font-header text-4xl tracking-widest text-center mb-8 z-20`}
    >
      <Link href={props.href}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
}
