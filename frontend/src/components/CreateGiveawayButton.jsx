import { Link } from "react-router-dom"

export const CreateGiveawayButton = () => {
    return (
        <div className="text-center m-2">
            <Link to='/createGiveaway'>
                <button className='bg-slate-500 p-4 text-white'>Create new giveaway +</button>
            </Link>
        </div>
    )
}
