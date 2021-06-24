import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { FaAsterisk} from "react-icons/fa";
import IndexBuilding from '../IndexBuilding/index';

const CreateBuilding = () => {


  return (  
    <main className="main">
      <div className="createbuidform">
        <div className="titlebuildform">
          Créer un immeuble
        </div>
        <form>
          <div class="input-style-long">
            <label class="label">Nom de l'immeuble<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="last_name"/>
          </div>
          <div class="input-style-long">
            <label class="label">adresse<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="last_name"/>
          </div>
          <div class="input-style-long">
            <label class="label">Code postal<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="last_name"/>
          </div>
          <div class="input-style-long">
            <label class="label">Ville<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="last_name"/>
          </div>
          <div class="input-style-long">
            <label class="label">Réfférence<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="last_name"/>
          </div>
          <button className="btcreateform">Ajouter</button>
        </form>
      </div>  
    </main>
  );
};

export default CreateBuilding;