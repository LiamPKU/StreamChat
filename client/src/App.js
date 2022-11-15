import logo from './logo.svg';

import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import 'stream-chat-react/dist/css/index.css'
import './App.css';
import {ChannelContainer, ChannelListContainer, Auth} from './components'
import { useState } from 'react';

const cookies = new Cookies()
const apiKey= '47za2j54pgh7'

const authToken = cookies.get("token")
const client = StreamChat.getInstance(apiKey)

if(authToken){
  //真正向这个token提交数据
  client.connectUser({
    name:cookies.get('username'),
    fullName:cookies.get('fullName'),
    id:cookies.get('userId'),
    phoneNumber:cookies.get('phoneNumber'),
    image:cookies.get('avatarURL'),
    hashedPassword:cookies.get('hashedPassword')  
  },authToken)
}
function App() {
  const [createType,setCreateType] = useState('')
  const [isCreating,setIsCreating] = useState(false)
  const [isEditing,setIsEditing] = useState(false)
  if(!authToken) return <Auth />
  return (
    <div className="app__wrapper" theme="team light">
      <Chat client={client}>
        <ChannelListContainer 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          createType={createType}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </Chat>
    </div>
  );
}

export default App;
