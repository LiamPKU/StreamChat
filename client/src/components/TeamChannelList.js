import React from 'react'
import { AddChannel } from '../assets'
const TeamChannelList = ({children,error=false,loading,type,isCreating,setIsCreating,setCreateType,setIsEditing,setToggleContainer}) => {
    if(error){
        return type==='team'?(
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    连接错误，请稍后尝试
                </p>
            </div>
        ):null
    }
    if(loading){
        return type==='team'?(
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>
                    {type==='team'?'channels':'messages'} loading ...
                </p>
            </div>
        ):null
    }
  return (
    <div className='team-channel-list'>
      <div className='team-channel-list__header'>
        <p className='team-channel-list__header__title'>
            {type==='team'?'群聊':'私聊'}
        </p>
        <AddChannel 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            type={type==='team'?'team':'messaging'}
            setToggleContainer={setToggleContainer}
        />
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList