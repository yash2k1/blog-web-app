import React from 'react'

import './PagesHocStyle.css'
import Navbar from '../Header/Navbar';
import TopStories from '../Sections/TopStories';
import TopPost from '../Sections/TopPost';

 
const PagesHoc = () => {
  const Hoc=(props)=>{
    
    return (
      <>
  <Navbar/>
    <div className='PagesHoc' id='PagesHoc'>
  <div className="topStoriesPage">
    <span className='TopStoriesPageSpan' >{props.name}</span>
  <TopStories initialIds={props.initialIds}/>
  </div>
<div className="TopPostPage">
<span >TopPost</span>
<TopPost initialIds={props.initialIds}/>
<img className="adv" style={{objectFit:"contain" ,height:"300px"}} alt="not found"src="https://image.adsoftheworld.com/y87w2iq3pchn44hoxl174qsdns4n"/>

</div>
    </div>
</>
  )
  }
  return Hoc;

}
export default PagesHoc;
