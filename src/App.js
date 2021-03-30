import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './src/App.css';
import Stock from './src/stock';

function App() {
  const [state, setstate] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setstate(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredstate = state.filter(stock =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    
    <div className='stock-app'>
        <div className='stock-row'>
            <div className='cardstyle'>
                <div className='card'><h3>GOOGL</h3>
            <img  width='120' height='60' src='https://blog.hubspot.com/hubfs/image8-2.jpg' alt="random"/>
            </div>
            <h1>1515 USD</h1>
            </div>
            
            <div className='cardstyle'>
                <div className='card'><h3>FB</h3>
            <img  width='60' height='60' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf90Z2lNhPYPxuFZzSgVC9bmHioUVrw96Yg&usqp=CAU' alt="random"/>
            </div>
            <h1>266 USD</h1>
            </div>
            <div className='cardstyle'>
                <div className='card'><h3>AMAZN</h3>
            <img  width='80' height='60' src='https://www.askgalore.com/wp-content/uploads/2020/08/amazon-icon-amazon-logo-png-icon.png' alt="random"/>
            </div>
            <h1>3116 USD</h1>
            </div>
            </div>
      <div className='stock-search'>
       
        <form className='stock-text'>
        <h1 className='heading'>Stock Details Table &nbsp;&nbsp;&nbsp;</h1>
          <input
            className='stock-input'
            type='text'
            onChange={handleChange}
            placeholder='Search by company name'
          />
        </form>
      </div>
      <li className='stock-row' >
      <ol><h3>Company Name</h3></ol>
      <ol><h3>Symbol</h3></ol>
      <ol><h3>Market Cap</h3></ol>
      <ol><h3>Current Price</h3></ol>
    </li>
      {filteredstate.map(stock => {
        return (
          <Stock
            key={stock.id}
            name={stock.name}
            price={stock.current_price}
            symbol={stock.symbol}
            marketcap={stock.total_volume}
            
          />
        );
      })}
     
    </div>
  );
}

export default App;
