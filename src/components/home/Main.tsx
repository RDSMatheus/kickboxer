import { Button } from '../button/button';
import Divider from '../divider/divider';
import style from './Main.module.css';

export const Main = () => {
  return (
    <>
      <main className={style.main}>
        <div className="container">
          <h1>
            <span>Treine</span> onde estiver
          </h1>
          <Button>Saiba mais</Button>
        </div>
      </main>
      <Divider />
    </>
  );
};
