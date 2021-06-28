import React from 'react'
import './../styles/page.css'
import Logo1 from './../images/Home/image1.jpg'
import Logo2 from './../images/Home/image2.jpg'
import Logo3 from './../images/Home/image3.jpg'
import Logo4 from './../images/Home/image4.jpg'
import Logo5 from './../images/Home/image5.jpg'
import Logo6 from './../images/Home/image6.jpg'
import Logo7 from './../images/Home/image7.jpg'
import Logo8 from './../images/Home/image8.webp'
import Logo9 from './../images/Home/image9.jpeg'
import Logo10 from './../images/Home/image10.jpg'
import Logo11 from './../images/Home/image11.jpeg'
import Logo12 from './../images/Home/image12.jpg'
import Logo13 from './../images/Home/image13.jpg'
import Logo14 from './../images/Home/image14.jpg'
import Logo15 from './../images/Home/image15.jpg'
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
function Home(props){
  console.log(props)
return(

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
        
        <div className="main1">
          <div className="main">
        <Link to="/bollywoodcopy">
        <div className="five">
        <img src={Logo8} id="one"/>
       
        <img src={Logo2} id="two"/>
        <img src={Logo3} id="three"/>
        </div>
        </Link>
 {
 props.courselist.map(item=>(
 <>
 
<div className="main2">
<Link to="/bollywoodcopy" id="color">
<p id="fourteen">The Latest</p>
<hr id="only"></hr>
</Link>

  <div className="six">
  <Link to="/bollywoodcopy" id="color">
 <img id="four" src={Logo4}/>
 </Link>
 <div id="seven">
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 <div id="ten">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>
 <Link to="/hollywoodcopy" id="color">
 <img id="five" src={Logo5}/>
 </Link>

 <div id="eight">
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 
 <div id="ten">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>

 </div>
<Link to="/technologycopy" id="color">
 <img id="six" src={Logo6}/>
 <div id="nine">
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 <div id="ten">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>
 </Link>
</div>

<Link to="/Foodcopy" id="color">
<p id="fourteen">Latest Articles</p>
<hr id="only"></hr>
</Link>

<Link to="/Technologycopy" id="color">
<div className="seven">
<img src={Logo7} id="thirteen"/>
<div id="fifteen">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<Link to="/Foodcopy" id="color">
<img src={Logo1} id="eighteen"/>
</Link>
<div id="ninteen">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<Link to="/Foodcopy" id="color">
<img src={Logo9} id="twenty"/>
</Link>
<div id="twentytwo">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<Link to="/Foodcopy" id="color">
<img src={Logo10} id="twentyone"/>
</Link>
<div id="twentythree">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>


<div id="twentyfour">
  <h1 id="twentyfive">Advertisment</h1>
</div>
<Link to="/Foodcopy" id="color">
<div id="twentyseven">
<div>Top </div>
<div id="space">Posts</div>
</div>
</Link>
<img src={Logo11} id="twentysix"/>
</div>


<div className="eight">

  <img src={Logo12} id="twentyeight"/>

  <div id="twentynine">
<h3>{item.heading}</h3>
<div id="sixteen">
<p id="eleven">{item.job}</p>
<p id="twelve">{item.date}</p>
</div>
</div>

<div id="thirty">
<img src={Logo13} id="thirtythree"/>
</div>
<div id="thirtyfour">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>


<div id="thirtyone">
<img src={Logo14} id="thirtyfive"/>
</div>
<div id="fourtyone">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>



<div id="thirtytwo">
<img src={Logo15} id="thirtyseven"/>
</div>
<div id="fourtytwo">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>

</div>
<Link to="/Fitnesscopy" id="color">
<h1>Latest Stories</h1>
<hr></hr>
</Link>
<div className="nine">

<div id="fourtythree">
<h2>{item.heading}</h2>
<p>{item.bdescription}</p>
<div id="ten">
<p id="eleven">{item.tech}</p>
<p id="tweleve">{item.tdate}</p>
</div>


</div>


<div id="fourtyfour">
<h2>{item.heading}</h2>
<p>{item.bdescription}</p>
<div id="ten">
<p id="eleven">{item.style}</p>
<p id="tweleve">{item.adate}</p>
</div>
</div>

<div id="fourtyfive">
<h2>{item.heading}</h2>
<p>{item.bdescription}</p>

<div id="ten">
<p id="eleven">{item.tech}</p>
<p id="tweleve">{item.adate}</p>
</div>
<Link to="/bollywoodcopy" id="fourtyseven">Load More</Link>
</div>

</div>
</Link>

</div>
 </>
))

}
<Link to="/bollywoodcopy" id="fourtyseven">Load More</Link>
</div>
</div>
</>
);
}
export default Home;