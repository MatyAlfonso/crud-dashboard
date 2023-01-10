import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGiveaway } from '../features/giveaways/giveawaysSlice';

export const GiveawayItem = ({ giveaway }) => {

    const dispatch = useDispatch();

    return (
        <div className='bg-zinc-700 text-white'>
            <div>{new Date(giveaway.createdAt).toLocaleString('it-IT')}</div>
            <p>{giveaway._id}</p>
            <p>{giveaway.title}</p>
            <p>{giveaway.image}</p>
            <p>{giveaway.description}</p>
            <p>{giveaway.price}</p>
            <p>{giveaway.region}</p>
            <p>{giveaway.field}</p>
            <p>{giveaway.date}</p>
            <p>{giveaway.multiply}</p>
            <p>{giveaway.repeat}</p>
            <Link to={`/editGiveaway/${giveaway._id}`}>
                <button className='bg-green-500 p-2 m-2'>
                    Edit
                </button>
            </Link>
            <button
                className='bg-red-500 p-2 m-2'
                onClick={() => dispatch(deleteGiveaway(giveaway._id))}
            >
                Delete
            </button>
        </div>
    )
}
