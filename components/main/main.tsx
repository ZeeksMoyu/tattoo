import React from 'react';
import classes from "./Main.module.css"
import usePhotos from "../../lib/talons/usePhotos"
import PhotoBlock from "@/components/main/photoBlock";


const Main = (props: any) => {

    const { photoList } = usePhotos()

    return (
        <article className={'article'}>
            <div className={'photoList'} >
                {photoList.map((item, index) => (
                    <PhotoBlock data={item.sliderPhotos} key={index} src={item.src}/>
                ))}
            </div>
        </article>
    );
};

export default Main;