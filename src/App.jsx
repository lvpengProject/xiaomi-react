
import React, { lazy, Suspense } from "react";
import { HashRouter,Route,Routes } from 'react-router-dom';

const Home = lazy(() => import('./views/Home'));
const Category = lazy(() => import('./views/Category'));
const Cart = lazy(() => import('./views/Cart'));
const Detail = lazy(() => import('./views/Detail'));
const List = lazy(() => import('./views/List'));
const Address = lazy(() => import('./views/Address'));
const Login = lazy(() => import('./views/Login'));
const Profile = lazy(() => import('./views/Profile'));

const App = () => {
    return  (
       <HashRouter>
           <Suspense fallback={ <div> loading... </div> }>
               <Routes>
                   <Route path="/" element={ <Home/> }/>
                   <Route path="/address" element={ <Address/> }/>
                   <Route path="/cart" element={ <Cart/> }/>
                   <Route path="/detail/:id" element={ <Detail/> }/>
                   <Route path="/list/:cid" element={ <List/> }/>
                   <Route path="/login" element={ <Login/> }/>
                   <Route path="/category" element={ <Category/> }/>
                   <Route path="/profile" element={ <Profile/> }/>
                   <Route path="/Home" element={ <Home/> }/>
               </Routes>
           </Suspense>
       </HashRouter>
    )
}

export default App
