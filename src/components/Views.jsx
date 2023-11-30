import {useState, useEffect} from 'react';

const Views = () => {
    const [count , setCount ] = useState(0)
    const reset = () =>{
       setCount(0)
       sessionStorage.removeItem('count')//this reset will remoce the storage and set the count to 0
    }
    useEffect(() => {
        const storedCount = sessionStorage.getItem('count')//get count
        const firstCount = Number(storedCount) || 0;//makes sure the first count is a number
        setCount(firstCount + 1);//adds the the first count with the set count
        sessionStorage.setItem('count', firstCount + 1);//this actually set the session storage
    }, [])
    
  return (
    // This consists of the html tags with onclicks and classes with inline css
    <div>
    <h1 style={{margin: "-11rem"}}>I have been view {count} times</h1>
    <br/>
    <button style={{margin: "10rem", height: '50px', width:'80px', textAlign: 'center'}} className='btn' onClick={reset}>RESET</button>
    </div>
  )
}

export default Views