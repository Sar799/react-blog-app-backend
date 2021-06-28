import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Thimage from './../images/Fitness/3hline.png';
import Logo1 from './../images/Fitness/ft1.jpg'
import Logo2 from './../images/Fitness/ft2.jpg'
import Logo3 from './../images/Fitness/ft3.webp'
import Logo4 from './../images/Fitness/ft4.jpg'
import Logo5 from './../images/Fitness/ft5.jpg'
import Logo6 from './../images/Fitness/ft6.jpg'
import Logo7 from './../images/Fitness/ft7.jpg'
import darrow from './../images/downwordarrow.png'


function Hollywood(props){
    console.log(props);
    return(
        <>

{
 props.courselist.map(item=>(
     <>
     <div className="main8">

         <div id="seventyone">
         <p id="seventytwo ">The Siren</p>
         <NavLink to="/bollywoodcopy">
         <img src={Thimage} id="seventythree"/>
         </NavLink>
         <hr id="seventyfour"></hr>
         </div>


<div className="main9">
         <p id="seventyfive">Fitness</p>
         <hr id="seventysix"></hr>


<div className="main10">
    <Link to="/" id="color">
< img src={Logo1} id="seventyseven"/>
</Link>
<div id="seventyeight">
<h4 id="seventynine">{item.fitnessheading}</h4>
    <p id="eighty">{item.fintessheadingdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
<Link to="/foodcopy" id="color">
< img src={Logo2} id="seventyseven"/>
</Link>
<div id="seventyeight">
<h4 id="seventynine">{item.fitnessheading}</h4>
    <p id="eighty">{item.fintessheadingdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
<Link to="/bollywoodcopy" id="color">
< img src={Logo3} id="seventyseven"/>
</Link>
<div id="seventyeight">
<h4 id="seventynine">{item.fitnessheading}</h4>
    <p id="eighty">{item.fintessheadingdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<Link to="/" id="color">
<div className="main10">
<p id="eightyfour">LOAD MORE</p>
<img src={darrow} id="ninty"/>
<p id="eightyfive">Top Posts</p>
<hr id="nintyone"></hr>
< img src={Logo4} id="eightyseven"/>
<p id="eightyeight">{item.fitnessheading}</p>
<div id="nintytwo">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>


</div>
</Link>
<hr id="eightythree"></hr>

<Link to="/technologycopy" id="color">
<div className="main10">
< img src={Logo5} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.fitnessheading}</h4>
    <p id="eighty">{item.fintessheadingdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
</Link>
<hr id="eightythree"></hr>

<Link to="/" id="color">
<div className="main10">
< img src={Logo6} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.fitnessheading}</h4>
    <p id="eighty">{item.fintessheadingdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
</Link>
<hr id="eightythree"></hr>

<Link to="/" id="color">
<div className="main10">
< img src={Logo7} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.fitnessheading}</h4>
    <p id="eighty">{item.fintessheadingdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
</Link>
<hr id="eightythree"></hr>




</div>



     </div>





      </>
 )
 )
}
</>
    )
}
export default Hollywood;
