import { useEffect, useState } from "react";

function App() {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState<string[]>([]); // Define message as a string array
      const [sendMessgae,setSendMessage]=useState('')
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        
        socket.onopen = () => {
            console.log("connected");
            setSocket(socket);
        };

        socket.onmessage = (event) => {
            // Append the new message to the existing message array
            setMessage((prevMessages) => [...prevMessages, event.data]);
            console.log('received message ', event.data);
        };

        // Clean up WebSocket connection when the component unmounts
        return () => {
            socket.close();
        };
    }, []);

    if (!socket) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <>
            <h1>WebSocket Messages</h1>
            <ul>
                {message.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <input placeholder="enter the message" onChange={(e)=>{
              setSendMessage(e.target.value)
            }}></input>
            <button onClick={()=>{
              socket.send(sendMessgae)
            }}>Send message</button>
        </>
    );
}

export default App;
