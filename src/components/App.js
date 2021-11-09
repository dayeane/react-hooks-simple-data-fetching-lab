// create your App component here

import { useEffect, useState } from "react";


function App() {
    const [loading, setLoading]= useState(null)
    
    useEffect( () => {

        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())   
        .then((data) => setLoading(data.message) )
    }, []);

   
    return (
        <div>
            { loading ? <img  src={loading} alt="A Random Dog"></img> : <p>"Loading..."</p> }
        </div>
    )
}


export default App;