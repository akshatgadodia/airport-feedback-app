import React from 'react'
import './Stylesheets/Home.css'

const Home = () => {
  var l=[{"1":"2"},{"2":"3"},{"3":"4"}]
  var z=["1","2","3"]
  return (
    <div className='home'>
      {l.map((key)=>{
        console.log(Object.entries(key));
        let x=Object.entries(key)[0]
        return (<p key={x[0]} value={x[0]} onClick={(e)=>{console.log(e.target)}}>{x[1]}</p>)
      })}
      <form>
        <h1>Login</h1>
        <span><label>Name: <input type="text"/></label></span>
        <span><label>Email: <input type="text"/></label></span>
        <span><label>Mobile No.: <input type="text"/></label></span>
        <span><label>PNR: <input type="text"/></label></span>
        <span><label><input type="submit" value="Submit"/></label></span>
      </form>
    </div>
  )
}

export default Home