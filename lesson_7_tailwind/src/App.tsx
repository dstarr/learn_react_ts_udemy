import { useState } from 'react';
import styled from 'styled-components';




const App = () => {
    
    const tasks = ['Wake up', 'Eat', 'Workout', 'Code', 'Sleep', 'Repeat']
    const [active, setActive] = useState(0)

    const handleClick = (index: number) => {
        setActive(index)
    }

    return (
        <>
            <h1 className='m-4 text-2xl font-bold'>My Everyday Routine</h1>
            <ul className='list-style'>
                {tasks.map((task, index) => (
                    <li 
                    key={index}
                    className="list-item-style"
                    >{task}</li>
                ))}
            </ul>
        </>
    )
}

export default App
