import React from 'react';
import classes from './../sassModules/AlbumSmallMainAll.module.scss';
import { Link } from 'react-router-dom';
import AlbumSmallMain from './AlbumSmallMain'
import Add2 from './Add2';
import TableAll from './TableAll'
import Table1 from './Table1'

function AlbumSmallMainAll(props) {
    //     let content = [];
        
    //     for (let i = 0; i < 8; i++) {
    //         return <AlbumSmallMain2 name={props.data[i].name} image={props.data[i].image} year={props.data[i].year} price={props.data[i].price} linkTo={props.data[i].linkTo}/>
    //     }

    //    return (
    //     {for (let i = 0, i < 8, i++) {

    //     }}
    //    );

    return (
        <div className={classes.container}>
         <AlbumSmallMain name={props.data[0].name} image={props.data[0].image} year={props.data[0].year} price={props.data[0].price} linkTo={props.data[0].linkTo}/>
        <AlbumSmallMain name={props.data[1].name} image={props.data[1].image} year={props.data[1].year} price={props.data[1].price} linkTo={props.data[1].linkTo}/>
        <AlbumSmallMain name={props.data[2].name} image={props.data[2].image} year={props.data[2].year} price={props.data[2].price} linkTo={props.data[2].linkTo}/>
        <AlbumSmallMain name={props.data[3].name} image={props.data[3].image} year={props.data[3].year} price={props.data[3].price} linkTo={props.data[3].linkTo}/>
        <AlbumSmallMain name={props.data[4].name} image={props.data[4].image} year={props.data[4].year} price={props.data[4].price} linkTo={props.data[4].linkTo}/>
        <AlbumSmallMain name={props.data[5].name} image={props.data[5].image} year={props.data[5].year} price={props.data[5].price} linkTo={props.data[5].linkTo}/>
        <AlbumSmallMain name={props.data[6].name} image={props.data[6].image} year={props.data[6].year} price={props.data[6].price} linkTo={props.data[6].linkTo}/>
        <AlbumSmallMain name={props.data[7].name} image={props.data[7].image} year={props.data[7].year} price={props.data[7].price} linkTo={props.data[7].linkTo}/>
        <AlbumSmallMain name={props.data[8].name} image={props.data[8].image} year={props.data[8].year} price={props.data[8].price} linkTo={props.data[8].linkTo}/>
        <AlbumSmallMain name={props.data[9].name} image={props.data[9].image} year={props.data[9].year} price={props.data[9].price} linkTo={props.data[9].linkTo}/>
        <AlbumSmallMain name={props.data[10].name} image={props.data[10].image} year={props.data[10].year} price={props.data[10].price} linkTo={props.data[10].linkTo}/>
        <AlbumSmallMain name={props.data[11].name} image={props.data[11].image} year={props.data[11].year} price={props.data[11].price} linkTo={props.data[11].linkTo}/>
        <AlbumSmallMain name={props.data[12].name} image={props.data[12].image} year={props.data[12].year} price={props.data[12].price} linkTo={props.data[12].linkTo}/>
        <AlbumSmallMain name={props.data[13].name} image={props.data[13].image} year={props.data[13].year} price={props.data[13].price} linkTo={props.data[13].linkTo}/>
        <AlbumSmallMain name={props.data[14].name} image={props.data[14].image} year={props.data[14].year} price={props.data[14].price} linkTo={props.data[14].linkTo}/>
        <AlbumSmallMain name={props.data[15].name} image={props.data[15].image} year={props.data[15].year} price={props.data[15].price} linkTo={props.data[15].linkTo}/>
        </div>
    );      
}

export default AlbumSmallMainAll;