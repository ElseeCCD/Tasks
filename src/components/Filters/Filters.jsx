import React, {Component} from 'react';
import styles from './Filters.module.css';
import {Select} from '../Select/Select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const selectValues = [
 {
 	value:1,
 	label:'My first value'
 },
  {
 	value:2,
 	label:'My second value'
 },
  {
 	value:3,
 	label:'My third value'
 }
];

class Filters extends Component{
	render(){
		return(
			<div className={styles.container}>
				<div className={styles["filter-item"]}>
					<div className={styles.label}>Asignee</div>
					<Select values={selectValues} />
				</div>
				<div className={styles["filter-item"]}>
					<div className={styles.label}>Starting Date</div>
					<DatePicker
						selected={this.props.startDate}
						onChange={date => this.props.onStartDateChange(date)}
					 />
				</div>
				<div className={styles["filter-item"]}>
					<div className={styles.label}>Due Date</div>
					<DatePicker 
						selected={this.props.dueDate}
						onChange={date => this.props.onDueDateChange(date)}
					/>
				</div>

			</div>
			)
	}
}
export {Filters}
