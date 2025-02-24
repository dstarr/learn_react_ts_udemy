import { ReactNode } from "react"

interface AlertComponentProps {
    title: string,
    children: ReactNode
}

const AlertComponent = ({title, children}: AlertComponentProps) => {
    
    return (
        <>
            <div className="flex flex-col bg-white p-8 gap-4 rounded-xl shadow-xl">
                {/* Pass the title here. */}
                <span className="font-medium text-xl">{title}</span>

                {/* Pass the children here. */}
                <div className="flex">
                    {children}
                </div>
            </div>
        </>
    )
}

export default AlertComponent
