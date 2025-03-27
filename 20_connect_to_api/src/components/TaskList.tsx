import { useEffect, useState } from "react";

const TaskList = ({task}: {task: string}) => {
    
    const [tasks, setTasks] = useState<string[]>([]);
  
    useEffect(() => {
       // side effect
       console.log("TaskList component mounted", task);
       setTasks(["Task 1", "Task 2", "Task 3"]);
    }, [task]);

    return (
        <>
            <h2 className="text-2xl font-bold">Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    );
}

export default TaskList;