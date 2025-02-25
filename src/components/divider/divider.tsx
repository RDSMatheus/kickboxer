import style from './divider.module.css';

type Divider = {
  fill: '#E6E6E6' | '#6D0709';
  position: 'top' | 'bottom';
};

export default function Divider({ fill, position }: Divider) {
  return (
    <div
      className={style.shapeDivider}
      style={position === 'top' ? { top: '-150px' } : { bottom: 0 }}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          style={{ fill: fill }}
          className={style.shapeFill}
        ></path>
      </svg>
    </div>
  );
}
