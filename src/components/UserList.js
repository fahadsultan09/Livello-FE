import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios'; // Import the Axios instance
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function UserList({ onSelectUser }) {
	const [users, setUsers] = useState([]);
	const [selectedOption, setSelectedOption] = useState('');


	useEffect(() => {
		axiosInstance.get('/api/users')
			.then(response => {
				const { data: { success = false, data = [] } } = response
				if (success) {
					setUsers(data)
				}
			})
			.catch(() => {

			});
	}, []);

	const handleSelectChange = (event) => {
		const value = event.target.value;
		onSelectUser(value);

		setSelectedOption(value)
	};

	if (!users) return (<div>No Users Found</div>);
	return (
		<div className="user-list">
			<h2>Users</h2>
			<FormControl className='col-md-12' style={{ marginTop: "20px" }}>
				<InputLabel >Select an option</InputLabel>
				<Select value={selectedOption} onChange={handleSelectChange}>
					{users.map((user) => (
						<MenuItem key={user._id} value={user}>
							{user.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default UserList;
