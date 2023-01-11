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
            className='flex flex-col w-2/4 m-auto'
        >

            <h2 className='text-4xl text-white text-center font-bold'>{params.id ? 'Edit giveaway' : 'Create giveaway'}</h2>

            <label className='text-white text-2xl m-2'>Title:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="title"
                value={giveawayData?.title}
                onChange={handleChange}
            />

            <label className='text-white text-2xl m-2'>Description:</label>
            <textarea
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="description"
                value={giveawayData?.description}
                onChange={handleChange}
            />

            <label className='text-white text-2xl m-2'>Image:</label>
            <input
                className='rounded-2xl p-2 text-xl text-black'
                type="text"
                name="image"
                value={giveawayData?.image}
                onChange={handleChange}
            />

            <div className='flex flex-wrap my-4 justify-between'>
                <div className='py-4 flex flex-col'>
                    <label className='text-white text-2xl m-2'>Price:</label>
                    <input
                        className='rounded-2xl p-2 text-xl text-black'
                        type="number"
                        name="price"
                        value={giveawayData?.price}
                        onChange={handleChange}
                    />
                </div>

                <div className='py-4 flex flex-col'>
                    <label className='text-white text-2xl m-2'>Region:</label>
                    <input
                        className='rounded-2xl p-2 text-xl text-black'
                        type="text"
                        name="region"
                        value={giveawayData?.region}
                        onChange={handleChange}
                    />
                </div>

                <div className='py-4 flex flex-col'>
                    <label className='text-white text-2xl m-2'>Field:</label>
                    <input
                        className='rounded-2xl p-2 text-xl text-black'
                        type="text"
                        name="field"
                        value={giveawayData?.field}
                        onChange={handleChange}
                    />
                </div>

                <div className='py-4 flex flex-col'>
                    <label className='text-white text-2xl m-2'>Date:</label>
                    <input
                        className='rounded-2xl p-2 text-xl text-black'
                        type="date"
                        name="date"
                        value={giveawayData?.date}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='my-4 flex flex-col'>
                    <label className='text-white text-2xl m-2'>Multiply:</label>
                    <input
                        className='rounded-2xl p-2 text-xl text-black'
                        type="number"
                        name="multiply"
                        value={giveawayData?.multiply}
                        onChange={handleChange}
                    />
                </div>

                <div className='my-4 flex flex-col'>
                    <label className='text-white text-2xl m-2'>Repeat:</label>
                    <input
                        className='rounded-2xl p-2 text-xl text-black'
                        type="number"
                        name="repeat"
                        value={giveawayData?.repeat}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button type='submit' className='bg-teal hover:bg-dark-teal hover:text-white p-6 text-2xl rounded-2xl font-bold my-4 mx-auto'>Submit</button>
        </form>
    )
}
