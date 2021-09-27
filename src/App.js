import { useState, useEffect } from 'react'
import './App.css';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Message from './Message'
import db from './firebase'
import firebase from 'firebase/compat'
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';





function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUserName] = useState('')

  console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, { username: username, message: input }]);
    setInput('');

  }

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUserName(prompt('Please enter your name'))
  }, [])

  return (
    <div className="App">
      <img className="msg_icon" src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="messanger logo" />
      <h3>Welcome:   {username} </h3>
      <form className="app_form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message ....</InputLabel>
          <Input className="app__input" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton
            className="app__icon" disabled={!input} type="submit" onClick={sendMessage} variant="contained"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <br />
      <FlipMove>
        {
          messages.map(({ id, message }) => {
            return <Message key={id} username={username} message={message} />
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
