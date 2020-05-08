import React, {Component} from 'react';
import styles from './App.module.css';
import {Header} from '../Header/Header';
import {Filters} from '../Filters/Filters';
import{Table} from '../Table/Table';
class App extends Component{
	constructor(props){
		super(props);

		this.state={
			startDate: null,
			dueDate:null
		}
	}

	onStartDateChange = (val) =>{
		this.setState({startDate:val})
	}
	onDueDateChange = (val) =>{
		this.setState({dueDate:val})
	}

	render() {
		return (
			<div className={styles.container}>
				<Header />
				<Filters 
					startDate={this.state.startDate} 
					dueDate = {this.state.dueDate}
					onStartDateChange={this.onStartDateChange}
					onDueDateChange={this.onDueDateChange}
					/>
				<Table />
			</div>
		)
	}
}
export {App}