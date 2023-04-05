import React, { useEffect, useState } from 'react';

const Popup:React.FC = () => {
    const [gname,setGname]=useState();

    const handleInput =(e)=>{
        
        e.preventDefault();

        const myname=e.target[0].value;
        chrome.storage.sync.set({
            name:myname
        },()=>{
            console.log(`write to local storage ${myname}`);
        })
        //alert(e.target[0].value);
        //console.log(e.target[0].value);
    }

    const setName=(e)=>{
        setGname(e.target.value);
    }

    useEffect(()=>{

        chrome.storage.sync.get(["name"],(res)=>{
            setGname(res.name);     
            console.log(`read local storage ${res.name}`);
        })

    },[])

    return (
        <div>
            <div className="card mt-5">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-info shadow-warning border-radius-lg py-3 pe-1 text-center py-4">
                        <div >
                            <i className="fab fa-slack text-white fa-lg"></i>
                            <h3 className="font-weight-bolder text-white ms-3" 
                                style={{display:"inline-block"}} >KM SYSTEM</h3>
                        </div>
                        <p className="mb-0 text-sm text-white text-110">please login</p>
                    </div>
                </div>
                <div className="card-body py-4">
                    <form role="form" onSubmit={handleInput}>
                        <div className="input-group input-group-static mb-4">
                            <label>Account</label>
                            <input type="email" className="form-control" 
                                defaultValue={gname}
                                onChange={setName}
                                placeholder="john@email.com"/>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="提交"
                                className="btn bg-gradient-info w-100 mt-4 mb-0"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Popup;