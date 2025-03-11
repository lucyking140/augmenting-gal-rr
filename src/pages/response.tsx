import * as React from "react";
//import { Link } from "wouter"; //TODO: getting an error the useParams and other hooks don't exist in wouter?
import { Link, useParams } from "wouter";

import resps from "../resps.json";
import { useCounter } from '../hooks/useCounterContext';

export default function Response(id: any) {
  // console.log("test");
  let id_num = parseInt(id.params.week);
  
  React.useEffect(()=>{
    id_num = parseInt(id.params.week);
  });
  
   // Like count button
  const { toggleLike, isRespLiked, likedResps } = useCounter();
  
  // let likeText = isRespLiked(id_num) ? "Unlike" : "Like";
  let likeIcon = isRespLiked(id_num) ? "/icons/like-icon-filled.png" : "/icons/like-icon-unfilled.png";

  let parsedResps = JSON.parse(JSON.stringify(resps))
  let resp = parsedResps.responses[id_num-1];  
  // console.log(resp);
  let imgs = resp.images;

  const getImageUrl = (imgPath) => {
    return new URL(`../assets/${imgPath}`, import.meta.url).href;
  };
    
  const images = imgs.map((img) => {
    const imgPath = img.img;
    return(
      <div className="rp imgbox">
        <img
          className="rp center-fit"
          src={imgPath}
        />     
        <div className="rp imgcap">
            {img.cap}
        </div>
      </div>
    )
  });
  
  return (
    <div className="rp">
      
      <div className="rp container">
      
        <div className="rp title-heading">
                      
              <div className="rp title">
                { resp.title }
              </div>
              
              <div className="rp subtitle">
                { resp.subheading }
              </div>
          
              <div className="header-row">
                
                <div className="rp date">
                   { resp.date }
                </div>
                
                <div className="rp header-buttons">
                  <img className="rp like-icon" src={likeIcon} onClick={() => toggleLike(resp.id)} />
                  <Link to="/"> 
                    <button>
                       Back
                    </button>
                  </Link>
                </div>
                
          
              </div>
              
          
             <div className="rp hl"> </div>

          </div>
        
          {/* for the actual text of the page */ }
          <div className="rp content" dangerouslySetInnerHTML={{ __html: resp.text }} />
        
        <div className="rp allimgs">
              {images}
        </div>
        
      </div>
    </div>
  );
}