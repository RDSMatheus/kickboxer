import Image from 'next/image';
import Divider from '../divider/divider';
import style from './Footer.module.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <Divider fill="#6D0709" position="top" />
        <div className="container">
          <Image src="/logo_white.svg" alt="logo" width={200} height={100} />
        </div>
        <ul>
          <h3>Links</h3>
          <li>
            <Link href="">Sobre</Link>
          </li>
          <li>
            <Link href="">Cadastro</Link>
          </li>
        </ul>
        <ul>
          <h3>Contao</h3>
          <li>
            <Link href="">contato@gmail.com</Link>
          </li>
          <li>
            <Link href="">(99)99999-9999</Link>
          </li>
        </ul>
        <p className="container">Kickboxer, todos os direitos reservados.</p>
      </footer>
    </>
  );
};
