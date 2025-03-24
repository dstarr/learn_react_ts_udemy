import { useState } from 'react';
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'

const App = () => {

    const [user, setUser ] = useState({
        id: 1,
        name: "John Doe",
        role: "Administrator"
    });

    function handleNameChange(newName: string): void {
        setUser({
            ...user,
            name: newName
        });        
    }

    return (
        <>
            <h1>State Management</h1>
            <Navigation user={user}/>
            <ProfilePage user={user} onNameChange={handleNameChange}/>
        </>
    )
}

export default App
