import React from 'react';
import {useState} from 'react';
import find from './../images/other/find.svg';
import classes from './../sassModules/Find.module.scss';
import TableAll from './TableAll'

// const filteredAlbums = TableAll.filter(album => {
//     return album.name.toLowerCase().includes(Find.value.toLowerCase())
// });

// export {filteredAlbums};

const Find = () => {

    const [value, setValue] = useState('');

    

    return (
        <React.Fragment>
            <div className={classes.leftFind}>
                <form>
                    <input 
                        type='text'
                        placeholder='Search'
                        className={classes.searchInput}
                        onChange={ event => setValue(event.target.value /*данные в input */)}
                    />
                </form>
            </div>
            <div className={classes.rightFind}>
                <img src={find} className={classes.findImg}/>
            </div>
        </React.Fragment>
    );
}

export default Find;