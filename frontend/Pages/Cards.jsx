import './Cards.css'
import { Link } from "react-router-dom"

const Cards = (props) => {
  return (
    <>
      <div className='card-structure'>
        <div id="cards">
          <div id='comp-logo'>
            <div>
              <img src={props.url} id='logo' />
            </div>
          </div>
          <div id='comp-name'>
            <div>
              {props.name}
            </div>
          </div>
          <div id='comp-des'>
            <div>
              {props.content}
            </div>


          </div>
          <div>
            <center>
              <Link to="/view-jobs"><button>View Jobs</button></Link>
            </center>

          </div>
        </div>
      </div>


    </>
  )
}

export default Cards