import React, { useState } from 'react';
import columnDefinitions from './common/DataTable/DataColumn';
import CustomTable from './common/DataTable/DataRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axiosInstance from '../axios'; // Import the Axios instance


function HobbyList({ user, onDeleteHobby }) {

    const columns = columnDefinitions['hobbies']
    const [passionLevel, setPassionLevel] = useState('');
    const [passionName, setPassionName] = useState('');
    const [year, setYear] = useState('');


    const handleSubmit = async () => {
        try {

            const payload = {
                passionLevel: passionLevel,
                name: passionName,
                year: year,
                userID: user._id
            }
            console.log("*****************PAYLOAD*****************", payload)
            const response = await axiosInstance.post('/api/hobbies/user', payload);
            console.log("RESPONSE  ===========> ", response)
        } catch (err) {
            console.log("err  ===========> ", err)
        }
    };

    return (
        <div className="hobby-list">
            <h2>Hobbies</h2>
            <form onSubmit={handleSubmit}>

                <TextField
                    name='passionLevel'
                    label="Passion Level"
                    autoComplete="off"
                    value={passionLevel}
                    onChange={(e) => setPassionLevel(e.target.value)}
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    type='string'
                    label="Passion Name"
                    value={passionName}
                    onChange={(e) => setPassionName(e.target.value)}
                    fullWidth
                    autoComplete="off"
                    margin="normal"
                />

                <TextField
                    label="Year"
                    type='year'
                    autoComplete="off"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button style={{ marginTop: '10px', marginBottom: '10px' }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>

            <CustomTable columns={columns} data={user.hobbies || []} onDelete={onDeleteHobby} />
        </div>
    );
}

export default HobbyList;
