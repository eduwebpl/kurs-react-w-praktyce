import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Sidebar = () => (
  <div>
    <p>logo</p>
    <div>
      <ButtonIcon as={Link} to="/" icon={penIcon} />
      <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
    </div>
    <ButtonIcon as={Link} to="/" icon={logoutIcon} />
  </div>
);

export default Sidebar;
