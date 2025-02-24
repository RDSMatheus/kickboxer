import Image from 'next/image';
import { Button } from '../button/button';
import style from './Benefits.module.css';
import { Title } from '../title/Title';

export const Benefits = () => {
  return (
    <section className="container">
      <div className={style.grid}>
        <div>
          <Title title="Treino Alternativo" />
          <p>
            Um conjunto de exercícios ideal para os dias em que não for possível
            ir à academia ou quando não houver aula programada.
          </p>
          <Button>Cadastre-se</Button>
        </div>
        <Image
          src="/training_1.png"
          alt="Colocando bandagem"
          width={1500}
          height={1200}
          quality={80}
        />
      </div>
      <div className={style.grid} style={{ gridTemplateColumns: '2fr 1fr' }}>
        <Image
          src="/training_2.png"
          width={1500}
          height={1200}
          alt="Chutando saco de pancada"
          quality={80}
        />
        <div>
          <Title
            title="Treinos Focados e 
              Específicos"
          />
          <p>
            Sessões curtas direcionadas para trabalhar pontos específicos (como
            mobilidade, explosão ou resistência).
          </p>
          <Button>Cadastre-se</Button>
        </div>
      </div>
      <div className={style.grid}>
        <div>
          <Title title="Transforme Seu Corpo" />
          <p>
            Experimente treinos dinâmicos para queimar calorias, perder peso e
            tonificar seu corpo. Conquiste uma forma física saudável com
            eficácia e motivação.
          </p>
          <Button>Cadastre-se</Button>
        </div>
        <Image
          src="/training_3.png"
          alt="Pulando corda."
          width={1500}
          height={1200}
          quality={80}
        />
      </div>
    </section>
  );
};
