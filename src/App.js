
import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './utils/useFetch';
import Card from './components/Card';

function App() {
  let { data, isLoading } = useFetch();
  let [page, setPage] = useState(0)
  let [followers, setFollowers] = useState([]);
  // console.log(data, followers)
  // console.log("PAGE",page)
  useEffect(() => {
    if (isLoading) return;
    setFollowers((data)=>data[page])
  }, [isLoading, page])

  function handlePrev() {
    setPage((prev) =>{
      let prevPage = prev-1
      if(prevPage<0) setPage(data.length-1)
       else setPage(prevPage)
    })
    
  }

  function handleNext() {
    setPage((prev) => {
      let nextPage = prev+1;
      if(nextPage>data.length-1) setPage(0)
      else setPage(nextPage)
    })
  
  }

  // function handlePage(index) {
  //   setPage(index)
  // }
  return (
    <div className="container">
      <div className='heading-container'>
        <h1 className='heading'>{isLoading ? "LOADING...." : "Profiles"}</h1>
      </div>
      <div className='card-btn-container'>
        <div className='card-container'>
          {followers?.map((follower) => {
            return <Card {...follower} key={follower.id} />
          })}
        </div >
        <div className='btn-container'>
          <button className='btn viewprofile-btn' onClick={handlePrev}>Prev</button>
      <span  className="num-btn">
          {data.map((item, index) => {
            return (<button key={index}  className={`btn  ${(page === index) ? "active" : null}`} onClick ={( )=>setPage(index)}>{index + 1}</button>)
          })} </span>
          <button className='btn viewprofile-btn' onClick={handleNext}>Next</button>
        </div>
      </div >
    </div >
  );
}

export default App;
