import style from './page.module.css';

export default function Home() {
  return (
    <section>
      <main className={style.main}>
        <div className="container">
          <h1>
            <span>Treine</span> onde estiver
          </h1>
          <button>Saiba mais</button>
        </div>
      </main>
    </section>
  );
}
