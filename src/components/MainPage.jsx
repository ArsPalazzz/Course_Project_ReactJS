import React from 'react'
import video from './../videos/mainvideo.mp4';
import classes from './../App.module.scss';
import {createRef, useState} from 'react'
import gladImg from './../images/other/glad.jpg';
import addInfOne from './../images/other/vinylsmain1.jpg';
import addInfTwo from './../images/other/vinylsmain2.webp';
import TableAll from "./TableAll";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import {Link} from 'react-router-dom'
import findImage from './../images/other/find.svg';
import InfForPages from './InfForPages';

const MainPage = (props) => {

    const [data, setdata] = useState(InfForPages); // хуки - функции которые помогают обрабатывать события в js
    const [order, setorder] = useState("ASC");  // assending - возрастающий
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1  //если a[col]>b[col] то эл-ты меняются местами
            );
            setdata(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
    };

    //Sort
    const [upOrDownPrice, setUpOrDownPrice] = useState(false);
    const [upOrDownYear, setUpOrDownYear] = useState(false);
    const [upOrDownName, setUpOrDownName] = useState(false);

    
    const handleClickPrice = () => {
        sorting("price");
        setUpOrDownPrice(current => !current);
    }

    const handleClickYear = () => {
        sorting("year");
        setUpOrDownYear(current => !current);
    }

    const handleClickName = () => {
        sorting("name");
        setUpOrDownName(current => !current);
    }



    const [value, setValue] = useState('');

    const filteredAlbums = data.filter(album => {
        return album.name.toLowerCase().includes(value.toLowerCase())
    })


    const itemClickHandler = e => {
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const [isOpen, setIsOpen] = useState(true)

    const inputClickHandler = () => {
        setIsOpen(true)
    }

   

    let delay = 100;
    let refInputSearch = React.createRef(); //создание рефа

    return (
        <>
            <div className={classes.mainInf} id='myMainBlock'>
                <video muted autoPlay loop className={classes.myvideo} >
                    <source src={video} type="video/mp4" />
                </video>
                <p className={classes.myVinyl} data-aos='fade-right' data-aos-delay='300' data-aos-duration='1200'>MyVinyl</p>
                <p className={classes.theLargest} data-aos='fade-left' data-aos-delay='300' data-aos-duration='1200'>The largest selection of records</p>
            </div>
            <div className={classes.options}>
                <div className={classes.findBlock}>
                    <form>
                        <input 
                            type='text'
                            placeholder='Search'
                            className={classes.searchInput}
                            onChange={ event => setValue(event.target.value/*данные в input */)}
                            value={value} 
                            onClick={inputClickHandler}
                            ref={refInputSearch}
                            onKeyPress = {(event) => {
                                if(event.key === '`'){
                                    event.preventDefault();
                                    refInputSearch.current.value = setValue(''); //использование рефов
                                  }
                            }}
                        />
                        <ul className={classes.autocomplete}>
                            {
                                value && isOpen
                                    ? filteredAlbums.map( (item) => {
                                        return (
                                            <li className={classes.item} onClick={itemClickHandler} key={item.id}>{item.name}</li>
                                        )
                                    })
                                    : null
                            }
                           
                        </ul>
                        <img src={findImage} className={classes.findImg}/>
                    </form>
                </div>
                <div className={classes.words}>
                    <div onClick={handleClickName}>
                        <p className={classes.name}>Name</p>{upOrDownName ? <FaChevronUp className={classes.up1}/> : <FaChevronDown className={classes.down1} />}
                    </div>          
                    <div onClick={handleClickPrice}>
                        <p className={classes.price}>Price</p>{upOrDownPrice ? <FaChevronUp className={classes.up2} /> : <FaChevronDown className={classes.down2} />}
                    </div>
                    <div onClick={handleClickYear} className={classes.yearBlock}>
                        <p className={classes.year}>Year of publication</p>{upOrDownYear ? <FaChevronUp className={classes.up3} /> : <FaChevronDown className={classes.down3} />}
                    </div>
                </div>        
            </div>
            <div className={classes.albums}>    
                {filteredAlbums.map( (item) =>  (
                    <div className={classes.block} key={item.id} data-aos='fade-down' data-aos-delay={delay == 300 ? delay = 100 : delay} data-aos-duration='800' data-aos-offset='-100'>
                        <Link to={item.path} className={classes.link}>
                            <div className={classes.first}>
                                <img src={item.image} alt='albumPhoto'/>
                            </div>
                        </Link>
                        <MdAddCircle className={classes.add} onClick={ () => props.onAdd(item)}/>
                        
                        <div className={classes.second}>
                            <Link to={item.path} className={classes.link}><p className={classes.pInLink}>{item.name} [LP]</p></Link>
                            <p>{item.year}</p>
                            <p>{item.price}</p>
                        </div>
                        <div className={classes.hideBlock}>{delay += 50}</div>
                    </div>
                ) )} 
        </div>
        <div className={classes.gladBlock}>
            <img src={gladImg} alt='gladImg' />
            <p>We are always glad to see you</p>
        </div>
        <div className={classes.addInf}>
            <div className={classes.firstInf}>
            <div className={classes.firstInfImg}>
                <img src={addInfOne} alt='addInfOne'/>
            </div>
            <div className={classes.firstInfText}>
                <h3>Play Vinyl Record Store</h3>
                <hr />
                <p>We are pleased to offer you a wide selection of vinyl at affordable prices. We regularly arrange discounts, promotions and sales. We sell only new and original records. Our main goal and fundamental principle in our work is customer satisfaction, since we do not sell music, we sell musical pleasure. We are ready to help you find even rare recordings! To do this, just leave a request. And we will do our best to help you get the desired record. We are friends with many "anonymous vinylers". These people, like us, depend on good music and are not going to be treated for their addiction!</p>
            </div>
            </div>
            <div className={classes.secondInf}>
            <div className={classes.secondInfText}>
                <h3>VMP Anthology: 50 years of the comedy store</h3>
                <hr />
                <p>A limited-edition vinyl box set featuring five albums and six LPs of comedy from the stage of the legendary comedy club on Sunset Boulevard. Produced in collaboration with the Comedy Store, '50 Years of The Comedy Store' collects work from The Store’s various anniversary shows and presents them on vinyl for the first time ever.</p>
            </div>
            <div className={classes.secondInfImg}>
                <img src={addInfTwo} alt='addInfTwo'/>
            </div>
            </div>
        </div>
      </>
    );
}

export default MainPage;