import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from './../sassModules/AlbumBig.module.scss'
import './../sassModules/None.css';
import AlbumSmallAdd from './AlbumSmallAdd'


function AlbumBig(props) {
    return (
        <div className={classes.container}>
            <img src={props.allObj.back} className={classes.backgr} />
            <div className={classes.coversAndInf}>
                <div className={classes.covers}>
                    <Carousel className={classes.carous}>
                        <div className={classes.image}>
                            <img src={props.allObj.image} />
                        </div>
                        <div className={classes.image}>
                            <img src={props.allObj.image2} />
                        </div>
                        <div className={classes.image}>
                            <img src={props.allObj.image3} />
                        </div>
                        <div className={classes.image}>
                            <img src={props.allObj.image4} />
                        </div>
                    </Carousel>
                </div>
                <div className={classes.inf}>
                    <div className={classes.almostAll}>
                        <h3 className={classes.name}>{props.allObj.name} [LP]</h3>
                        <p className={classes.article}>Article: {props.allObj.article}</p>
                        <p className={classes.price}>{props.allObj.price}</p>
                        <button className={classes.btn} onClick={ () => props.onAdd(props.allObj)}>Add to bag</button>
                        <div className={classes.sides}>
                            <div className={classes.sideA}>
                                <h3>Side A</h3>
                                <p>A1. {props.allObj.a1}</p>
                                <p>A2. {props.allObj.a2}</p>
                                <p>A3. {props.allObj.a3}</p>
                                <p>A4. {props.allObj.a4}</p>
                                <p>A5. {props.allObj.a5}</p>
                                <p>A6. {props.allObj.a6}</p>
                            </div>
                            <div className={classes.sideB}>
                                <h3>Side B</h3>
                                <p>B1. {props.allObj.b1}</p>
                                <p>B2. {props.allObj.b2}</p>
                                <p>B3. {props.allObj.b3}</p>
                                <p>B4. {props.allObj.b4}</p>
                                <p>B5. {props.allObj.b5}</p>
                                <p>B6. {props.allObj.b6}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.genreAndYear}>
                        <p>Genre: {props.allObj.genre1}, {props.allObj.genre2}, {props.allObj.genre3}</p>
                        <p>Year of publication: {props.allObj.year}</p>
                    </div>
                </div>
            </div>
            <div className={classes.description}>
                <h4>Description</h4>
                <p>{props.allObj.description}</p>
            </div>
            <div className={classes.related}>
                <h2>Related Products</h2>   
                <AlbumSmallAdd genre1={props.allObj.genre1} genre2={props.allObj.genre2} genre3={props.allObj.genre3} name={props.allObj.name}/>
            </div>
        </div>
    );
}

export default AlbumBig;