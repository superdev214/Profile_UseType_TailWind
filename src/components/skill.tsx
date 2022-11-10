/**
 * Progress bar animation Component
 */
 import React from 'react';
 // import 'bootstrap/dist/css/bootstrap.css';
 // import ProgressBar from 'react-bootstrap/ProgressBar';
 import ProgressBar from "@ramonak/react-progress-bar";
 const Skill = (props:any) => {
  
   const [countOfProgess, setCountOfProgess] = React.useState<any>(0);
  
   React.useEffect(() => {
     const timer = setInterval(() => {
       setCountOfProgess((oldProgress: number) => {
         if(oldProgress >= props.target - 1)
             clearInterval(timer);
         return oldProgress + 1;
       });
     }, 50);
  
     return () => {
       clearInterval(timer);
     };
   }, []);
  
   return (
   
      <div className="w-[100%] p-0" >
      <span className="text-white">{props.title}:</span>
      <span className="float-right text-white"> {parseInt(countOfProgess)} %</span>
       <ProgressBar completed={countOfProgess} bgColor="#18d26e" labelColor='#18d26e'/>
       {/*  */}
     </div>
   );
 }
 export default Skill;