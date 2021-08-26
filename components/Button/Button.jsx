import Link from 'next/link';

import classes from './Button.module.scss';

const Button = ({
  route,
  color,
  handelClick,
  handelSubmit,
  type = 'button',
  children,
  disabled,
  role,
}) => {
  return (
    <>
      {!route ? (
        <button
          className={`${
            color === 'white' ? classes.btn__white : classes.btn__black
          }`}
          role={role}
          type={type}
          onClick={handelClick && handelClick}
          onSubmit={handelSubmit && handelSubmit}
          disabled={disabled && disabled}>
          {children}
        </button>
      ) : (
        <Link href={route}>
          <a
            className={`${
              color === 'white' ? classes.btn__white : classes.btn__black
            }`}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
