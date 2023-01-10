import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { createGiveaway, editGiveaway } from '../features/giveaways/giveawaysSlice';

export const GiveawayForm = () => {

    const [giveawayData, setGiveawayData] = useState({
        title: '',
        image: '',
        description: '',
        price: '0',
        region: '',
        field: '',
        date: '',
        multiply: 1,
        repeat: 1,
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const { user } = useSelector((state) => state.auth);
    const { giveaways } = useSelector((state) => state.giveaways);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }

        if (params.id) {
            setGiveawayData(giveaways.find(giveaway => giveaway._id === params.id));
        }

    }, [user, navigate, giveaways, params.id]);

    const handleChange = (e) => {
        setGiveawayData({
            ...giveawayData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (params.id) {
            dispatch(editGiveaway({ giveawayData }));
        } else {
            dispatch(createGiveaway({ giveawayData }));
        };

        navigate('/login');
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-green-400'
        >
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={giveawayData?.title}
                onChange={handleChange}
            />

            <br />

            <label>Image:</label>
            <input
                type="text"
                name="image"
                value={giveawayData?.image}
                onChange={handleChange}
            />

            <br />

            <label>Description:</label>
            <input
                type="text"
                name="description"
                value={giveawayData?.description}
                onChange={handleChange}
            />

            <br />

            <label>Price:</label>
            <input
                type="number"
                name="price"
                value={giveawayData?.price}
                onChange={handleChange}
            />

            <br />

            <label>Region:</label>
            <input
                type="text"
                name="region"
                value={giveawayData?.region}
                onChange={handleChange}
            />

            <br />

            <label>Field:</label>
            <input
                type="text"
                name="field"
                value={giveawayData?.field}
                onChange={handleChange}
            />

            <br />

            <label>Date:</label>
            <input
                type="date"
                name="date"
                value={giveawayData?.date}
                onChange={handleChange}
            />

            <br />

            <label>Multiply:</label>
            <input
                type="number"
                name="multiply"
                value={giveawayData?.multiply}
                onChange={handleChange}
            />

            <br />

            <label>Repeat:</label>
            <input
                type="number"
                name="repeat"
                value={giveawayData?.repeat}
                onChange={handleChange}
            />

            <br />

            <button type='submit'>Submit</button>
        </form>
    )
}
