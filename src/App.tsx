import { useState } from 'react'
import './App.css'

function App() {
    const [connection, setConnection] = useState(false)
    return (
        <>
            <h1>Please touch the button to verify the connection to the server</h1>
            <button onClick={async () => {
                try{
                    const res = await fetch('http://localhost:3000/ping')
                    console.log(res.text())
                    setConnection(true)
                }catch{
                    setConnection(false)
                }
            }}>Verify</button>
            {
                connection?<h2 style={{color:'#60ff60'}}>Connected</h2>:<h2 style={{color:'#ff6060'}}>Disconnected</h2>
            }
        </>
    )
}

export default App
