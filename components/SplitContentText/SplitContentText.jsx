import classes from './SplitContentText.module.scss';

const SplitContentText = ({ title, text }) => {
  return (
    <div>
      <h2 className={classes.split__content_title}>{title}</h2>
      <p className={classes.split__content_text}>{text}</p>
    </div>
  );
};

export default SplitContentText;
