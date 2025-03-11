import * as React from "react";
import { Link, useParams } from "wouter";


export default function ProjectIdeas() {

  return (
    <div className="rp container" style={{alignItems: 'flex-start'}}>
      <br />

      <div className="header-row" style={{paddingBottom: '20px', paddingTop: '30px'}}>
        
        <div className="rp title">
          Preliminary Project Ideas
        </div>
        
        <Link to="/">
          <button>Back</button>
        </Link>
        
      </div>
      

      <div className="rp content" style={{alignItems: 'flex-start'}}>
        
        <div className="rp subtitle">
          Idea 1: Deutsche Bahn design catalog
        </div>
        <div className="hl"> </div>
        <p>
          Exploring the importance of visuals in DB train design as an example of public transport/infrastructure
          as a representation of a national portrayal.
        </p>
        
        
        
        <div className="rp subtitle">
          Idea 2: Exploring Bruno Taut's use of color in Berlin Modernist architecture
        </div>
        <div className="hl"> </div>
        <p>
          Catalog of the colors used in Taut's architectural style across Berlin.
        </p>
        
      </div>
    </div>
  );
}
