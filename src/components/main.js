import react, { useState } from 'react';
import books from '../images/bg2.png';
import Card from './cart';
import axios from 'axios';

const Main=()=>{
  const[search,setSearch]=useState('');
  const[bookData,setData]=useState([]);
  const searchBook=(evt)=>{
    if(evt.key==='Enter')
    {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCAR2nrmjya4Eq8pzDQa-CEbb8Ksd6RkxA'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
    return(
        <>
          <div className='header'>
            <div className='row1'>
            <h1>A room without books <br/>a body without soul.</h1>
            </div>
            <div className='row2'>
              <h2>Find your book</h2>
              <div className='search'>
                <input type='text' placeholder='Enter your book name' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                <button><i className="fa fa-search" aria-hidden="true"></i></button>
              </div>
              <img src={books}></img>
            </div>
          </div>
          <div className='container'>
          {
             <Card book={bookData}/>
          }
          </div>
        </>
    )
}
export default Main;