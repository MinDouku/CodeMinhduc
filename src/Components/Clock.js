import React, { useState, useEffect } from "react";
import './Clock.css'

function formatDate(date){
     if(!Date) return '';
     
     const hours = `0${date.getHours()}`.slice(-2);
     const minutes= `0${date.getMinutes()}`.slice(-2);
     const seconds = `0${date.getSeconds()}`.slice(-2);

     return `${hours}:${minutes}:${seconds}`

 }
function LocationCalcTime(offset){
     let date = new Date();
     let utc = date.getTime() + (date.getTimezoneOffset()*60000);
     let newDate = new Date(utc + (offset * 3600000));
     return newDate;
 }
const CalcTime = props =>{
     const [location, utc] = props.locationTime;
     const [timeString, setTimeString] = useState(
         formatDate(LocationCalcTime(utc))
     );
     useEffect(()=>{
        setInterval(() => {
           setTimeString(formatDate(LocationCalcTime(utc)))
        }, 1000);

        return setInterval;

     },[]);
     return(
        <>
            <div className="calcTime">
                <p className="location">{location}</p>
                <p className='timeString'>{timeString}</p>
            </div>
        </>
     );
 }
 export default CalcTime;