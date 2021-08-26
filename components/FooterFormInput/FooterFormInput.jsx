import classes from './FooterFormInput.module.scss';

const FooterFormInput = () => {
  return (
    <div className={classes.footer__form_input}>
      <p className={classes.text}>
        Upgrade your style with Premium Basics. Sign up now for up to 20% Off!
      </p>
      <form className={classes.form}>
        <input
          type='text'
          placeholder='Email address'
          className={classes.form__ipt}
        />
        <button type='submit' className={classes.form__btn}>
          submit
        </button>
      </form>
    </div>
  );
};

export default FooterFormInput;
