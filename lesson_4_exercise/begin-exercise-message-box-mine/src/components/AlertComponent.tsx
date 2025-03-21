import { ReactNode } from "react"

interface AlertComponentProps {
    title: string,
    titleColor?: "text-purple-500" | "text-red-500" | "text-green-500" | "text-yellow-500",
    children: ReactNode
}

const AlertComponent = ({title, titleColor='text-red-500', children}: AlertComponentProps) => {
    
    return (
        <>
            <div className="flex flex-col bg-white p-8 gap-4 rounded-xl shadow-xl">
                {/* Pass the title here. */}
                <span className={`font-medium text-xl ${titleColor}`}>{title}</span>

                {/* Pass the children here. */}
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AlertComponent
