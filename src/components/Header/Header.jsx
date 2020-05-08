import React, {Component} from 'react';
import styles from './Header.module.css';
import {Buttons} from '../Buttons/Buttons'
const Header = () =>{
	return(
		<div className={styles.container}>
			<h1 className='title'>Tasks</h1>
			<Buttons>+ Add</Buttons>
		</div>
		)
}
export {Header}
