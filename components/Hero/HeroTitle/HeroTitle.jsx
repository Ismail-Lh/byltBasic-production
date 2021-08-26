import classes from './HeroTitle.module.scss';

const HeroTitle = ({ title, color }) => {
  return (
    <h1 className={classes.hero__title} style={{ color: color }}>
      {title}
    </h1>
  );
};

export default HeroTitle;
