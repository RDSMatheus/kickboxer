import style from './Title.module.css';

export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className={style.title}>
      {title}
      <span>.</span>
    </h2>
  );
};
