import * as React from "react";
import { Link } from "wouter";


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
      

      <div className="rp content" style={{alignItems: 'flex-start', width: '100%', overflow: 'wrap'}}>
        
        <div className="rp subtitle">
          Idea 1: Deutsche Bahn design catalog
        </div>
        
        <div className="hl"> </div>
        
        <div className="idea-list">
          <ul>
            <li className="header">What:</li>
              <ul>
                <li>
                  Create an collection of current train designs (primarily outside exterior design) used by DB, as an example of how design is used in public infrastructure to convey a message to its citizens
                </li>
                <li>
                  Main interface would be a live view of a selected station, showing visuals of the types of trains currently stopped in it. The idea would be to leverage the train station as a congregation of design choices, creating an artistic exhibit from an otherwise functional space.
                </li>
                <li>
                  Either on another page or as selected by the user on the live view, I could have articles for more information about the design origins and history of each train. 
                </li>
                <li>
                  These trains aren’t exactly rich with artistic vision, but I think it's interesting to explore the subtler messages in functional design. I also think it might be valuable to have an interface where multiple types of trains are present at once as they are at a station, presenting an image of the fleet as a whole.           
                  Example image:
                  <div className="rp imgbox">
                    <img
                      className="rp center-fit"
                      src="/Users/lucyking/Projects/Aug_Gal/ReadingResponses/augmenting-gal-rr/assets/icetrain.jpg"
                    />     
                  </div>   
                </li>
              </ul>
            <li className="header">Why:</li>
              <ul>
                <li>
                  I think it’s interesting to explore the choices behind the DB’s design as an example of national self-representation (or of an image of international collaboration, like the EC trains) to a public audience. Trains, which are often how those from outside of a region are first introduced to it, contain aesthetic design elements that communicate how their creator intended for them to be viewed (e.g. the logo on ICE trains is slightly italicized, which alludes to a sense of movement mirroring the portrayal of the ICEs as uniquely speedy).
                </li>
                <li>
                  They’re also an example of public design outside of architecture or websites/paper forms, which introduces a new, unique medium.
                </li>
                <li>
                The availability of the DB API is also an interesting opportunity to pull  comprehensive, real-time information that introduces a temporal element to the archive. I could also incorporate an audio element of sound recorded from a train station (or how each type of train sounds when entering a station) to make the experience more multi-sensory.
                </li>
              </ul>
            <li className="header">How:</li>
              <ul>
                <li>
                  DB has one free API that gives access to live updates on a station-by-station basis with information about incoming trains and their types. I can pull the arrival and departure times and train number from this API for free, then use that train number to identify the type of train coming in to match to an image of the specific type. I couldn’t find numbers on exactly how often the API is updated, but it does reflect relatively recent (within a minute or two) information with any changes to arrival time, track, train type, etc.
                </li>
                <li>
                  If I want to include the specific model of a given train (e.g. ICE 226 is an ICE 4 model) for display purposes, I can get train type information based on the train number by scraping it from this guy’s website (not entirely sure how verifiable this is, but it’s the only website like it I can find and everywhere else refers to it).
                </li>
                <li className="header">Limitations:</li>
                <ul>
                  <li>
                    The free version of the DB API is very rate limited to 60 calls/minute, but I don’t think that this should be a problem for the scale of the project. If I update station information every 10-ish seconds, 6 people could be on the site at once.  
                  </li>
                  <li>
                    There are many trains that come into stations from other transportation systems, e.g. regional trains come from countries all over Europe, and the exact type of train isn’t easily accessible through the DB API or any others I could find. I was planning on primarily showing the main types of trains (different ICE variations, IC, S-Bahn, etc.), then just displaying a default RE train without getting to this level of detail. 
                  </li>
                </ul>
              </ul>
          </ul>
        </div>
        
        
        
        <div className="rp subtitle">
          Idea 2: Aesthetics communicated through personal technology
        </div>
        <div className="hl"> </div>
        <div className="idea-list">
          <ul>
            <li className="header">
              What:
            </li>
            <ul>
              <li>
                I want to explore how we commandeer, customize, and decorate our personal technology, and especially how this contrasts with the design put forward by manufacturers of these products.
              </li>
              <li>
                Examples: laptop stickers, customized DSs, phone cases and charms, even screensavers and lock screens, customized terminals, light/dark mode → all of these directly contrast with the sleek, minimalist design of a company like Apple
              </li>
              <li>
                This also hasn’t historically been the case – earlier personal technology appears to incorporate a lot more color and design
              </li>
            </ul>
            <li className="header">
              Why:
            </li>
            <ul>
              <li>
                Personal technology, e.g. forms of computers that we own individually and are the primary users of (laptops, phones, smart watches, certain video game consoles, etc.), have become a new form of personal expression beyond the domain of clothes or accessories that previous generations had access to. 
              </li>
              <li>
                Exploring how these are used as a form of personal expression translates aspects of identity into a (tangentially) digital world, perhaps also hinting at ways that identity could continue to adapt to changing technologies in the future
              </li>
            </ul>
            <li className="header">
              How:
            </li>
            <ul>
              <li>
                Have a main page with a historical introduction and research information, but also allow the user to decorate the website itself by adding and moving “stickers” and changing visual features like background image/color, font (like on Androids?), etc.
              </li>
              <li>
                Maybe also it would be interesting to make this a communal project with all editors making changes to the same page? This would also serve as an actual example of how our individual preferences differ, and as an example of combining them into a (hopefully) semi-cohesive environment
              </li>
              <li>
                I think this would involve just a lot of Javascript adding options to alter styling from the user end? And some interesting visuals for how a user would be allowed to add and move stickers, but it might be quite challenging to make this process of placing stickers really seamless. 
              </li>
            </ul>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
