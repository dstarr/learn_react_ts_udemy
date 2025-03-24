import { useState } from "react";
import { User } from "../types/user";

interface ProfilePageProps {
    user: User;
    onNameChange: (name: string) => void;
}

const ProfilePage = ({ user, onNameChange }: ProfilePageProps) => {
    
    // hold the name value displayed in the input field
    const [name, setName] = useState(user.name);
    // update the local state
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    // update the parent state 
    const handleUpdate = () => {
        onNameChange(name);
    };
    
    return (
        <>
            <h1>Profile Page</h1>

            <p>User ID: {user.id}</p>
            <p>User Name: {user.name}</p>
            <p>User Role: {user.role}</p>
            
            <input id="name" type="text" value={name} onChange={handleNameChange} />

            <button type="button" onClick={handleUpdate}>Change Name</button>
        </>
    )
}

export default ProfilePage
