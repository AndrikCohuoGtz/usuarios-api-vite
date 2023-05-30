import React, { useState } from 'react';
import UserSelected from './UserSelected';
import './App.css'

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const newUser = {
          id: data.results[0].login.uuid,
          picture: data.results[0].picture.large,
          name: `${data.results[0].name.first} ${data.results[0].name.last}`
        };
        setUsers(prevUsers => [newUser, ...prevUsers]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteUser = () => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== selectedUser));
    setSelectedUser(null);
  };

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div className='container'>
      <h1>Random Users</h1>
      <div className='buttons-container'>
        <button onClick={fetchData} className='button add'>Añadir usuario</button>
        <button onClick={handleDeleteUser} className='button del'>Eliminar usuario</button>
      </div>
      <div className='users'>
        {users.map(user => (
          <UserSelected
            key={user.id}
            user={user}
            isSelected={selectedUser === user.id}
            onSelectUser={handleSelectUser}
            className='user'
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;