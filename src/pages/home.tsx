import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";

import RespThumbnail from "../components/resp_thumb";

// import HorizontalSlider from 'react-horizontal-slider';
// import Slider from "react-slick";


// JSON object containing all content of all responses
import resps from "../resps.json";

import { useCounter } from '../hooks/useCounterContext';


/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home(like_count: number) {
  
  let mostRecent = 7 // current number of responses shown
  
  let parsedResps = JSON.parse(JSON.stringify(resps)).responses  
  
  parsedResps.map((resp) =>{
    resp.coverImg = resp.images[0].img
  });
    
  // managing total like count 
  const { likeCount, likedResps, isRespLiked } = useCounter();
  
  // getting all responses and corresponding info from resps json
  const content = parsedResps.map((resp) => {
        // all responses except the most recent one, which will be featured on the front
        if(parseInt(resp.id) < mostRecent){
          return(<RespThumbnail resp = {resp}> </RespThumbnail>)
        }
      }        
    );
  
  // list of all responses that have been liked by some user
  const favorites = parsedResps.map((resp) => {
    if(isRespLiked(resp.id)){
      return(<RespThumbnail resp = {resp}> </RespThumbnail>)
    }
  });
  
  // most recent response to put at the top of the page
  const topResp = parsedResps[mostRecent - 1];
      
  return (
    <div className="container">
      <div className="title-header">
          <div className="title">
             Lucy's Reading Responses
          </div>
        
          <div className="subtitle">
            Augmenting the Gallery, Spring 2025
          </div>
        
          <div className="subtitle" style={{paddingTop: '15px'}}>
            <Link to={`/project-ideas`}> <button> Project Ideas </button> </Link>
          </div>
        
        {/*<div className="header-links">
            <a href="https://github.com/lucyking140"> 
              <div className="side-link"> My Github </div>
            </a>
            <a href="https://github.com/periode/augmenting-gallery"> 
              <div className="side-link"> Class Github </div>
            </a>
          </div>*/}
      </div>
              
        <div className="resp-container">
        
          <div className="desc">
            This Week
          </div>

          <div className="hl"></div>

              <Link to={`/response/${mostRecent}`} className="top-resp">
                  
                  <div className="week-num">
                    {mostRecent}.
                  </div>
                
                  <div className="resp-title-date-box">
                      <div className="resp-title">
                        {topResp.title}
                      </div>
                      <div className="resp-subtitle">
                         {topResp.subheading}
                      </div>
                      <div className="resp-date">
                         {topResp.date}
                      </div>
                  </div>
                
                  <div className="resp-img">
                    <img src={topResp.coverImg} /> 
                  </div>

                {/*<div className="top-resp-pad"> </div>*/}
              </Link>
          
          <div className="desc">
            Readers' Favorites
          </div>

          <div className="hl"></div>

          <div className="bottom-resp">
             {favorites} 
          </div>

          <div className="desc">
            All Previous Responses
          </div>

          <div className="hl"></div>

          <div className="bottom-resp">
             {content} 
          </div>
          
          
        </div>   

      {/*    
      
      
      <div>
         <Link to={`/hypertext`}>
            <button> Hypertext </button>
          </Link>
      </div>
      
      <Slider {...slider_settings}>
        {content}
      </Slider>
      
      
      
      <div className = "desc">
        <p>
           Each box below links to my weekly reading response.
        </p>

      </div> 
      
      <HorizontalSlider
         title="Menu 1"
         data={testdata}
         height={300}
         width={300}
         id={1} 
         />
      
      */}
      

    </div>
  );
}
