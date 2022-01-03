import React from 'react';
import { footerContainer } from './footer.module.css';

const Footer = ({siteTitle}) => {
    return (
        <footer className={footerContainer}>
            <p>Copyright &copy; 2022 | {siteTitle}</p>
            <p>By Attalhaoui Faissal commissioned by AP</p>
        </footer>
    )
}

export default Footer
