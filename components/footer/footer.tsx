import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div>Lizzka Tattoo © 2023</div>
            <div>Developed by <a rel="noreferrer" target="_blank" href="http://jimka.infinitum.space">Jimka</a></div>
        </footer>
    );
};

export default Footer;