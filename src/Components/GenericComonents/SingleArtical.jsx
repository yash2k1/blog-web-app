import React, { useContext, useMemo, useState } from "react";
import {  useParams , useNavigate} from "react-router-dom";
import Top from "../Header/Top";
import { NewsData } from "../Assets/NewsData";
import './SingleAritcalStyle.css'
import PostedBy from "./PostedBy";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FilterStoriesData from "../FilterStoriesData";

const SingleArtical = () => {
  const NewsArrayIndex = useParams();
  const navigate=useNavigate();//for back functionality
  const Id=NewsArrayIndex.NewsId-1;//for selecting that arr from Context API
  const data = useContext(NewsData);//form context API
  


  // for Blog in the single page
 const [wordsToShow,setWordsToShow]=useState(50);
 const TextView=()=>{
  (wordsToShow)?setWordsToShow(undefined)://increase text
  setWordsToShow(50);// decrese text
 } 
 
//  more from siren random image logic 
const RandomImg1= Math.floor(NewsArrayIndex.NewsId/15.01 )*15+Math.floor(Math.random()*14)+1

const RandomImg2= Math.floor(NewsArrayIndex.NewsId/15.01 )*15+Math.floor(Math.random()*14)+1

const RandomImg3=  Math.floor(NewsArrayIndex.NewsId/15.01 )*15+Math.floor(Math.random()*14)+1

//for back functionality
function handleBack(){
  navigate(-1);
}
// onclicking on MORE from serien


  return (
    <div>
      <div className="SingleAritcalHeader">
        <button className="SingleAritcalBack" onClick={handleBack}>
          <img className="BackImg" src="/images/arrow@2x.png" alt="not found" />
          Back</button>
        <Top />

      </div>
      <div className="middleContainer">
        <div className="clapNShare">
        <span className="clap1">
        <img className="clap1Img" src="/images/rythm@2x.png" alt="not found" />
        9.3K
          </span> 
          <span className="share">
          <img className="shareImg" src="/images/share@2x.png" alt="not found" />
          Share this article
          </span>
        </div>
      <div className="SingleAritcalBody">
    <div className="SingleAritcalHeading">{data[Id].heading}</div>
    <div className="writer">
      <PostedBy/>
      <div className="socialMedia">
        <FacebookIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
        <TwitterIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
        <InstagramIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
        <YouTubeIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
      </div>
    </div>
    <img className="SingleAritcalImage" src={data[Id].images} alt="Not Found"/>
    <div className="SingleAritcalDescription">
      {data[Id].description.split(' ').slice(0,wordsToShow).join(' ')}
     {(wordsToShow)? <div onClick={TextView} className="showMore">⬇️ Show More</div>:<div onClick={TextView} className="showLess" >⬆️ Show Less</div>}
      </div>
    <div className="writerInfo">
    <span className="clap2">
        <img className="clap1Img" src="/images/rythm@2x.png" alt="not found" />
        9.3K claps
          </span> 
    <PostedBy/>
    </div>
    
    </div>  
      </div>
    

<h2 className="MoreFromSirenTittle">More From Siren</h2>

  <div className="MoreFromSiren" >
   <FilterStoriesData type={"type6"} id={RandomImg1} key={1} />  
   <FilterStoriesData type={"type6"} id={RandomImg2} key={2} />  
   <FilterStoriesData type={"type6"} id={RandomImg3} key={3} />  
     
  </div>
   

    </div>
  );
};

export default SingleArtical;
