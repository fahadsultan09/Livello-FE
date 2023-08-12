import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import HobbyList from './components/HobbyList';
import axiosInstance from './axios'; // Import the Axios instance
import 'bootstrap/dist/css/bootstrap.min.css';
import { Padding } from '@mui/icons-material';


function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteHobby = (hobby) => {
    axiosInstance.delete(`/api/hobbies/${hobby._id}`)
      .then(response => {
        setSelectedUser(prevUser => ({
          ...prevUser,
          hobbies: prevUser.hobbies.filter(item => item._id !== hobby._id)
        }));
      })
      .catch(error => {
        console.error('Error deleting hobby:', error);
      });
  };

  return (
    <div className="app">
      {/* <UserList onSelectUser={handleSelectUser} />
      {console.log("SELECTED USER " ,selectedUser)}
      {selectedUser && <HobbyList user={selectedUser} onDeleteHobby={handleDeleteHobby} />} */}
      <div className="container" style={{padding:'20px'}}>
        <div className="row">
          <div className="col-md-3">
            <UserList onSelectUser={handleSelectUser} />
          </div>
          <div className="col-md-9">
            {selectedUser && <HobbyList user={selectedUser} onDeleteHobby={handleDeleteHobby} />} 

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
