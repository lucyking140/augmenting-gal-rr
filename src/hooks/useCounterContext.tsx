import React, { createContext, useState, useContext, useEffect } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  
  const [likedResps, setLikedResps] = useState(() => {
    // Initialize from localStorage if available
    const savedLikes = localStorage.getItem('likedResps');
    return savedLikes ? JSON.parse(savedLikes) : [];
  });
  
  const likeCount = likedResps.length;
  
  // to preserve liked posts
  useEffect(() => {
    localStorage.setItem('likedResps', JSON.stringify(likedResps));
    // console.log("New likedResps: ", likedResps)
  }, [likedResps]);
  
  // toggling likes so there is an available unlike feature
  const toggleLike = (respId) => {
    
    const curLikes = likedResps;
    // console.log("Reaching toggleLike")
    
    if (curLikes.includes(respId)){
      // removing like if it is already liked
      const newLikes = curLikes.filter((item) => item !== respId);
      setLikedResps(newLikes);
    } else{
      // otherwise adding it
      // console.log("reaching adding like spot")
      setLikedResps([...curLikes, respId]);
    } 
  };
  
  const isRespLiked = (respId) => {
    // console.log("Resp id: ", respId, " likedResps")
    return likedResps.includes(respId);
  }
  
  return (
    <CounterContext.Provider value={{ 
      likedResps, 
      likeCount, 
      toggleLike, 
      isRespLiked
    }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);