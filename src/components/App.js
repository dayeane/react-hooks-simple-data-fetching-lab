// create your App component here

import { useEffect, useState } from "react";


function App() {

    useEffect( () => {
        const img = document.querySelector("img")

        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())   
        .then((data) => img.src = data.message )

        document.querySelector("p").innerText = ""
        img.alt="A Random Dog"
    });


   
    return (
        <div>
            <p>"Loading..."</p>
            <img  src="" alt=""></img>
        </div>
    )
}


export default App;