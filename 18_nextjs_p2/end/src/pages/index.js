import Link from "next/link";
import { navList } from "../data/nav";

export default function Home() {
  return (
    <ul>
      {navList.map((item) => {
        return (
          <li key={item}>
            <Link href={`/${item}`}>
              <a>{item}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
