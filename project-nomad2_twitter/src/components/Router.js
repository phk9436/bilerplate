import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
//  import EditProfile from "../routes/EditProfile";
import Home from '../routes/Home';
import Profile from "../routes/Profile";
import Navi from './Navi';

function Router ({isLogged}) {
    return (
        <BrowserRouter>
            {isLogged && <Navi></Navi>}
            <Routes>
                { isLogged ? (
                 <>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                 </>
                ) : (
                <Route path='/' element={<Auth/>}/>
                ) }
            </Routes>
        </BrowserRouter>
    );
 }

export default Router;