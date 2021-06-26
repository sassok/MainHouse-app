import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch } from "react-icons/io";
import 'reactjs-popup/dist/index.css';
import { BiPlusCircle } from 'react-icons/bi';
import closeButton from '../../assets/images/iconeCloseButton.png';
import {BiMobileAlt, BiMessageRounded } from "react-icons/bi";
import {IoTrashBinOutline} from 'react-icons/io5'

const AllOwnerListAgency = () => {
  const [ownerList, setOwnerList] = useState([]);
  const [searchTerme, setSearchTerme] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [owner, setOwnerId] = useState([]);
  const agency_id = useSelector(state => state.agency.id);
  const [createowner, setCreateOwner] = useState();
  const [deleteownerid, setDestroy] = useState(0);


  const setDisplayNone = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
    document.getElementsByClassName('showownerright')[0].style.display = "none";
    document.getElementsByClassName('createownerright')[0].style.display = "none";
  }

  const setDisplay = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "block";
    document.getElementsByClassName('showownerright')[0].style.display = "block";
    document.getElementsByClassName('createownerright')[0].style.display = "none";
  }

  const setDisplayCreate = () => {
    document.getElementsByClassName('showownerright')[0].style.display = "none";
    document.getElementsByClassName('createownerright')[0].style.display = "block";
    document.getElementsByClassName('aside-right')[0].style.display = "block";

  }



  const fetchBuilding = async () => {
    fetch(`https://mainhouseapi.herokuapp.com/agency-owners/${agency_id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
      },
    }).then((response) => response.json())
      .then((response) => {
        setSearchResult(response.owners);
        setOwnerList(response.owners);
        console.log(response)
      }).catch(function () {
        console.log("error");
      });
  };

  const handleSearch = (e) => {
    setSearchTerme(e.target.value);
    setOwnerList(ownerList.filter(owner => owner.first_name.toString().toLowerCase().includes(searchTerme.toLowerCase())));

  };

  React.useEffect(() => { fetchBuilding() }, [createowner, deleteownerid]);


  if (ownerList.length == 0) {
    fetchBuilding();
  }

  const getID = (id) => {
    setOwnerId(id);
    setDisplay();
  }

  const CreateOwner = () => {
    const [buildinglist, setBuildingList] = useState([]);
    const agencyId = useSelector(state => state.agency.id);
    const Bienvenue = "Bienvenue"

    const setDisplayNone = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "none";
    }
    useEffect(() => {
      const fetchBuildingList = async () => {
        fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${agency_id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
          },
        }).then((response) => response.json())
          .then((response) => {
            setBuildingList(response.buildings);
          }).catch(function () {
            console.log("error");
          });
      };
      fetchBuildingList()
    }, []);
    console.log(buildinglist)
    const OnSend = (e) => {
      e.preventDefault();

      const first_name = document.querySelector('#ffirst_name').value;
      const last_name = document.querySelector('#flast_name').value;
      const mail = document.querySelector('#fmail').value;
      const phone_number = document.querySelector('#fphone_number').value;
      const flat_number = document.querySelector('#fflat_number').value;
      const buildingId = document.querySelector('#fbuildingId').value;

      const datacreate = {
        "owner": {
          "first_name": first_name,
          "last_name": last_name,
          "email": mail,
          "phone_number": phone_number,
          "flat_number": flat_number,
          "building_id": buildingId,
          "agency_id": agencyId,
          "password": Bienvenue
        }
      }
      fetch('https://mainhouseapi.herokuapp.com/create-owner', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datacreate)
      })
        .then((response) => {
          setCreateOwner(response)
        })
    }
    return (
      <>
        <div className="FormContainerowner">
          <form onSubmit={OnSend} >
            <div className="createbuidform">
              <div className="titlebuildform">
                Ajouter un propriétaire
                </div>
              <div class="input-style-long">
                <label class="label">Prénom</label>
                <input className="input--style-4" type="first_name" id="ffirst_name" name="first_name" />
              </div>
              <div class="input-style-long">
                <label class="label">Nom</label>
                <input className="input--style-4" type="last_name" id="flast_name" name="last_name" />
              </div>
              <div class="input-style-long">
                <label class="label">Email</label>
                <input className="input--style-4" type="mail" id="fmail" name="mail" required />
              </div>
              <div class="input-style-long">
                <label class="label">Telephone</label>
                <input className="input--style-4" type="phone_number" id="fphone_number" name="phone_number" />
              </div>
              <div class="input-style-long">
                <label class="label">Numéro d'appartement</label>
                <input className="input--style-4" type="flat_number" id="fflat_number" name="flat_number" />
              </div>
              <div className="input-style-long">
                <label className="label">Sélectionner un bâtiment</label>
                <select className="input--style-4" id="fbuildingId" name="fbuildingId">
                  {buildinglist.map(buildinglist => (
                    <option className="champform" key={buildinglist.id} value={buildinglist.id}>{buildinglist.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" id="formOwnerButton" className="boutonform" onClick={() => setDisplayNone()}>Valider</button>
            </div>
          </form>
        </div>
      </>
    )
  };

const ShowOwnerAgency = (props) => {
  const [showowner, setShowOwner] = useState([]);
  const [showbuilding, setShowBuilding] = useState([]);

  useEffect(() => {
    const fetchShowOwner = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/owners/${props.id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((response) => {
          setShowOwner(response);
          
        }).catch(function () {
          console.log("error");
        });
    };
    fetchShowOwner()
  }, [props]);

  useEffect(() => {
    const fetchShowBuilding = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/buildings/${showowner.building_id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((response) => {
          setShowBuilding(response);
        
        }).catch(function () {
          console.log("error");
        });
    };
    fetchShowBuilding()
  }, []);


  return (
    <div>
      <div className="containerCloseButton">
        <img className="responsiveCloseButton rotated" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()} />
      </div>
      <div className="infoshead">
        <div className="ajustprofile">
          <div className="ownerifoshead">
            <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" class="owner-image-show" />
          </div>
          <div className="ownerifoshead">
            <p className="nameownercard">{showowner.first_name} {showowner.last_name}</p>
            <p className="ownerinfoshead"><IoTrashBinOutline onClick={() => deleteOwner(showowner.id)} className="iconownerdelete" /></p>
          </div>
        </div>
      </div>
      <div className="mailandphone">
        <div className="iconifos">
          <p className="iconifos emailowner"><BiMessageRounded className="emailiconowner" /></p>
          <p className="iconifos">{showowner.email}</p>
        </div>
        <div className="iconifos">
          <p className="iconifos">< BiMobileAlt className="phoneiconowner" /></p>
          <p className="iconifos phoneowner">{showowner.phone_number}</p>
        </div>
      </div>
      <div className="infosownerbody">
        <p className="infoownerbuildname">{showbuilding.name}</p>
        <p className="infoowneradress">{showbuilding.adress}</p>
        <p className="infoowneradress">{showbuilding.zipcode} {showbuilding.city}</p>
        <p className="infoownerrefbuild">Ref : {showbuilding.reference}</p>
        <p className="infoownerlotnb">Lot N°{showowner.lot}</p>
        <p className="infoownerflatnb">Appartement N°{showowner.flat_number}</p>
      </div>
      <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
    </div>

  );
}

const deleteOwner = (deleteid) => {

  fetch(`https://mainhouseapi.herokuapp.com/owners/${deleteid}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  setDestroy(deleteownerid + 1);
  setDisplayNone();
};

  return (
    <>
      <main className="main">
        <div className="wrap">
          <div className="ownersearchbar">
            <p type="text" className="iconownersearch"><IoMdSearch className="iconownerbar" /></p>
            <input type="text" className="searchTerm" placeholder="Rechercher" onChange={(e) => handleSearch(e)}></input>

            <p type="text" className="owneraddchp"><BiPlusCircle className="iconaddevent" onClick={() => setDisplayCreate()} /></p>
          </div>
        </div>
        <div className="ownerlistcards">
          <div className="listowners">
            {searchTerme.length > 0 ?
              ownerList.map(list_owner => (
                <div className="list-item-owner" onClick={() => getID(list_owner.id)}>
                  <div className="img-owner-list">
                    <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image" alt="propriétaire" />
                  </div>
                  <div className="owner-list-content">
                    <p className="owner-list-name">{list_owner.first_name}</p>
                    <p className="owner-list-reff">{list_owner.email}</p>
                  </div>
                </div>
              ))
              :
              searchResult.map(list_owner => (
                <div className="list-item-owner" onClick={() => getID(list_owner.id)}>
                  <div className="img-owner-list">
                    <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image" alt="propriétaire" />
                  </div>
                  <div className="owner-list-content">
                    <p className="owner-list-name">{list_owner.first_name}</p>
                    <p className="owner-list-reff">{list_owner.email}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <aside className="aside-right">
        <div className="showownerright">
          <ShowOwnerAgency id={owner} />
        </div>
        <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
        <div className="createownerright">
          <CreateOwner />
        </div>
        <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
      </aside>
    </>
  );
};


export default AllOwnerListAgency;