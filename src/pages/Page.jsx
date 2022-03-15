import React from "react";
import Home from "./Home";
import {Route , Routes } from 'react-router-dom'
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Detail from "./Detail";

function Page() {
    return (
      
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cuisine/:kind" element={<Cuisine/>}/>
                    <Route path="/searched/:search" element={<Searched/>}/>
                    <Route path="/detail/:id" element={<Detail/>}/>
                </Routes>
            </div>
        
    );
}

export default Page;