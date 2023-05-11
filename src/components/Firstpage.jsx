import './Firstpage.css';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-scroll';

function Firstpage() {
  return (
    <>
    <div className='containerFirstpage'>
        <div className="containerTextFirstpage">
          <div className='nameFirstpage'> I'm Malin Wallander </div>
          <div className="titleFirstpage">Frontend developer</div>
        </div>
        <Link to="welcome" spy={true} smooth={true}>
        <FaAngleDoubleDown className='arrowDown'/>
        </Link>
        </div>
    </>
  );
}
export default Firstpage;
