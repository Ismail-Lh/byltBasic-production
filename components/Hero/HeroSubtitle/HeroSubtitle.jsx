import classes from './HeroSubtitle.module.scss';

const HeroSubtitle = ({ subtitle, color }) => {
  return (
    <h2 className={classes.hero__subtitle} style={{ color: color }}>
      {subtitle}
    </h2>
  );
};

export default HeroSubtitle;
