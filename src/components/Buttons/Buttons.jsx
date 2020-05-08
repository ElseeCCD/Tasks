import React, {Component} from 'react';
import cn from 'classnames';
import styles from  './Buttons.module.css';
const Buttons = (props)=>{
	return(
		<button className={cn(styles.button, props.type === 'grey' ? styles.button__grey : '')}>{props.children}</button>
	)
}
export {Buttons}