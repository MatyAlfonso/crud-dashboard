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
            className='flex flex-col w-2/4 m-auto justify-center items-center h-screen'
        >
            <label className='text-white text-2xl m-2'>Title:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="title"
                value={giveawayData?.title}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Image:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="image"
                value={giveawayData?.image}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Description:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="description"
                value={giveawayData?.description}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Price:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="number"
                name="price"
                value={giveawayData?.price}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Region:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="region"
                value={giveawayData?.region}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Field:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="field"
                value={giveawayData?.field}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Date:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="date"
                name="date"
                value={giveawayData?.date}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Multiply:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="number"
                name="multiply"
                value={giveawayData?.multiply}
                onChange={handleChange}
            />

            <br />

            <label className='text-white text-2xl m-2'>Repeat:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="number"
                name="repeat"
                value={giveawayData?.repeat}
                onChange={handleChange}
            />

            <br />

            <button type='submit' className='bg-teal p-6 text-2xl rounded-2xl font-bold'>Submit</button>
        </form>
    )
}
