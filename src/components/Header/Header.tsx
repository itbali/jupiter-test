import React from 'react';
import logoImage from '../../assets/Component 21 – 1.png'
import './header.css'

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'navigation'}>
          <span className={'logo'}>
            <img className={'logoImage'} src={logoImage} alt=""/>
            <span className={'logoTitle'}>Agency</span>
          </span>
        <nav className={'links'}>
          <span>About</span>
          <span>Services</span>
          <span>Pricing</span>
          <span>Blog</span>
        </nav>
        <button className={'Contact'}>Contact</button>
      </div>
      <span className={'mainHeader'}>Portfolio</span>
      <span className={'subText'}>Agency provides a full service range including technical skills, design, business understanding.</span>
    </header>
  );
};
