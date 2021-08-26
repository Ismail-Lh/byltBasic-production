import { Wrapper } from './SplitContentSectionStyles';

import {
  SplitContentTextContainer,
  SplitContentImageContainer,
} from '../../containers';

const SplitContentSection = ({ isTextFirst }) => {
  if (isTextFirst === true) {
    return (
      <Wrapper isTextFirst={true} order='2'>
        <SplitContentTextContainer
          title='basics to last a lifetime'
          text='Our pre-wash and wrinkle-free technology protect your new favorite shirt from everyday wear and tear.'
          isTextFirst={true}
          route='/pages/bylt-apparel-sizing-guide'
        />

        <SplitContentImageContainer
          imgUrl='/assets/split-content-img-1.jpg'
          imgAlt='split-content-img-1'
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper isTextFirst={false} order='-1'>
      <SplitContentImageContainer
        imgUrl='/assets/split-content-img-2.jpg'
        imgAlt='split-content-img-2'
      />
      <SplitContentTextContainer
        title='give $10, get $10'
        text='Give your friends $10 off their first purchase and get $10 in points when they spend $50 or more.'
        isTextFirst={false}
        route='/pages/rewards'
      />
    </Wrapper>
  );
};

export default SplitContentSection;
