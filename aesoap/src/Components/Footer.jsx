import {Link} from "react-router-dom"
import Logo from '../Assets/logo.png'
const Footer= () => {
    return ( 
    <div className="Footermain">
<div className="Firstfooter">


      <div className="footercontent">
        <p>Subscribe to Aesop communications</p>
        <hr />
        <div className="textplace" >
        <input type="text" placeholder="Email address "   /><button><i class='bx bx-right-arrow-alt'></i></button>
        </div>
        
        <input type="checkbox" name="" id="" /> <span>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</span>
       
              
      </div>

      <div className="orderlist" >
        <ul>
            <li>  <p>Orders and support</p>  </li>
            <hr />
            <li><Link> Contact us</Link></li>
            <li> <Link> FAQs</Link></li>
            <li><Link>Shipping </Link></li> 
            <li><Link>Returns</Link></li>
            <li> <Link>Order history</Link></li>
            <li><Link>Terms and conditions</Link></li>
        </ul>
      </div>

      <div className="servicelist" >
       <ul>
        <li><p>Services</p></li>
        <hr />
        <li> <Link>Live assistance</Link></li>
        <li><Link>Corporate gifts</Link></li>
        <li><Link>Facial Appointments</Link></li>
        <li><Link>Click and Collect</Link></li>
        <li><Link>Video consultation</Link></li>
       </ul>     
      </div>

      <div className="locationlist" >
           <ul>
            <li> <p>Location preferences</p> </li>
            <hr />
            <li> <Link>Shipping:</Link></li>
            <li className="tagline" ><Link >Hong Kong SAR, China</Link></li>
                    <br />  

            <li><Link>Language:</Link></li>
            <li className="tagline" ><Link >English</Link></li>
            <li><Link>繁體中文</Link></li>
           </ul>      
      </div>
      </div>

     <div className="Secondfooter">

        <div className="secondcontent" >
            <p>Sustainability</p>
            <hr />
            <span>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</span>
        </div>
        <div className="aboutlist">
            <ul>
                <li><p>About</p></li>
                <hr />
                <li><Link>Our story</Link></li>
                <li><Link>Foundation</Link></li>
                <li><Link>Careers</Link></li>
                <li><Link>Privacy policy</Link></li>
                <li><Link>Accessibility</Link></li>
                <li><Link>Cookie Policy</Link></li>
            </ul>            
        </div>
        <div className="sociallist" >
            <ul>
                <li><p>Social media</p></li>
                <hr />
                <li> <Link>Instagram </Link></li>
                <li><Link>Twitter </Link></li>
                <li><Link>LinkedIn </Link></li>
                <li><Link>WeChat</Link></li>
                <li><Link>Weibo </Link></li>
            </ul>   
        </div>
        
        </div> 
        <hr className="lasthr" />
        <div className="footerlogo" >
         <h5><i class='bx bx-copyright' ></i>    Aesop</h5>
        </div>
    </div> 
    );
}
 
export default Footer;