import React from 'react';

function UserItem({ user, isSelected, onSelectUser }) {
  const handleSelect = () => {
    onSelectUser(user.id);
  };

  return (
    <div
      className={`user ${isSelected ? 'selected' : ''}`}
      onClick={handleSelect}>
        
      <img src={user.picture} alt="User" className='photo' />
      <p>{user.name}</p>
    </div>
  );
}

export default UserItem;
