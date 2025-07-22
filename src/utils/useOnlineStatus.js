import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {

    const [OnlineStatus,setOnlineStatus] =useState(true);
    useEffect(()=>{

        window.addEventListener("offline", () => {

            setOnlineStatus(false);

        });
       window.addEventListener("Online", () => {

             setOnlineStatus(true);

        });

    },[]);
    

    return OnlineStatus;
}

export default useOnlineStatus;
