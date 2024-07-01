
let CurrentTime = () =>{
  let time  = new Date();
  return (
    <p className="lead"> This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p> 
    /*toLocaleDateString : is used for convert date into string bevause time is not working */
  );
};
export default CurrentTime; 