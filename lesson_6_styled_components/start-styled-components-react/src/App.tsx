const App = () => {
    const tasks = ['Wake up', 'Eat', 'Workout', 'Code', 'Sleep', 'Repeat']
    const [active, setActive] = useState(0)

    return (
        <>
            <h1>My Everyday Routine</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    )
}

export default App
