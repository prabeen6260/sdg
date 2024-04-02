import React from 'react';
import {Navbar} from './navabar/navbar';
import {Body} from './body/body'
import styles from './mainPage.module.css';
 
const MainPage =()=>{
    return(
        <div className={styles.mainBody}>
        <Navbar/>
        <Body/>
        </div>
    )
}
export default MainPage;