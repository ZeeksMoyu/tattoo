import * as React from 'react';
import classes from "./Header.module.css"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from "next/link";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const list = [
        {label: 'Главная', url: '/', icon: <HomeIcon fontSize="small"/>},
        {label: 'Эскизы', url: '/sketches', icon: <AutoAwesomeMotionIcon fontSize="small"/>},
        {label: "О себе", url: '', icon: <AccountCircleIcon fontSize="small"/>},
        {label: "Партнёры", url: '', icon: <HandshakeIcon fontSize="small"/>},
        {label: "Новости", url: '/news', icon: <NewspaperIcon fontSize="small"/>},
        {label: "Цены", url: '/price', icon: <LocalOfferIcon fontSize="small"/>},
    ]


    return (
        <React.Fragment>
            <header className={classes.header}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100vw',
                    justifyContent: 'space-between'
                }}>
                    <Link className={classes.title} href={'/'}>Portfolio</Link>
                    <Link className={classes.name} href={'/'}>trite_louis</Link>
                    <Tooltip title="Menu">
                        <IconButton
                            className={classes.menu}
                            onClick={handleClick}
                            size="small"
                            sx={{ml: 2}}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar
                                src={'/images/list.svg'}
                            />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            position: 'absolute',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    {list.map((item, index) => (
                        <Link key={index} href={item.url}>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                {item.label}
                            </MenuItem>
                        </Link>
                    ))}

                </Menu>
            </header>
        </React.Fragment>
    );
};

export default Header;