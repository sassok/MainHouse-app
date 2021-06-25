import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch} from "react-icons/io";
import 'reactjs-popup/dist/index.css';
import CreateOwner from '../CreateOwnerForm/index';
import ShowOwnerAgency from '../ShowOwnerAgency/index';
import { BiPlusCircle } from 'react-icons/bi';

const AllOwnerListAgency = () => {
  const [ownerList, setOwnerList] = useState([]);
  const id = useSelector(state => state.agency.id);
  const [searchTerme, setSearchTerme] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [owner, setOwnerId] = useState([]);

  const setDisplay = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "block";
    document.getElementsByClassName('aside-right-form')[0].style.display = "none";
    document.getElementsByClassName('createownerright')[0].style.display = "none";
  }

  const setDisplayCreate = () => {
    document.getElementsByClassName('aside-right-form')[0].style.display = "block";
    document.getElementsByClassName('createownerright')[0].style.display = "block";
    document.getElementsByClassName('aside-right')[0].style.display = "none";

  }
    const fetchBuilding =  async () => {
    fetch(`https://mainhouseapi.herokuapp.com/agency-owners/${id}` , {
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
          }).catch(function() {
            console.log("error");
      });
    };       

    const handleSearch = (e) => {
      setSearchTerme(e.target.value);
      setOwnerList(ownerList.filter(owner => owner.first_name.toString().toLowerCase().includes(searchTerme.toLowerCase()))); 
      console.log(ownerList)
    };
      
    useEffect(() => {fetchBuilding()}, []);

    if(ownerList.length == 0){
      fetchBuilding();
    }

    const getID = (id) => {
      setOwnerId(id);
      setDisplay();
    }

  return (  
    <>
    <main className="main">
      <div className="wrap">
        <div className="ownersearchbar">
          <input type="text" className="searchTerm" placeholder="     Rechercher un propriétaire"  onChange={(e) => handleSearch(e)}></input>
          <p type="text" className="iconownersearch"><IoMdSearch className="iconownerbar"/></p>
          <p type="text" className="owneraddchp"><BiPlusCircle className="iconaddevent" onClick={() => setDisplayCreate()}/></p>
        </div>
      </div>
      <div className="ownerlistcards">
        <div className="listowners">
          { searchTerme.length > 0 ? 
          ownerList.map(list_owner => (
            <div className="list-item-owner" onClick={() => getID(list_owner.id)}>
              <div className="img-owner-list">
                <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image"/>
              </div>
              <div className="owner-list-content">
              <p className="owner-list-name">{list_owner.first_name}</p>
              <p className="owner-list-reff">{list_owner.last_name}</p>
            </div>
          </div>
          ))
          :
          searchResult.map(list_owner => (
            <div className="list-item-owner" onClick={() => getID(list_owner.id)}>
              <div className="img-owner-list">
                <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image"/>
              </div>
              <div className="owner-list-content">
                <p className="owner-list-name">{list_owner.first_name}</p>
                <p className="owner-list-reff">{list_owner.last_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <aside className="aside-right">
      <ShowOwnerAgency id={owner} />
    </aside>
    <aside className="aside-right-form">
      <div className="createownerright">
          <CreateOwner  />
        </div>
    </aside>
    </>
  );
};

export default AllOwnerListAgency;