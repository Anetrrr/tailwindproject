import React, {useState, useEffect} from "react";
import {CircleLoader}from "react-spinners";



const Jokes = () => {
    const [joke, setJoke] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const url = "https://api.chucknorris.io/jokes/random"

    const JokeID = joke.id
    const jokeID = () => {
      JokeID.splice(2,8)
    }

    const newJoke = () => {
      setIsLoading(true)
      fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        setJoke(data)
        setIsLoading(false)
    })
    }
    
    useEffect(() => {
            newJoke()
    }, [])
  return(


  <div className="bg-gray-300 h-[100vh] w-full">
        <div className="mx-auto bg-slate-900  w-[90vw] text-white  h-[40vh] text-center md:text-3xl sm:text-xl ">
                <h2>Random Jokes Generator</h2>
                <br></br>
                {isLoading ? (
                  <div className="text-center border border-rose-500 flex">
                  <CircleLoader color="white" />
                  </div>

                ) : (
                  <>
                <h3 className="text-xl"> Joke id: {joke.id} </h3>
                <p className="text-2xl p-6 bg-white text-rose-500 ">{joke.value}</p>
                </>
                )}

                <button className="bg-rose-500 rounded mt-12 p-2" onClick={newJoke}>Generate Joke</button>
                
                
        </div>


  </div>

  )
};

export default Jokes;
