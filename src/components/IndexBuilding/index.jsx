import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import ShowBuilding from '../ShowBuilding';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BiPlusCircle } from "react-icons/bi";
import CreateBuilding from '../CreateBuilding/index';
import { FaAsterisk} from "react-icons/fa";
import { BiTrash } from "react-icons/bi";


const IndexBuilding = () => {
    const [building, setBuilding] = useState([]);
    const [create, setCreate] = useState();
    const [buildingId, setBuildingId] = useState([]);
    const id = useSelector(state => state.agency.id);
   
    const setDisplay = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
      document.getElementsByClassName('createbuildingright')[0].style.display = "none";
      document.getElementsByClassName('showbuildingright')[0].style.display = "block";
    }

    const setDisplayCreate = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
      document.getElementsByClassName('createbuildingright')[0].style.display = "block";
      document.getElementsByClassName('showbuildingright')[0].style.display = "none";
    }
    


    
      const fetchBuilding = async () => {
        document.getElementsByClassName('aside-right')[0].style.display = "none";
      fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        }).then((response) => response.json())
          .then((response) => {
            setBuilding(response.buildings);
          
            }).catch(function() {
              console.log("error");
        });
  
      };       

      
      React.useEffect(() => { fetchBuilding()}, [create])

      const OnSend = (e) => {
        document.getElementsByClassName('aside-right')[0].style.display = "none";
        e.preventDefault();
      const agency_id = id;
      const name = document.querySelector('#name').value;
      const adress = document.querySelector('#adress').value;
      const city = document.querySelector('#city').value;
      const zipcode = document.querySelector('#zipcode').value;
      const reference = document.querySelector('#reference').value;
        
     
      
        const data = {"building": {
        "agency_id": agency_id,
         "name": name,
          "adress": adress,
          "city": city,
          "zipcode": zipcode,
          "reference": reference
          } }
          console.log(data)
            fetch('https://mainhouseapi.herokuapp.com/buildings', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`, 
              },
              body: JSON.stringify(data)
            })
            .then( (response) => { 
              setCreate(response);
              console.log(response);
          })
          }


const getID = (id) => {
  setBuildingId(id);
  setDisplay();
}

const createForm = () => {
  setDisplayCreate();
}

const Ondeletebuilding = (id) => {
console.log("coucou")
}


  return (  
  <>
  <main className="main">
  <div className="positionicaddeve ">
  <BiPlusCircle className="iconaddevent" onClick={() => createForm()}/>
  </div>
  <div className="cardscontainer">
  <div className="containerbuilding">
  {building.map(build => (
    <div className="card-building" onClick={() => getID(build.id)}>
      <div className="card-building-header">
        <img className="card-building-img" src="https://us.123rf.com/450wm/zhudifeng/zhudifeng1410/zhudifeng141000067/32987276-modern-business-office-building-exterior.jpg?ver=6" alt="city" />
      </div>
      <div className="card-building-body">
        <span className="cardbuildcity">{build.city}</span>
        <div className="cardbuildname">
        {build.name}
        </div>
        <span className="cardbuildref">Ref : {build.reference}</span> 
      </div>
    </div> 
  ))}
    </div>
        </div>
    </main>
    <aside className="aside-right">
      <div className="showbuildingright">
          <ShowBuilding id={buildingId}/>
          <BiPlusCircle className="icondeleteevent" onClick={() => Ondeletebuilding(buildingId)}/>
         
          </div>
          <div className="createbuildingright">
          <div className="createbuidform">
        <div className="titlebuildform">
          Créer un immeuble
        </div>
        <form onSubmit={OnSend}>
          <div class="input-style-long">
            <label class="label">Nom de l'immeuble<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="name" id="name"/>
          </div>
          <div class="input-style-long">
            <label class="label">adresse<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="adress" id="adress"/>
          </div>
          <div class="input-style-long">
            <label class="label">Code postal<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="zipcode" id="zipcode"/>
          </div>
          <div class="input-style-long">
            <label class="label">Ville<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="city" id="city"/>
          </div>
          <div class="input-style-long">
            <label class="label">Réfférence<FaAsterisk className="astericolor"/></label>
            <input class="input--style-4" type="text" name="reference" id="reference"/>
          </div>
          <button type="submit" className="btcreateform">Ajouter</button>
        </form>
      </div>  
          </div>
    </aside>
    
    </>

  );
};

export default IndexBuilding;