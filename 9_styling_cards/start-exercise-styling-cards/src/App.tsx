import { FaUser } from 'react-icons/fa';
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const App = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                
                <div className="flex flex-col w-[300px] rounded-2xl overflow-hidden border border-gray-300 shadow-2xl">    
                    <img src="/profile.jpg" alt="profile" className="mb-3"/>
                    <div className="flex flex-col px-3 pb-3">
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-center gap-2">
                                <FaUser className="card-icon" />
                                Jane Doe
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCode className="card-icon" />
                                Software Engineer
                            </li>
                            <li className="flex items-center gap-2">
                                <FaReact className="card-icon" />
                                React Developer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
