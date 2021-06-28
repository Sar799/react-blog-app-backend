import React from 'react'
import './../styles/page.css'
import Logo4 from './../images/Technology/t1.jpg'
import Logo1 from './../images/Technology/reactanimation.png'
import Logo2 from './../images/Technology/reactjscode.png'
import Logo3 from './../images/Technology/t2.jpg'
import Logo5 from './../images/Technology/t3.jpg'
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import timage from './../images/Technology/twitter image.jpg'
import fimage from './../images/Technology/fblogo.png'
import image from './../images/Technology/iglogo1.jpg'
import yimage from './../images/Technology/youtubelogo.png'
import uimage from './../images/Technology/urlogo.png'


function Technology(props){
return(

<>   
        
 {
 props.courselist.map(item=>(
 <>
 <div id="fourtyeight">
 <div className="two">
            <h1><div className="the">The </div>Siren</h1>
            </div>
 <Link to="/bollywoodcopy" id="nav">
 <p id="fourtynine">Get Started</p>
 </Link>
 </div>
 
<Link to="/bollywoodcopy" id="color">
 <div className="main5">
 <h1>{item.reactheading}</h1>

   <div id="fiftyone">
   <img  src={uimage} id="fiftytwo"/>
   <div>
   <p id="sixtynine">Dmitry Nazahenko</p>
   <div id="fiftythree">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>

 <Link to="/bollywoodcopy">
 <div id="fiftyfour">
   <img src={fimage} id="fiftyfive"/>
   <img src={image} id="fiftyfive"/>
   <img src={timage} id="fiftyfive"/>
   <img src={yimage} id="fiftyfive"/>
 </div>
 </Link>


 </div>

   </div>
   </div>

 <img  src={Logo1} id="fifty"/>
 <p>{item.reactdes}</p>

 <h3>Let's talk about them</h3>
 <img  src={Logo2} id="fifty"/>

 <div id="fiftysix">
   <p id="fiftyseven">React</p>
   <p id="fiftyseven">Javascript</p>
   <p id="fiftyseven">Animation</p>
 </div>

<div id="fiftyeight">
 <img  src={uimage} id="fiftytwo"/>
 <div>
   <p id="fiftynine">Written By</p>
   <p id="sixty">Dmitry Nazahenko</p>
   <p id="sixtyone">Jan,25 2019 18 min read</p>
 </div>
</div>
</div>
<div>
 </div>

 <div className="main6">
 <h3>More From the Siren</h3>
   <div className="main7">

  <div id="sixtythree">
    <p id="sixtysix">Also tagged react js</p>
    <img src={Logo4} id="sixtyseven"/>
    <h3>{item.technologyheading}</h3>
    <div id="sixtyeight">
    <img  src={uimage} id="fiftytwo"/>
   <p id="sixtynine">Dmitry Nazahenko</p>
 </div>
 <p id="seventy">August 10 4 min read</p>
  </div>


<div id="sixtyfour">
  <p id="sixtysix">Related Reads</p>
  <img src={Logo3} id="sixtyseven"/>
  <h3>{item.technologyheading}</h3>
    <div id="sixtyeight">
    <img  src={uimage} id="fiftytwo"/>
   <p id="sixtynine">Dmitry Nazahenko</p>
 </div>
 <p id="seventy">August 10 4 min read</p>
</div>

<div id="sixtyfive">
<p id="sixtysix">Related Reads</p>
<img src={Logo5} id="sixtyseven"/>
<h3>{item.technologyheading}</h3>
    <div id="sixtyeight">
    <img  src={uimage} id="fiftytwo"/>
   <p id="sixtynine">Dmitry Nazahenko</p>
 </div>
 <p id="seventy">August 10 4 min read</p>

  </div>


   </div>
 </div>
 </Link>







 </>
))

}
</>
);
}
export default Technology;