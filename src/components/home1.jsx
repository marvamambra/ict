import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Women from './women';

const Home1 = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/') 
  }

  const men = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/menpage') 
  }

  const women = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/w') 
  }

  const kids = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/k') 
  }

  const sandals = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/s') 
  }

  const slippers = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/sl') 
  }

  const heels = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/h') 
  }



  return (
  <div>
    <div style={{justifyContent:'space-between',display:'flex',alignContent:'center',backgroundColor:'lightgray',alignItems:'center',height:'90px',gap:'50px'}}>
      <img src='logo1.jpeg' style={{height:'90px',width:'150px'}}></img>
      <button>Home</button>
      <button>Shop</button>
      <button>Cart</button>
      <button onClick={signout}>Sign Out</button>
      <div></div>
    </div>

    
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4 onClick={men}>Men</h4>
        <img src='men.jpg' style={{height:'200px',width:'250'}}></img>

      </a>
      <a href='#'>
        <h4 onClick={women}>Women</h4>
        <img src='women.jpeg' style={{height:'200px',width:'450'}}></img>

      </a>
      <a href='#'>
        <h4 onClick={kids}>Kids</h4>
        <img src='kid.jpeg' style={{height:'200px',width:'450'}}></img>

      </a>
      <a href='#'>
        <h4  onClick={sandals}>Sandals</h4>
        <img src='sandals.jpeg' style={{height:'200px',width:'250'}}></img>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4 onClick={slippers}>Slippers</h4>
        <img src='slipper2.jpeg' style={{height:'200px',width:'250'}}></img>

      </a>
      <a href='#'>
        <h4  onClick={heels}>Heels</h4>
        <img src='heels.jpeg' style={{height:'200px',width:'250'}}></img>

      </a>
      <a href='#'>
        <h4>Boots</h4>
        <img src='boot.jpeg' style={{height:'200px',width:'250'}}></img>

      </a>
      <a href='#'>
        <h4>Wedges</h4>
        <img src='wedges.jpeg' style={{height:'200px',width:'250'}}></img>

      </a>


    </div>

    
      
  </div>



  );
};

export default Home1;