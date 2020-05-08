import React from 'react';

import {Edit} from '../Icon/Edit';
import {Trash} from '../Icon/Trash';
import styles from './Table.module.css';
import { MONTHS } from "./months";


class Table extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		tasks: []
    	}
    }

    componentDidMount() {
    	let promise = fetch('http://localhost:4000/tasks');
		promise.then(response => response.json()).then(data => this.setState({tasks:data}))
    }
    
	render() {
		return (
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
					{this.state.tasks.map((task, i) => {
						let startDate = new Date(task.start_date);
						let dueDate = new Date(task.due_date)
						return (
							<tr key={i}>
								<td>{task.name}</td>
								<td>{task.assignee}</td>
								<td>{startDate.getDate()} {MONTHS[startDate.getMonth()]} {startDate.getFullYear()} {startDate.getHours()}:{startDate.getMinutes()}</td>
								<td>{dueDate.getDate()} {MONTHS[dueDate.getMonth()]} {dueDate.getFullYear()} {dueDate.getHours()}:{dueDate.getMinutes()}</td>
								<td><Edit /></td>
								<td><Trash /></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
}

export {Table}
