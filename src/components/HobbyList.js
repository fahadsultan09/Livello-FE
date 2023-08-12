import React from 'react';
import columnDefinitions from './common/DataTable/DataColumn';
import CustomTable from './common/DataTable/DataRow';


function HobbyList({ user, onDeleteHobby }) {

  const columns = columnDefinitions['hobbies']
  return (
    <div className="hobby-list">
      <h2>Hobbies</h2>
  
      <CustomTable columns={columns} data={user.hobbies || []} onDelete = {onDeleteHobby} />
    </div>
  );
}

export default HobbyList;
