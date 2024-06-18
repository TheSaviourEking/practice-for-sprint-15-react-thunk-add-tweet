import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTweet } from './store/tweet';

const CreateTweet = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.length) dispatch(postTweet(message))
        // dispatch(postTweet)
        setMessage(() => '')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={message} onChange={(e) => setMessage(() => e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default CreateTweet;
