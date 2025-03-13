import * as React from "react";
import { Link } from "wouter";


export default function ProjectPlanning() {

  return (
    <div className="rp container" style={{alignItems: 'flex-start'}}>
       
        <div className="header-row" style={{paddingBottom: '20px', paddingTop: '30px'}}>
                
            <div className="rp title">
                Project Planning
            </div>
            
            <Link to="/">
                <button>Back</button>
            </Link>
            
        </div>

        <div className="rp content" style={{alignItems: 'flex-start'}}>

            <div className="rp subtitle" style={{ fontWeight: '700', paddingBottom: '15px' }}>
                <a href="https://www.figma.com/design/wzVRM9ULgL2GLVV5rvMA6A/Our-Machines?node-id=0-1&p=f&t=UU6HdqmLjqIYFapJ-0" target='_blank'> View wireframe here </a>
            </div>

            <div className="rp subtitle" styel={{ fontWeight: '700'}}>
                Reference Sites
            </div>
            <div className="hl"> </div>
            <div className="idea-list">
                <ul>
                    <li>
                        <a href="https://extraordinarythings.co/?ref=minimal.gallery" target="_blank"> Lots of objects featured prominently that you can click to make larger; feeling of a wall of objects </a>
                    </li>
                    <li>
                        <a href="https://beetle.we-rad.com/" target="_blank"> 3D objects moving on scroll (or just at all)</a>
                    </li>
                    <li>
                        <a href="https://thebanshies.com/fr?ref=minimal.gallery" target="_blank"> fonts/simplicity, subtle scroll animations, also like the concatenated images for the bios but its probably not very usable </a>
                    </li>
                    <li>
                        <a href="https://studioboum.com/en?ref=minimal.gallery" target="_blank"> for simple design that is still readable with a background image (e.g. if I let users change the background image). Also very simple blank-page design  </a>
                    </li>
                    <li>
                        <a href="https://sucukundbratwurst.de/" target="_blank"> Rotating 3d objects </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
