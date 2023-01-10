import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGiveaway } from '../features/giveaways/giveawaysSlice';

export const GiveawayItem = ({ giveaway }) => {

    const dispatch = useDispatch();

    return (
        <>
            <tr>
                <td className='text-white text-center p-4'>{new Date(giveaway.createdAt).toLocaleString('it-IT')}</td>
                <td className='text-white text-center p-4'>{giveaway._id}</td>
                <td className='text-white text-center p-4'>{giveaway.title}</td>
                <td className='text-white text-center p-4'>{giveaway.image}</td>
                <td className='text-white text-center p-4'>{giveaway.description}</td>
                <td className='text-white text-center p-4'>{giveaway.price}</td>
                <td className='text-white text-center p-4'>{giveaway.region}</td>
                <td className='text-white text-center p-4'>{giveaway.field}</td>
                <td className='text-white text-center p-4'>{giveaway.date}</td>
                <td className='text-white text-center p-4'>{giveaway.multiply}</td>
                <td className='text-white text-center p-4'>{giveaway.repeat}</td>
                <td>
                    <Link to={`/editGiveaway/${giveaway._id}`}>
                        <button className='bg-lilac rounded-2xl p-4 m-2 font-bold'>
                            Edit
                        </button>
                    </Link>
                </td>
                <td>
                    <button
                        className='bg-red rounded-2xl p-4 m-2 font-bold'
                        onClick={() => dispatch(deleteGiveaway(giveaway._id))}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}
