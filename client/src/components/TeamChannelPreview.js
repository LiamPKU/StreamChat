import React from 'react'
import { Avatar,Channel,useChatContext } from 'stream-chat-react'
const TeamChannelPreview = ({channel,type,setToggleContainer,setIsCreating,setIsEditing,setActiveChannel}) => {
    const {channel:activeChannel,client} = useChatContext()
    function ChannelPreview(){
        return (
            <p className='channel-preview__item'>
                # {channel?.data?.name || channel?.data?.id}
            </p>
        ) 
    }
    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter((user)=>user.id!==client.userID)
        //不要返回自己
        return (
            <div className='channel-preview__item single'>
                <Avatar 
                    img={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size={24}
                />
                <p>{members[0]?.user?.fullName||members[0]?.user?.id}</p>
            </div>
        )
    }
  return (
    <div className={
        channel?.id===activeChannel?.id ? 'channel-preview__wrapper__selected':'channel-preview__wrapper'    
        }
        onClick={()=>{
            setIsCreating(false)
            setIsEditing(false)
            setActiveChannel(channel)
            setToggleContainer(prevContainer=>!prevContainer)
        }}
    >
      {type==='team'?<ChannelPreview />:<DirectPreview/>}
    </div>
  )
}

export default TeamChannelPreview
