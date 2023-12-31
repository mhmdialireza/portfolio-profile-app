import { CSSProperties, useRef, useState } from 'react';
import css from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from './../../Utils/motion';
import useOutsideAlerter from './../../Hooks/useOutsideAlerter';
import useHeaderShadow from './../../Hooks/useHeaderShadow';

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial='hidden'
      whileInView='show'
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Alireza</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened) as CSSProperties|undefined}
        >
          <li>
            <a href='#expertise'>Services</a>
          </li>
          <li>
            <a href='#work'>Experience</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#people'>Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>09167590320</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
