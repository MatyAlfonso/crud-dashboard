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
        <section>
            {giveaways.length > 0 ? (
                <div>
                    {
                        giveaways.map(giveaway => (
                            <GiveawayItem key={giveaway._id} giveaway={giveaway} />
                        ))
                    }
                </div>
            ) : (<h3>There is not giveaways yet!</h3>)}
        </section>
    )
}
