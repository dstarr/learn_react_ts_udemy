interface TitleComponentProps {
    textColor?: 'text-blue-500' | 'text-red-500' | 'text-green-500' | 'text-yellow-500' | 'text-purple-500'
}

const TitleComponent = ({ textColor = 'text-red-500' }: TitleComponentProps) => {
    return <h1 className={`font-bold text-4xl ${textColor}`}>React + TypeScript</h1>
}

export default TitleComponent
