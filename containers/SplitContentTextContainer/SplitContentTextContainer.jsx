import dynamic from 'next/dynamic';
import classes from './SpiltContentTextContainer.module.scss';

const SplitContentText = dynamic(() =>
  import('../../components/SplitContentText/SplitContentText')
);
const SplitContentIcons = dynamic(() =>
  import('../../components/SplitContentIcons/SplitContentIcons')
);
const MyLink = dynamic(() => import('../../components/MyLink/MyLink'));

const SplitContentTextContainer = ({ title, text, isTextFirst, route }) => {
  return (
    <div className={classes.split__content_text}>
      <div>
        <SplitContentText title={title} text={text} />

        <MyLink route={route}>load more</MyLink>

        <SplitContentIcons isTextFirst={isTextFirst} />
      </div>
    </div>
  );
};

export default SplitContentTextContainer;
