import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.headerWrap}>
      <div className={`${styles.header} container`}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="200" height={100}></Image>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">Logar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
