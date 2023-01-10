import { Link } from "react-router-dom"

export const CreateGiveawayButton = () => {
    return (
        <div className="flex items-center justify-center">
            <Link to='/createGiveaway'>
                <button className='bg-teal p-6 text-black font-bold text-2xl rounded-2xl'>
                    Create giveaway +
                </button>
            </Link>
        </div>
    )
}
