import style from './button.module.css';

export const Button = ({ children }: React.PropsWithChildren) => {
  return <button className={style.button}>{children}</button>;
};
