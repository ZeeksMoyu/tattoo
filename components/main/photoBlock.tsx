import React, {useState} from 'react';
import classes from "./Main.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    data: any
    src: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 0,
};

const PhotoBlock: React.FC<Props>= ({data, src,}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
       <>
           <div onClick={handleOpen} style={{backgroundImage: `url('${src}')`}} className={"photoBlock"}></div>
           <Modal
               className={classes.modal}
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
           >
               <Box sx={style}>
                   <Carousel
                       autoPlay={false}
                       animation={'slide'}
                       duration={400}
                   >
                       {data.map( (item: any, i: number) => <Item close={handleClose} key={i} item={item} /> )}
                   </Carousel>
               </Box>
           </Modal>
       </>
    );
};

function Item(props: any)
{
    return (
        <>
            <div className={classes.closeIcon}>
                <CloseIcon onClick={props.close} fontSize="large" />
            </div>
            <Paper>
                <Image alt={'photo'} src={props.item.src} width={400} height={600}/>
            </Paper>
        </>
    )
}

export default PhotoBlock;