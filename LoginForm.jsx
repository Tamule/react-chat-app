import {useState} from 'react';
import axios from 'axios';

const projectID =  'fe7c079e-06bc-453a-916e-36ad46cb8d11';

const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret' : password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.');
        }
        
    };
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange= {(event) => setPassword(event.target.value)} className="input" placeholder='Password' required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                </form>
                <h1>{Error}</h1>
            </div>
        </div>
    );
};

export default Modal;