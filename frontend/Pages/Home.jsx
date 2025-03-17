import Cards from './Cards'
import './Home.css'

const Home = () => {


  return (
    <>
      <div>
        <center><h1 id="top-heading">Connect. Learn. Earn</h1></center>

        <center id='h-2'>Find your dream job now</center>
      </div>

<div className='input-parent'>
      <div id='input-box'>
        <div>
          <img src="https://www.freeiconspng.com/uploads/search-icon-png-8.png" alt="" id='search-img' />
        </div>
        <div id='skills'>
          <input type="text" placeholder='Enter Skills /designation /companies' id='inp-1' />
        </div>
        <div>
          <input type="text" placeholder='select experience' id='inp-2' />
          <select name="" id="" disabled="disabled">
            <optgroup>
              <option value="1"></option>
              <option value=""></option>
            </optgroup>
          </select>
        </div>
        <div>
          <input type="text" placeholder='Enter Location' id='inp-3' />
        </div>
        <div>
          <button className='search'>Search</button>
        </div>
      </div>
</div>
<div>

        <div className="cards">
         

          <Cards name="Jio" url="https://logos-world.net/wp-content/uploads/2020/11/Jio-Logo.png" content="Software Services and Consultancy" />
          <Cards name="Airtel" url="https://logoeps.com/wp-content/uploads/2012/10/airtel-logo-vector.png" content="Software Services and Consultancy" />
          <Cards name="CorPlus Tech" url="https://corplus.com.ec/wp-content/uploads/2022/09/Mesa-de-trabajo-1.png" content="Software Services and Consultancy" />
          <Cards name="Amazon" url="https://pngimg.com/uploads/amazon/amazon_PNG6.png" content="Software Services and Consultancy" />
          <Cards name="Google" url="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" content="Software Services and Consultancy" />
        </div>
      </div>
    </>
  )
}

export default Home