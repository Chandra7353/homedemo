import Navbar from "./Navbar";
import Banner from '../Assets/banner.jpg'
import Brown from '../Assets/soapbrown.webp'
import White from "../Assets/soapwhite.jpg"
import Artical from '../Assets/AesopArticle.jpg'
import Syrup from "../Assets/syrup.png"
import Tube from "../Assets/tube.webp"
import Poo from "../Assets/aesopprop.jpg"
import Drop from "../Assets/drop.jpg"
import Cup from "../Assets/cup.jpg"
import HKstore from "../Assets/HKStore.jpg"
import Fashion from "../Assets/FashionWalk.jpg"
import MOKO from "../Assets/AesopMOKO.jpg"


import {Link} from "react-router-dom"
import Footer from "./Footer";
 const Home = () => {
    return ( <div className="mainhome" >
        <Navbar/>
        <div className="secondhome" >
            <img src={Banner} alt="Loading" />
            <div className="heddingtext ">
            <div className="logo">   
                <h1>Aesop</h1>
            </div>

            <div className="headding" >
                <p>Bar Soaps</p>
                <h1>A body care classic, reimagined </h1>
                <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits. </p>
                <div className="arrow">
                <button> Discover Bar Soaps <i class='bx bx-right-arrow-alt'></i>  </button> 
                
                    </div> 
            </div>
            </div>
           
        </div>

        <div className="soapcover" >
            <div className="content" >
                <p>For the body</p>
                <h1>An expression of care</h1>
                <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
                <div className="contentarrow" >
                <Link>See all Body Care  </Link> <i class='bx bx-right-arrow-alt'></i>
                    </div>
            </div>

             <div className="brownimage" >
                <img src={Brown} alt="" />
                <h4>Nature Bar Soap</h4>
                <p>Offers a mild yet effective cleanse</p>

             </div>
             <div className="whiteimage">
                <img src={White} alt="" />
                <h4>Polish Bar Soap</h4>
                <p>Thoroughly cleanses and effective cleanse</p>

             </div>
             
        </div>

        <div className="Athenaeum">
                <div className="Athenaeumtext" >
                    
                    <p>The Athenaeum</p>
                    <h1>The warm-up</h1>
                    <p>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
                    <div className="readbutton" >
                        <button>Read more <i class='bx bx-right-arrow-alt'></i> </button>
                    
                    </div>
                    
                </div>
                <div>
                    <img src={Artical} alt="" />
                </div>
            
        </div>



        <div className="Skinproduct" >
            <div className="skincontent" >
                <p>For the skin</p>
                <h1>Attention for all types</h1>
                <p>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                <Link>See all Skin Care  <i class='bx bx-right-arrow-alt'></i></Link>
            </div>

             <div className="syrupimage" >
                <img src={Syrup} alt="" />
                <h4>Lucent Facial Concentrate</h4>
                <p>A Vitamin C-rich layering serum</p>

             </div>
             <div className="tubeimage">
                <img src={Tube} alt="" />
                <h4>Purifying Facial Cream Cleanser</h4>
                <p>A daily cream cleanser for dry skin</p>

             </div>
             
        </div>


        <div className="Aesoppoo">
                
                <div>
                    <img src={Poo} alt="" />
                </div>
                <div className="Aesoppootext" >
                    
                    <h1>Post-Poo Drops has returned</h1>
                    <p>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
                    <button>Discover Post-Poo Drops <i class='bx bx-right-arrow-alt'></i></button>
                </div>
            
        </div>


        <div className="homeproduct" >
            <div className="homecontent" >
                <p>For the home</p>
                <h1>Domestic pleasures</h1>
                <p>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
                <Link>See all Home <i class='bx bx-right-arrow-alt'></i> </Link>
            </div>

             <div className="dropimage" >
                <img src={Drop} alt="" />
                <h4>Post-Poo Drops</h4>
                <p>A botanical bathroom deodoriser</p>

             </div>
             <div className="candleimage">
                <img src={Cup} alt="" />
                <h4>Aganica Aromatique Candle</h4>
                <p>Cardamom, Mimosa, Tobacco </p>

             </div>
             
        </div>


        <div className="store">
                
                
                <div className="storetext" >
                    
                    <h1>Store locator</h1>
                    <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.  </p>
                    <button>Find a nearby store <i class='bx bx-right-arrow-alt'></i></button> 
                </div>
                <div className="bootimage" >
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={HKstore} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={Fashion} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={MOKO} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            
        </div>


        <div className="AesopMOKO">
            <h1>‘Life never becomes a habit to me. It's always a marvel.’</h1>
            
            <p>Katherine Mansfield</p>

        </div>
        
       <Footer/>
    </div> );
}
 
export default Home;