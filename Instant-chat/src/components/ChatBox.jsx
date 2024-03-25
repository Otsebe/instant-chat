const ChatBox = () => {
    const messages = [
        {
            id: 1,
            text: "Hello there!",
            name:"Joy Mwezi"
        },
        {
            id: 2,
            text: "Hi!",
            name: "Natalia Lecagae"
        }
    ]
    return (
        <div className="pb-44 pt-20 containerWrap">
          {messages.map(message => (
            <Message Key={message.id} message = {message}/>
          ))}
        </div>

    )
}
export default ChatBox