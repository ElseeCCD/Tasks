import React, {Component} from 'react';
import styles from './Select.module.css';
const Select = (props) =>{
	const {values} = props;
	return(
		<select className="select">
			<option value=''>No items selected</option>
			{values.map(el => <option key={el.value} value={el.value}>{el.label}</option>)}
		</select>

	)

}
export {Select}