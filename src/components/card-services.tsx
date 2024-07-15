import { title } from "process"

interface CardServicesProps {
        icon: JSX.Element,
        title: string,
        description: string
}
export function CardServices({icon, title, description}: CardServicesProps) {
    return (
        <>
            <div className="bg-muted p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
