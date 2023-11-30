import {useState, useEffect} from 'react';

const Views = () => {
    const [count , setCount ] = useState(0)
    const reset = () =>{
        setCount(0);
    }
    const clearStorage = () =>{
        sessionStorage.removeItem('count')
    }
    useEffect(() => {
        const storedCount = sessionStorage.getItem('count')
        const firstCount = Number(storedCount) || 0;
        setCount(firstCount + 1);
        sessionStorage.setItem('count', firstCount + 1);
    }, [])
    
  return (
    <div>
    <h1>I have been view {count} times</h1>
    <button className='btn' onClick={reset}>reset</button>
    <button className='btn' onClick={clearStorage}>clear</button>
    </div>
  )
}

export default Views