import dynamic from 'next/dynamic';

import classes from './ImagesGridSection.module.scss';

const HeroImage = dynamic(() =>
  import('../../components/Hero/HeroImage/HeroImage')
);

const ImagesGridSection = () => {
  const heroContent = [
    {
      id: 1,
      title: 'weekender pants',
      subtitle: 'a whole new level of premium.',
      position: 'right',
      color: '#fff',
      route: '/products/weekender-pant',
      imgUrlDesktop: 'hero-7.jpg',
    },
    {
      id: 2,
      title: 'everyday shoes',
      subtitle: 'step into premium.',
      position: 'right',
      color: 'right',
      route: '/products/everyday-shoes',
      imgUrlDesktop: 'hero-8.jpg',
    },
    {
      id: 3,
      title: 'the performance collection',
      subtitle: 'pushing the limits.',
      position: 'right',
      color: '#25293b',
      route: '/collections/performance-collection',
      imgUrlDesktop: 'hero-9.jpg',
    },
  ];
  return (
    <div className={classes.image__grid}>
      {heroContent.map(
        ({ id, title, subtitle, position, color, route, imgUrlDesktop }) => (
          <div key={id} className={classes.image__grid_items}>
            <HeroImage
              title={title}
              subtitle={subtitle}
              position={position}
              color={color}
              route={route}
              imgUrlDesktop={imgUrlDesktop}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ImagesGridSection;
