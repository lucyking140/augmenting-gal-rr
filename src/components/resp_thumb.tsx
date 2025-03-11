import * as React from "react";
//import { Link } from "wouter"; //TODO: getting an error the useParams and other hooks don't exist in wouter?
import { Link, useParams } from "wouter";

import resps from "../resps.json";
import { useCounter } from '../hooks/useCounterContext';

// Component that composes response thumbnail on the home page
// represents basic response, not the top response for the current week
// used for "all responses" and "readers' favorites"

// param: a response object from responses.json

export default function RespThumbnail(response: any) {
  
  const resp = response.resp;
    
  return(
      <div className="response" id="response">
        <Link to={`/response/${resp.id}`} >
          
          <div className="resp-img">
            <img src={resp.coverImg} /> 
          </div>
          
          <div className="resp-info-box">
            <div className="week-num">
              {resp.id}.
            </div>

            <div className="resp-title-date-box">
              <div className="resp-title">
                   {resp.title}
              </div>
              <div className="resp-date">
                   {resp.date}
              </div>
            </div>
          </div>
        </Link>
      </div>      
  );
  
};

