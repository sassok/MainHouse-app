import React, { useState, useEffect } from 'react';
import { BiPencil, BiTrash, BiMobileAlt, BiMessageRounded} from "react-icons/bi";
import './style.css';


const ShowOwner = () => {
 
  return ( 
    <main className="main">
        <div className="infoshead">
            <div className="ajustprofile">
                <div className="ownerifoshead">
                    <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" class="owner-image-show"/> 
                </div>
                <div className="ownerifoshead">
                    <p className="nameownercard">Hitesh Kumar</p>
                    <p className="ownerinfoshead"><BiPencil className="iconowneredit"/><BiTrash className="iconownerdelete"/></p>
                </div>
            </div> 
        </div>
        <div className="mailandphone">
            <div className="iconifos">
                <p className="iconifos emailowner"><BiMessageRounded className="emailiconowner"/></p>
                <p className="iconifos">test1@test.com</p>
            </div>
            <div className="iconifos">
                <p className="iconifos">< BiMobileAlt className="phoneiconowner"/></p>
                <p className="iconifos phoneowner">0658009417</p>
            </div>
        </div>
        <div className="infosownerbody">
            <p className="infoownerbuildname">Name of building</p>
            <p className="infoowneradress">Bld Mihail Kogalniceanu</p>
            <p className="infoowneradress">69001 Lyon, France</p>
            <p className="infoownerrefbuild">Ref : 1010010010</p>
            <p className="infoownerlotnb">Lot N°12</p>
        </div>
    </main>
  );
};

export default ShowOwner;