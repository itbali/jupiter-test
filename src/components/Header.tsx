import React from 'react';
import logoImage from '../assets/Component 21 – 1.png'

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'navigation'}>
          <span className={'logo'}>
            <img className={'logoImage'} src={logoImage} alt=""/>
            <h4 className={'logoTitle'}>Agency</h4>
          </span>
        <nav className={'links'}>
          <span>About</span>
          <span>Services</span>
          <span>Pricing</span>
          <span>Blog</span>
        </nav>
        <button className={'Contact'}>Contact</button>
      </div>
      <h1 className={'mainHeader'}>Portfolio</h1>
      <p className={'subText'}>Agency provides a full service range including technical skills, design, business <br/>understanding.</p>
    </header>
  );
};
