import { title } from "process"

interface CardServicesProps {
        icon: JSX.Element,
        title: string,
        description: string
}
export function CardServices({icon, title, description}: CardServicesProps) {
    return (
        <>
            <div className="bg-gradient-to-br to-zinc-50 via-zinc-100/50 from-zinc-100 p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4 text-blue-900">{icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
