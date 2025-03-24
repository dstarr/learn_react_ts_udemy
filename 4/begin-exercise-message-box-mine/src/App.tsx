import { useState } from "react"
import AlertComponent from "./components/AlertComponent"

const App = () => {

    const [showAlert, setShowAlert] = useState(false);
    
    const handleShowAlert = (): void => { 
        setShowAlert(!showAlert);
    }
    

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-200">

            {
                showAlert && <AlertComponent  title="Title text" titleColor="text-purple-500">
                                <p>This is a message box.</p>
                             </AlertComponent>
            }
                

                <button onClick={() => handleShowAlert()}
                        className="bg-gray-700 text-white uppercase text-sm font-medium rounded-xl px-6 py-2 shadow-xl hover:bg-gray-900"
                >Show Alert</button>



            </div>
        </>
    )
}

export default App
