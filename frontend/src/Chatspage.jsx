import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('593f86cd-4fb4-4be9-aece-91d8b8f86df1', 
    props.user.username,
     props.user.secret
     );
    return (
     <div style={{height: "100vh"}}>
<MultiChatSocket {...chatProps} />
<MultiChatWindow {...chatProps} style={{height:'100%'}}/>

    </div>
    )
}


export default ChatsPage