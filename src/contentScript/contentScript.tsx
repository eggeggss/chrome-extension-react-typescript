// window.onload=()=>{
//      console.log('i am from content script');
// }

import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';


const ContentScript:React.FC = () => {
     const [visbible,setvisible]=useState(true);
     const [extend,setExtend]=useState(false);

     useEffect(()=>{


     },[])

     return (
          <>
          <button className={(extend) ? 'btn btn-info rounded' : 'btn btn-info rounded d-none'}
               style={{position:"fixed",bottom:"1px",right:"1px",width:"40px"}} 
               onClick={()=>{

                    setExtend((prev)=>{

                         return !prev;
                    })

                    setvisible((prev) => {

                         return !prev;
                    })


               }}>
               <i className="fas fa-info-circle fa-2x" style={{position:"relative",right:"10px",}}></i>
          </button>
          <div className={(visbible) ? "card " :"card alert-hidden"} style={{position:"fixed",bottom:"100px",right:"10px",border:"5px solid gray",}}>
               
               <div className='card-head m-0 p-0 pt-3 text-center bg-info w-100 h-100 text-white'>
                    <div className='container-fluid m-0 p-0'>
                         <div className='row justify-content-between m-0 p-0'>
                              <div className='col-12 ml-0 pl-0 text-end mb-3'>

                                   <button className="btn text-white m-0 p-0 mx-2" style={{ fontSize: "14px" }} onClick={() => {


                                   }}>
                                        最大
                                   </button>
                                   <button className="btn text-white m-0 p-0 mx-2" style={{ fontSize: "14px" }} onClick={() => {

                                        
                                   }}>
                                        最小
                                   </button>
                                   <button className="btn text-white m-0 p-0 mx-2" style={{fontSize:"14px"}} onClick={()=>{

                                        //$('body').css('background-color','black');
                                        setExtend((prev) => {

                                             return !prev;
                                        })

                                        setvisible((prev)=>{

                                             return !prev;
                                        })
                                   }}>
                                        隱藏
                                   </button>
                                  
                              </div>
                         </div>
                    </div>
                    <h5 style={{color:"white",}}>My Quick List</h5>
               </div>
               <div className="card-body text-start">

                    <button className='btn btn-primary w-100' onClick={() => {

                         $('body').css('background-color','red');
                         //document.body.style.backgroundColor = "red";

                    }}>Change Red</button>

                    <button className='btn btn-success w-100' onClick={() => {

                         $('body').css('background-color', 'white');
                         //document.body.style.backgroundColor = "white";


                    }}>Change White</button>
                   
               </div>
               <div className='card-foot'>
                    
               </div>
          </div>
          </>
     );
};

export default ContentScript;