import { useState } from 'react'

const App = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        role: 'Administrator',
        contact: {
            mobile: '0976-123-4567',
            landline: '047-644-1234',
            email: ''
        }
    })

    // Update the user's email using 2 levels of depth in an object structure
    const handleUpdate = () => {
        setUser({
            ...user,
            contact: {
                ...user.contact,
                email: "john.doe@example.com"
            }
        });
    }

    return (
        <>
            <div>
                <span>User: {user.name}</span>
                <span>Role: {user.role}</span>
                <span>
                    <strong>contact:</strong>
                </span>
                <span>Mobile: {user.contact.mobile}</span>
                <span>Landline: {user.contact.landline}</span>
                <span>Email: {user.contact.email}</span>
                
                <button onClick={handleUpdate}>Update</button>
            </div>

            
        </>
    )
}

export default App
