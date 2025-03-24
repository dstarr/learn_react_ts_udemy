import { useState } from 'react';
import { produce } from 'immer';

const UserProfile = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'John Doe',
        role: 'Administrator',
        email: 'johndoe@example.com',
        dateAdded: '2024-09-17',
        address: {
            street: '123 Main St',
        }
    })

    const updateUser = () => {
        
        const updatedUser = produce(user, draftUser => {
            draftUser.address.street = '456 Main St';
        });

        setUser(updatedUser);
    }

    return (
        <>
            <h2>User Profile</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
            <p>Email: {user.email}</p>
            <p>Date Added: {user.dateAdded}</p>
            <p>Address: {user.address.street}</p>
            <button onClick={() => updateUser()}>Update User</button>
        </>
    )
}

export default UserProfile
