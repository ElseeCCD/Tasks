import React from 'react';
import {Edit} from '../Icon/Edit';
import {Trash} from '../Icon/Trash';
import styles from './Table.module.css';
import {MONTHS}  from './constants.js';

class Table extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			tasks:[]	
		}
	}
	componentDidMount(){
		let promise = fetch('http://localhost:4000/tasks');
		promise.then(response => response.json()).then(data => this.setState({tasks:data}))

	}
	
	render(){
		return(
			<table>
				<thead>
					<tr>
						<td>Task name</td>
						<td>Assignee</td>
						<td>Starting date</td>
						<td>Due date</td>
						<td></td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{this.state.tasks.map((task, i) =>{
						

						var stDate = new Date(task.start_date)
						var duDate = new Date(task.due_date)
						return(
						<tr key ={i}>
							<td>{task.name}</td>
							<td>{task.assignee}</td>
							<td>{stDate.getDate()} {MONTHS[stDate.getMonth()]} {stDate.getFullYear()} {stDate.getHours()}:{stDate.getMinutes()}</td>
							<td>{duDate.getDate()} {MONTHS[duDate.getMonth()]} {duDate.getFullYear()} {duDate.getHours()}:{duDate.getMinutes()}</td>
							<td><Edit /></td>
							<td><Trash /></td>
						</tr>)
					})
				}
				</tbody>
			</table>
		)
	}
}

export {Table}