"use client" 
import React, { useState, useEffects } from 'react';
import dynamic from 'next/dynamic';
import style from './artist.module.css';
import Navbar from '@/components/modules/navbar/Navbar';



function Artiest() {
  return (
    <div>
    <Navbar />
    <h3 className={style.container_flude}>Feuture Artiest</h3>

    <div className="container">
    <div className="row align-items-center">
    <div className="col-sm-2"><a href="/anne-robin"><img className="about-user-avatar" style={{borderRadius: "50%", width: "100px", height: "100px"}} src="https://cdn.kreezalid.com/kreezalid/556408/files/998045/160x160_thomas_hjelm_avatar.jpg" alt="Thomas Hjelm" /></a></div>
    <div className="col-sm-4">
    <h2 style={{marginBottom: "0px;"}}><a style={{color: "#293C70", textDecoration: "none", transition: "all .5s", backgroundColor: "transparent"}} href="/thomas-hjelm">Thomas Hjelm</a></h2>
    </div>
    <div className="col-sm-6 align-self-center">
    <p style={{marginTop: "1.5em;"}}><span>Thomas paints landscape like abstracts with oils.</span></p>
    </div>
    </div>
    <div className="row align-items-center" style={{marginTop: "2em;"}}>
    <div className="col-sm-2"><a href="/anne-robin"><img className="about-user-avatar" style={{borderRadius: "50%", width: "100px", height: "100px"}} src="https://cdn.kreezalid.com/kreezalid/556408/files/998045/anne_robin_avatar.jpg" alt="Anne Robin" /></a></div>
    <div className="col-sm-4">
    <h2 style={{marginBottom: "0px;"}}><a style={{color: "#293C70", textDecoration: "none", transition: "all .5s", backgroundColor: "transparent"}} href="/anne-robin">Anne Robin</a></h2>
    </div>
    <div className="col-sm-6 align-self-center">
    <p style={{marginTop: "1.5em;"}}><span>Anne's work is half-way between figurative and abstract.</span></p>
    </div>
    </div>
    <div className="row align-items-center" style={{marginTop: "2em;"}}>
    <div className="col-sm-2"><a href="/amanda-horvath"><img className="about-user-avatar" style={{borderRadius: "50%", width: "100px", height: "100px"}} src="https://cdn.kreezalid.com/kreezalid/556408/files/998045/amada_horvath_avatar.jpg" alt="Amanda Horvath" /></a></div>
    <div className="col-sm-4">
    <h2 style={{marginBottom: "0px;"}}><a style={{color: "#293C70", textDecoration: "none", transition: "all .5s", backgroundColor: "transparent"}} href="/amanda-horvath">Amanda Horvath</a></h2>
    </div>
    <div className="col-sm-6 align-self-center">
    <p style={{marginTop: "1.5em;"}}><span>Amanda creates expressive, textured landscape and seascape paintings.</span></p>
    </div>
    </div>
    <div className="row align-items-center" style={{marginTop: "2em;"}}>
    <div className="col-sm-2"><a href="/aggie-matyjaszec"><img className="about-user-avatar" style={{borderRadius: "50%", width: "100px", height: "100px"}} src="https://cdn.kreezalid.com/kreezalid/556408/files/998045/100x100_aggie_matyjaszek100x100.jpg" alt="Aggie Matyjaszec" /></a></div>
    <div className="col-sm-4">
    <h2 style={{marginBottom: "0px;"}}><a style={{color: "#293C70", textDecoration: "none", transition: "all .5s", backgroundColor: "transparent"}} href="/aggie-matyjaszek">Aggie Matyjaszek</a></h2>
    </div>
    <div className="col-sm-6 align-self-center">
    <p style={{marginTop: "1.5em;"}}><span>Aggie Matyjaszek paints landscapes in oils</span>.</p>
    </div>
    </div>
    </div></div>
  ); 
}

export default Artiest;
