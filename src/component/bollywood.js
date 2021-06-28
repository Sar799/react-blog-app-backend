import React from 'react'
import './../styles/page.css'
import Logo1 from './../images/Bollywood/b1.jpg'
import Logo2 from './../images/Bollywood/b2.jpg'
import Logo3 from './../images/Bollywood/b3.webp'
import Logo4 from './../images/Bollywood/b4.jpg'
import Logo5 from './../images/Bollywood/b5.jpg'
import Logo6 from './../images/Bollywood/b6.jpg'
import Logo7 from './../images/Bollywood/b7.jpg'
import Logo8 from './../images/Bollywood/b8.jpg'
import Logo9 from './../images/Bollywood/b9.jpg'
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
function Home(props){
  console.log(props)
return(

<>   
        
 {
 props.courselist.map(item=>(
 <>
   <div className="two">
            <h1><div className="the">The </div>Siren</h1>
            </div>
   <div className="three">
          <Route>
        <Link to="/" id="fourtysix">Home</Link>
        <Link to="/bollywoodcopy" id="fourtysix">Bollywood</Link>
        <Link to="/technologycopy" id="fourtysix">Technology</Link>
        <Link to="/hollywoodcopy" id="fourtysix">Hollywood</Link>
        <Link to="/fitnesscopy" id="fourtysix">Fitness</Link>
        <Link to="/foodcopy" id="fourtysix">Food</Link>
        </Route>
        </div>
 <div className="main4">
<div className="main3">

<Link to="/bollywoodcopy" id="color">
<p id="fourteen">Latest Articles</p>
</Link>

<Link to="/foodcopy" id="color">
<div className="seven">
<img src={Logo1} id="thirteen"/>
<div id="fifteen">
 <h3>{item.bheading}</h3>
 <p>{item.bheadingdescription}</p>
 <div id="shift">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>


<img src={Logo2} id="eighteen"/>
<div id="ninteen">
 <h3>{item.bheading}</h3>
 <p>{item.bheadingdescription}</p>
 <div id="shift">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo3} id="twenty"/>
<div id="twentytwo">
 <h3>{item.bheading}</h3>
 <p>{item.bheadingdescription}</p>
 <div id="shift">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo4} id="twentyone"/>
<div id="twentythree">
 <h3>{item.bheading}</h3>
 <p>{item.bheadingdescription}</p>
 <div id="shift">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>


<div id="twentyfour">
  <h1 id="twentyfive">Advertisment</h1>
</div>
<div id="twentyseven">
<div>Top </div>
<div id="space">Posts</div>
</div>
<img src={Logo5} id="twentysix"/>
</div>


<div className="eight">
  <img src={Logo6} id="twentyeight"/>

  <div id="twentynine">
<h3>{item.bheading}</h3>
<div id="sixteen">
<p id="eleven">{item.job}</p>
<p id="twelve">{item.date}</p>
</div>
</div>

<div id="thirty">
<img src={Logo7} id="thirtythree"/>
</div>
<div id="thirtyfour">
<h4>{item.bheading}</h4>
<div id="extra">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>


<div id="thirtyone">
<img src={Logo8} id="thirtyfive"/>
</div>
<div id="fourtyone">
<h4>{item.bheading}</h4>
<div id="extra">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>




<div id="thirtytwo">
<img src={Logo9} id="thirtyseven"/>
</div>
<div id="fourtytwo">
<h4>{item.bheading}</h4>
<div id="extra">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>






</div>
</Link>
</div>
</div>
 </>
))

}

</>
);
}
export default Home;