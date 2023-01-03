import React from 'react';
import { NavLink } from "react-router-dom";
import kitchen from '../components/pics/fondo.jpg';
import style from '../components/styles/landingpage.module.css';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../actions/index.js'



const LandingPage = () => {
    const dispatch = useDispatch();
    React.useEffect(() => { dispatch(getRecipes()) }, [dispatch]);
    return (

        <div style={{ backgroundImage: `url(${kitchen})` }}>
            <NavLink to="/home" className="link"><button className={style.LP_btn}>INGRESAR</button></NavLink>

        </div>

        /*<div className={style.LP_container}>
            <video autoPlay loop muted className={style.LP_video} width="100vw" height="100%" >
                <source type="fondo.jpg" src={kitchen} />
            </video>
            <NavLink to="/home" className="link"><button className={style.LP_btn}>INGRESAR</button></NavLink>
        </div>*/
    );
};


export default LandingPage;