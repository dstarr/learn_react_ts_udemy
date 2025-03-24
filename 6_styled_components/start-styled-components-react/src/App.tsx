import { useState } from 'react';
import styled from 'styled-components';

interface ListItemProps {
    selected: boolean;
}

const List = styled.ul`
    list-style: none;
    padding: 16px;
    margin: 0;
`;

const ListItem = styled.li<ListItemProps>`
    padding: 6px 8px;    
    background-color: ${props => props.selected ? 'blue' : 'none'};
    color: ${props => props.selected ? 'white' : 'black'};
`;


const App = () => {
    
    const tasks = ['Wake up', 'Eat', 'Workout', 'Code', 'Sleep', 'Repeat']
    const [active, setActive] = useState(0)

    const handleClick = (index: number) => {
        setActive(index)
    }

    return (
        <>
            <h1>My Everyday Routine</h1>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index} onClick={() => handleClick(index)} selected={active === index}>{task}</ListItem>
                ))}
            </List>
        </>
    )
}

export default App
