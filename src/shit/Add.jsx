import React, { useState } from "react";
import {Link} from 'react-router-dom'
import classes from './../sassModules/AlbumSmallMainAll.module.scss';
import classesForButton from './../sassModules/Add.module.scss';
import classes2 from './../sassModules/Add2.module.scss';
import Table2 from './Table2'
import Add2 from './Add2'
import AlbumSmallMain from './AlbumSmallMain'




const Input = (props) => {

  let count = 0;

  return (
    <div className={classes.container}>
        <AlbumSmallMain name={props.data[16].name} image={props.data[16].image} year={props.data[16].year} price={props.data[16].price} linkTo={props.data[16].linkTo}/>
        <AlbumSmallMain name={props.data[17].name} image={props.data[17].image} year={props.data[17].year} price={props.data[17].price} linkTo={props.data[17].linkTo}/>
        <AlbumSmallMain name={props.data[18].name} image={props.data[18].image} year={props.data[18].year} price={props.data[18].price} linkTo={props.data[18].linkTo}/>
        <AlbumSmallMain name={props.data[19].name} image={props.data[19].image} year={props.data[19].year} price={props.data[19].price} linkTo={props.data[19].linkTo}/>
        <AlbumSmallMain name={props.data[20].name} image={props.data[20].image} year={props.data[20].year} price={props.data[20].price} linkTo={props.data[20].linkTo}/>
        <AlbumSmallMain name={props.data[21].name} image={props.data[21].image} year={props.data[21].year} price={props.data[21].price} linkTo={props.data[21].linkTo}/>
        <AlbumSmallMain name={props.data[22].name} image={props.data[22].image} year={props.data[22].year} price={props.data[22].price} linkTo={props.data[22].linkTo}/>
        <AlbumSmallMain name={props.data[23].name} image={props.data[23].image} year={props.data[23].year} price={props.data[23].price} linkTo={props.data[23].linkTo}/>
    </div>
  );
};


let a = true;


const Add = (props) => {
  const [inputList, setInputList] = useState([]);
 

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} data={props.data} />));
    a = false;
  };


  if(a) {
    return (
        <div className={classesForButton.container}>
            <button onClick={onAddBtnClick} className={classesForButton.addInput}>More covers</button>
            {inputList}
        </div>
    );
  }
 else {
    return (
        <div>{inputList}</div>
    );
 }
};


export default Add;