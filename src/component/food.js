import React from 'react'
import './../styles/page.css'
import Logo1 from './../images/Food/f1.jpg'
import Logo2 from './../images/Food/f4.jpg'
import Logo3 from './../images/Food/f3.jpg'
import Logo4 from './../images/Food/f2.jpg'
import Logo5 from './../images/Food/f5.jpg'
import Logo6 from './../images/Food/f6.jpg'
import Logo7 from './../images/Food/f7.jpg'
import Logo8 from './../images/Food/f8.jpg'
import Logo9 from './../images/Food/f9.jpg'
import Logo10 from './../images/Food/f10.jpg'
import Logo11 from './../images/Food/f11.jpg'
import Logo12 from './../images/Food/f12.jpg'
import Logo13 from './../images/Food/f13.jpg'
import Logo14 from './../images/Food/f14.jpg'
import Logo15 from './../images/Food/f15.jpg'
import {NavLink,Link} from 'react-router-dom'
import {Route,BrowserRouter} from 'react-router-dom'
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
        <img src={Logo1} id="one"/>
       
        <img src={Logo2} id="two"/>
        <img src={Logo3} id="three"/>
        </div>
        </Link>
 {
 props.courselist.map(item=>(
 <>
<div className="main2">
<p id="fourteen">The Latest</p>

  <div className="six">
<Link to="/technologycopy" id="color">
 <img id="four" src={Logo4}/>
 </Link>
 <div id="seven">
 <h3>{item.fastfoodheading}</h3>
 <p>{item.fastfoodheadingdescription}</p>
 <div id="ten">
 <p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>
 <Link to="/fitnesscopy" id="color">
 <img id="five" src={Logo5}/>
 </Link>
 <div id="eight">
 <h3>{item.fastfoodheading}</h3>
 <p>{item.fastfoodheadingdescription}</p>
 
 <div id="ten">
 <p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>

 </div>
 <Link to="/" id="color">
 <img id="six" src={Logo6}/>
 <div id="nine">
 <h3>{item.fastfoodheading}</h3>
 <p>{item.fastfoodheadingdescription}</p>
 <div id="ten">
 <p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>
 </Link>
</div>
<Link to="/hollywoodcopy" id="color">
<p id="fourteen">Latest Articles</p>
<hr id="only"></hr>
</Link>

<Link to="/" id="color">
<div className="seven">
<img src={Logo7} id="thirteen"/>
<div id="fifteen">
 <h3>{item.icecreamheading}</h3>
 <p>{item.icecreamdescription}</p>
 <div id="sixteen">
<p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>
<Link to="/bollywoodcopy" id="color">
<img src={Logo8} id="eighteen"/>
</Link>
<div id="ninteen">
 <h3>{item.icecreamheading}</h3>
 <p>{item.icecreamdescription}</p>
 <div id="sixteen">
<p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<Link to="/" id="color">
<img src={Logo9} id="twenty"/>
</Link>
<div id="twentytwo">
 <h3>{item.icecreamheading}</h3>
 <p>{item.icecreamdescription}</p>
 <div id="sixteen">
<p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>
<Link to="/technologycopy" id="color">
<img src={Logo10} id="twentyone"/>
</Link>
<div id="twentythree">
 <h3>{item.icecreamheading}</h3>
 <p>{item.icecreamdescription}</p>
 <div id="sixteen">
<p id="eleven">{item.update}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>


<div id="twentyfour">
  <h1 id="twentyfive">Advertisment</h1>
</div>
<Link to="/fitnesscopy" id="color">
<div id="twentyseven">
<div>Top </div>
<div id="space">Posts</div>

</div>
</Link>
<img src={Logo15} id="twentysix"/>
</div>


<div className="eight">
  <img src={Logo11} id="twentyeight"/>

  <div id="twentynine">
<h3>{item.fruitheading}</h3>
<div id="sixteen">
<p id="eleven">{item.update}</p>
<p id="twelve">{item.date}</p>
</div>
</div>

<div id="thirty">
<img src={Logo12} id="thirtythree"/>
</div>
<div id="thirtyfour">
<h4>{item.fruitheading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.update}</p>
<p id="fourty">{item.date}</p>
</div>
</div>


<div id="thirtyone">
<img src={Logo13} id="thirtyfive"/>
</div>
<div id="fourtyone">
<h4>{item.fruitheading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.update}</p>
<p id="fourty">{item.date}</p>
</div>
</div>




<div id="thirtytwo">
<img src={Logo14} id="thirtyseven"/>
</div>
<div id="fourtytwo">
<h4>{item.fruitheading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.update}</p>
<p id="fourty">{item.date}</p>
</div>
</div>

</div>
<Link to="/" id="color">
<h1>Latest Stories</h1>
<hr></hr>
</Link>
<div className="nine">

<div id="fourtythree">
<h2>{item.fruitheading}</h2>
<p>{item.blogdiscription}</p>
<div id="ten">
<p id="eleven">{item.update}</p>
<p id="tweleve">{item.tdate}</p>
</div>


</div>


<div id="fourtyfour">
<h2>{item.fruitheading}</h2>
<p>{item.blogdiscription}</p>
<div id="ten">
<p id="eleven">{item.update}</p>
<p id="tweleve">{item.adate}</p>
</div>
</div>

<div id="fourtyfive">
<h2>{item.fruitheading}</h2>
<p>{item.blogdiscription}</p>

<div id="ten">
<p id="eleven">{item.update}</p>
<p id="tweleve">{item.adate}</p>
</div>
<Link to="/" id="fourtyseven">Load More</Link>
</div>


</div>
</Link>

</div>
 </>
))

}
</div>
</div>
</>
);
}
export default Home;
