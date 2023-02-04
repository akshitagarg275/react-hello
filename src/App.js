import React  from "react"
import "./style.css"
import Button from "./button"

const App=()=>{
    return (
        <div>
            <h1 style = {{textAlign :"center"}}>hello world</h1>
            <Button title="App Store"></Button>
            <Button title="Play Store"></Button>
        </div>
    )
}

export default App;