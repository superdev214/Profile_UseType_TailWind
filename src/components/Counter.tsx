
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect} from "react";

 const  Counter = (props:any)  =>{
  const [{startValue , flag },setStartValue] = useState<{startValue: number, flag: boolean}>({startValue:0,flag:true});
 
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,

  });

   useCountUp({
    ref: "counter_" + props.index,
    start: 0,
    end: props.ed,
    enableScrollSpy: true,
    scrollSpyDelay: 1,
    separator: ",",
 
  });

  useEffect(() => {

    if (inView && flag === true) {
        setStartValue({startValue:0,flag:false});
   
        // start the count up
      } else {
        setStartValue(props.ed);
      }
  }, [inView]);

  return (
    <div className="App" ref={ref}>
      {/* <div className="content"/> */}
      {/* <CountUp start={startValue} end={100} enableScrollSpy /> */}

      <span id={`counter_${props.index}`} className="text-[36px] mt-[10px]"/>
    </div>
  );

}
export default Counter;
