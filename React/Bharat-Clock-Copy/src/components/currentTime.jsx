import { useEffect, useState } from "react";

let CurrentTime = () =>{
  const [time, setTime] = useState(new Date);
  useEffect(()=>{
    console.log("Interval has been Setup");
    const IntervalId = setInterval(()=>{
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(IntervalId);
      console.log("Cancel the interval");
    }
  }, []);


  return (
    <p className="lead"> This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p> 
    /*toLocaleDateString : is used for convert date into string bevause time is not working */
  );
};
export default CurrentTime; 