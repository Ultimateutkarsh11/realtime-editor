import React, {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a new room!');  
  };


  const joinRoom = () => {

  }
  
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='homePageLogo'src='/code-sync.png' alt='code-sync-logo'/>
        <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>
        <div className='inputGroup'>
            <input 
            type='text' 
            className='inputBox' 
            placeholder='ROOM ID'
            onChange={(e)=>setRoomId(e.target.value)}
            value={roomId}
            />
            <input 
            type='text' 
            className='inputBox' 
            placeholder='USERNAME'
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            />
            <button className='btn joinBtn' onClick={joinRoom}>Join</button>
            <span className='createInfo'>
              If you don't have an invite then create &nbsp;
              <a onClick={createNewRoom} href='' className='createNewBtn'>New Room</a>
            </span>
        </div>
      </div>
      <footer className='footer'>
        <h4>
          Built with ❤️ by &nbsp; 
          <a href='https://github.com/Ultimateutkarsh11'>Utkarsh Rai</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home
