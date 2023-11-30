import './App.css';
import Views from './components/Views';

const App = () => {
  return (
    <div className="App-header">
      <h1 className="App-header" style={{margin: "-13rem"}}>Welcome, this is how many times you've viewed this page</h1>
      <Views/>
    </div>
  )
}

export default App