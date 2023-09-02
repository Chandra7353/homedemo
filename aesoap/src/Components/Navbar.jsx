import { Link, } from "react-router-dom";

const Navbar = () => {

    return (
       
    <div  >
         <div className="headline">
    <p>Trained Aesop consultations are available to provide bespoke skin care advise.   <a href="">Book a video consultation</a> </p> 
</div>

<div className="secondline">
    <a href=""> Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400  + </a>

</div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
   
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Skin Care</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Body & Hand</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hair</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Fragrance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kits & Travel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gifts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Read</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Facial Appointments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class='bx bx-search'></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cabinet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>
        
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
   

{/* 
<nav>
<div className="mainnav">
        <div className="firstnav">
        <div>
            <Link >Skin Care</Link>
        </div>
        <div>
            <Link >Body & Hand</Link>
        </div>
        <div>
            <Link >Hair</Link>
        </div>
        <div>
            <Link >Fragrance</Link>
        </div>
        <div>
            <Link >Home</Link>
        </div>
        <div>
            <Link >Kits & Travel</Link>
        </div>
        <div>
            <Link >Gifts</Link>
        </div>
        <div>
            <Link >Read</Link>
        </div>
        <div>
            <Link >Stores</Link>
        </div>
        <div>
            <Link >Facial Appointments</Link>
        </div>
        <div>
            <Link><i class='bx bx-search'></i></Link>
        
        </div>

        </div>
    <div className="secondnav">
    <div>
            <Link >Log in</Link>
        </div>
        <div>
            <Link >Cabinet</Link>
        </div>
        <div>
            <Link >Cart</Link>
        </div>
    </div>
    </div>
    </nav> */}
    </div>
    
    );
}

export default Navbar;