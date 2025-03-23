import { IoIosSave } from "react-icons/io";
import logo from "./assets/ECLogo_500.png";

const App = () => {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                <img src={logo} alt="logo" className="w-1/3 mb-8" width="300"/>
                
                <img src="./public/image.jpeg" alt="image" className="w-1/3 mb-8" width="300"/>

                <button className="bg-gray-900 text-gray-300 px-8 py-3 rounded-xl text-xl">
                    <span className="flex items-center gap-2">
                        <IoIosSave className="text-4xl text-yellow-500" />
                        Save
                    </span>
                </button>
            </div>
        </>
    )
}

export default App
