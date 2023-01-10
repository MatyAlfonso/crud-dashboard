import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from '../components/Spinner';
import { GiveawayItem } from "../components/GiveawayItem";
import { getGiveaways } from "../features/giveaways/giveawaysSlice";

export const GiveawayList = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { giveaways, isLoading, isError, message } = useSelector((state) => state.giveaways);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        if (!user) {
            navigate('/login');
        }

        dispatch(getGiveaways());
        /*  return () => {
          dispatch(reset());
        }*/
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        <Spinner />
    };

    return (
        <>
            {giveaways.length > 0 ? (
                <table className='bg-light-black w-11/12 my-10 mx-auto rounded-2xl border-separate border-spacing-1'>
                    <thead>
                        <tr>
                            <th className='text-white p-4'>Created at</th>
                            <th className='text-white p-4'>Id</th>
                            <th className='text-white p-4'>Title</th>
                            <th className='text-white p-4'> Image</th>
                            <th className='text-white p-4'>Description</th>
                            <th className='text-white p-4'>Price</th>
                            <th className='text-white p-4'>Region</th>
                            <th className='text-white p-4'>Field</th>
                            <th className='text-white p-4'>Date</th>
                            <th className='text-white p-4'>Multiply</th>
                            <th className='text-white p-4'>Repeat</th>
                        </tr>

                        {
                            giveaways.map(giveaway => (
                                <GiveawayItem key={giveaway._id} giveaway={giveaway} />
                            ))
                        }
                    </thead>
                </table>
            ) : (<h3 className='text-white text-center p-6 text-2xl'>There is not giveaways yet! Create one.</h3>)}
        </>
    )
}
