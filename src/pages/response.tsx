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
  let likeIcon = isRespLiked(id_num) ? "https://cdn.glitch.global/85701763-95d4-4e0a-9eaa-56b66f30513b/icons8-gefa%CC%88llt-mir-50-fill.png?v=1741344550834" : "https://cdn.glitch.global/85701763-95d4-4e0a-9eaa-56b66f30513b/icons8-gefa%CC%88llt-mir-50.png?v=1741344504022";
  
  let parsedResps = JSON.parse(JSON.stringify(resps))
  let resp = parsedResps.responses[id_num-1];  
  // console.log(resp);
  let imgs = resp.images;
    
  const images = imgs.map((img) =>
        <div className="rp imgbox">
          <img
            className="rp center-fit"
            src={img.img}
          />     
          <div className="rp imgcap">
              {img.cap}
          </div>
        </div>               
    );
  
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