import React from 'react';
import classes from './../sassModules/AlbumSmallMain.module.scss';
import { Link } from 'react-router-dom';
import TableAll from './TableAll'
import classes2 from './../sassModules/Add2.module.scss';
import Table2 from './Table2'
import Add2 from './Add2'





function AlbumSmallMain(props) {
    return (
      <>  
                <div className={classes.block} data-aos='fade-down' data-aos-delay='100' data-aos-duration='800' data-aos-offset='-100'>
                    <Link to={props.linkTo} className={classes.link}>
                        <div className={classes.first}>
                            <img src={props.image} alt='albumPhoto'/>
                        </div>
                    </Link>
                    <div className={classes.second}>
                        <Link to={props.linkTo} className={classes.link}><p className={classes.pInLink}>{props.name}</p></Link>
                        <p>{props.year}</p>
                        <p>{props.price}</p>
                    </div>
                </div>
        </>
    );
}

export default AlbumSmallMain;