import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';

const AllOwnerListAgency = () => {
  const [ownerList, setOwnerList] = useState([]);
  const id = useSelector(state => state.agency.id);
  const [searchTerme, setSearchTerme] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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

  return (  
  <div className="wrap">
    <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={(e) => handleSearch(e)}></input>
      { searchTerme.length > 0 ? 
      ownerList.map(list_owner => (
    <div>
    <p>{list_owner.first_name}</p>
    <p>{list_owner.last_name}</p>
    <br/>
   </div>
      ))
   :
      searchResult.map(list_owner => (
    <div>
    <p>{list_owner.first_name}</p>
    <p>{list_owner.last_name}</p>
    <br/>
   </div>
      ))
      }
    </div>
</div>


  );
};

export default AllOwnerListAgency;