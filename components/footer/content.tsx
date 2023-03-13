import React from 'react';
import classes from "./Footer.module.css"
import Link from "next/link";

const Content = () => {
    return (
        <div className={classes.footerContent}>
            <div className={classes.footerBlock}>
                <div className={classes.title}>Lisa Tattoo</div>
                <div className={classes.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto aut laborum qui tempora.</div>
            </div>
            <div className={classes.footerBlock}>
                <div className={classes.title}>Последние новости</div>
                <div className={classes.block}>
                    <div className={classes.blockNews}>
                        <div className={classes.img}></div>
                        <div className={classes.newsDescr}>
                            <div className={classes.lastNews}>Запись на шото там</div>
                            <div className={classes.infoNews}>14 ноября 2022</div>
                        </div>
                    </div>
                    <div className={classes.blockNews}>
                        <div className={classes.img}></div>
                        <div className={classes.newsDescr}>
                            <div className={classes.lastNews}>Запись на шото там 2</div>
                            <div className={classes.infoNews}>11 ноября 2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerBlock}>
                <div className={classes.title}>Контакты</div>
                <div className={classes.contactBlocks}>
                    <Link target={'_blank'} href={"https://www.instagram.com/lisa_tattoo_krakow/"} className={classes.blockContact}>
                        <div style={{background: `url(/images/icons/instagram.svg)`}} className={classes.imgContact}></div>
                        <div className={classes.contactDescr}>Instagram</div>
                    </Link>
                    <Link target={'_blank'} href={'https://www.facebook.com/elizabeth.pankeeva.5'} className={classes.blockContact}>
                        <div style={{background: `url(/images/icons/facebook.svg)`}} className={classes.imgContact}></div>
                        <div className={classes.contactDescr}>Facebook</div>
                    </Link>
                    <Link target={'_blank'} href={'https://t.me/trite_louis'} className={classes.blockContact}>
                        <div style={{background: `url(/images/icons/telegram.svg)`}} className={classes.imgContact}></div>
                        <div className={classes.contactDescr}>Telegram</div>
                    </Link>
                    <Link href={''} className={classes.blockContact}>
                        <div style={{background: `url(/images/icons/phone.svg)`}} className={classes.imgContact}></div>
                        <div className={classes.contactDescr}>+48999999999</div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Content;