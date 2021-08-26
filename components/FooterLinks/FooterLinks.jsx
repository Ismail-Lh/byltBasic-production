import { MyLink } from '..';
import classes from './FooterLinks.module.scss';

const FooterLinks = ({ links }) => {
  return (
    <ul className={classes.footer__list}>
      {links.map(({ link, route, id }) => (
        <li key={id}>
          <MyLink route={route}>{link}</MyLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
