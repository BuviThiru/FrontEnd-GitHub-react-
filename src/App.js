
import { useState } from 'react';
import './App.css';
import useFetch from './utils/useFetch';

function App() {
  let {data,isLoading} = useFetch();
  let [followers,setFollowers] = useState([])
  if(isLoading) return <div>LOADING....</div>
  return (
    <div className="App">
      <h1>Hai</h1>
    </div>
  );
}

export default App;
