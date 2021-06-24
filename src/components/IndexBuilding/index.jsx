import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BiPlusCircle } from "react-icons/bi";
import CreateBuilding from '../CreateBuilding/index';
import { FaAsterisk } from "react-icons/fa";
import { BiTrash, BiPencil } from "react-icons/bi";
import closeButton from '../../assets/images/iconeCloseButton.png';
import OwnerShowBuilding from '../OwnerShowBuilding';
import EventShowBuilding from '../EventShowBuilding/index'



const IndexBuilding = () => {
  const [building, setBuilding] = useState([]);
  const [create, setCreate] = useState();
  const [buildingId, setBuildingId] = useState([]);
  const [editbuildinginfos, setEditId] = useState([]);
  const [deleteid, setBuildingDelete] = useState();
  const id = useSelector(state => state.agency.id);

  const setDisplay = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "block";
    document.getElementsByClassName('createbuildingright')[0].style.display = "none";
    document.getElementsByClassName('showbuildingright')[0].style.display = "block";
    document.getElementsByClassName('editbuildingform')[0].style.display = "none";
  }

  const setDisplayCreate = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "block";
    document.getElementsByClassName('createbuildingright')[0].style.display = "block";
    document.getElementsByClassName('showbuildingright')[0].style.display = "none";
    document.getElementsByClassName('editbuildingform')[0].style.display = "none";
  }

  const setDisplayEdit = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "block";
    document.getElementsByClassName('showbuildingright')[0].style.display = "none";
    document.getElementsByClassName('createbuildingright')[0].style.display = "none";
    document.getElementsByClassName('editbuildingform')[0].style.display = "block";
  };

  const setDisplayNone = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
  }


  const fetchBuilding = async () => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
    fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
      },
    }).then((response) => response.json())
      .then((response) => {
        setBuilding(response.buildings);

      }).catch(function () {
        console.log("error");
      });
  };

  React.useEffect(() => { fetchBuilding() }, [create])

  const OnSend = (e) => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
    e.preventDefault();
    const agency_id = id;
    const name = document.querySelector('#name').value;
    const adress = document.querySelector('#adress').value;
    const city = document.querySelector('#city').value;
    const zipcode = document.querySelector('#zipcode').value;
    const reference = document.querySelector('#reference').value;

    const data = {
      "building": {
        "agency_id": agency_id,
        "name": name,
        "adress": adress,
        "city": city,
        "zipcode": zipcode,
        "reference": reference
      }
    }
    console.log(data)
    fetch('https://mainhouseapi.herokuapp.com/buildings', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`,
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        setCreate(response);
        console.log(response);
      })
  }

  const ShowBuilding = (props) => {
    const [oneBuilding, setOneBuilding] = useState([]);
    const [EditId, setEditId] = useState([]);

    useEffect(() => {
      const fetchShowBuilding = async () => {
        fetch(`https://mainhouseapi.herokuapp.com/buildings/${props.id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json())
          .then((response) => {
            setOneBuilding(response);

          }).catch(function () {
            console.log("error");
          });
      };
      fetchShowBuilding()
    }, [props]);


    return (
      <div className="showbuildingcard">
        <div className="containerbuilding-show">
          <div className="card-building-show">
            <div className="card-building-header-show">
              <img className="card-building-img-show " src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
            </div>
            <div className="card-building-body-show">
              <div className="cardbuildname-show">
                <p>{oneBuilding.name}</p>
              </div>
              <span className="cardbuildref-show">Ville: {oneBuilding.city}</span>
              <span className="cardbuildref-show">Adresse: {oneBuilding.adress}</span>
              <span className="cardbuildref-show mb-5">Reference: {oneBuilding.reference}</span>
              <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
              <hr />
              <span className="cardbuildref-show-owner mb-5">Propriétaires: </span>
              <div className="ContainerOwnerEventShowBuilding">
                <div className="ContainerOwnerShowBuilding">
                  <OwnerShowBuilding id={oneBuilding.id} />
                </div>
                <div className="ContainerEventShowBuilding">
                  <EventShowBuilding id={oneBuilding.id} />
                </div>
                <BiTrash className="icondeletebuilding" onClick={() => Ondeletebuilding(oneBuilding.id)} />
                <BiPencil className="iconeditbuilding" onClick={() => editID(oneBuilding)} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  const EditBuilding = () => {
    var editname = editbuildinginfos.name;
    var editcity = editbuildinginfos.city;
    var editadress = editbuildinginfos.adress;
    var editreference = editbuildinginfos.reference;
    var editzipcode = editbuildinginfos.zipcode;
    const buildingeditid = editbuildinginfos.id;
    const OnSendEdit = (buildingedit) => {
      buildingedit.preventDefault();

      const agency_id = id;

      if (document.querySelector('#editname').value !== "") {
        editname = document.querySelector('#editname').value;
      }
      if (document.querySelector('#editcity').value !== "") {
        editcity = document.querySelector('#editcity').value;
      }
      if (document.querySelector('#editadress').value !== "") {
        editadress = document.querySelector('#editadress').value;
      }
      if (document.querySelector('#editreference').value !== "") {
        editreference = document.querySelector('#editreference').value;
      }
      if (document.querySelector('#editzipcode').value !== "") {
        editzipcode = document.querySelector('#editzipcode').value;
      }

      const editinfos = { "building": { "agency_id": agency_id, "name": editname, "city": editcity, "adress": editadress, "zipcode": editzipcode, "reference": editreference } };
      console.log(editinfos)
      fetch(`https://mainhouseapi.herokuapp.com/buildings/${buildingeditid}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        body: JSON.stringify(editinfos),
      }).then((response) => response.json())
        .then((response) => {
          setCreate(response);
          console.log(response)

        }).catch(function () {
          console.log("error");
        });
    }
    return (

      <div className="createbuidform">
        <div className="titlebuildform">
          Modifier l'immeuble
  </div>
        <form onSubmit={OnSendEdit}>
          <div class="input-style-long">
            <label class="label">Nom de l'immeuble</label>
            <input class="input--style-4" type="text" name="editname" id="editname" placeholder={editname} />
          </div>
          <div class="input-style-long">
            <label class="label">adresse</label>
            <input class="input--style-4" type="text" name="editadress" id="editadress" placeholder={editadress} />
          </div>
          <div class="input-style-long">
            <label class="label">Code postal</label>
            <input class="input--style-4" type="text" name="editzipcode" id="editzipcode" placeholder={editzipcode} />
          </div>
          <div class="input-style-long">
            <label class="label">Ville</label>
            <input class="input--style-4" type="text" name="editcity" id="editcity" placeholder={editcity} />
          </div>
          <div class="input-style-long">
            <label class="label">Réfférence</label>
            <input class="input--style-4" type="text" name="editreference" id="editreference" placeholder={editreference} />
          </div>
          <button type="submit" className="btcreateform">Modifier</button>
        </form>
      </div>

    );
  }
  const getID = (id) => {
    setBuildingId(id);
    setDisplay();
  }

  const createForm = () => {
    setDisplayCreate();
  }

  const editID = (oneBuilding) => {
    setEditId(oneBuilding);
    setDisplayEdit();
  }
  const Ondeletebuilding = (id) => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
    fetch(`https://mainhouseapi.herokuapp.com/buildings/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`,
      },
    }).then((response) => response.json())
      .then((response) => {
        setCreate(response);
      }).catch(function () {
        console.log("error");
      });
  };

  return (
    <>
      <main className="main">
        <div className="positionicaddeve ">
          <BiPlusCircle className="iconaddevent" onClick={() => createForm()} />
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
          <ShowBuilding id={buildingId} />
        </div>
        <div class="editbuildingform">
          <EditBuilding id={buildingId} />
        </div>
        <div className="createbuildingright">
          <div className="createbuidform">
            <div className="titlebuildform">
              Créer un immeuble
        </div>
            <form onSubmit={OnSend}>
              <div class="input-style-long">
                <label class="label">Nom de l'immeuble<FaAsterisk className="astericolor" /></label>
                <input class="input--style-4" type="text" name="name" id="name" />
              </div>
              <div class="input-style-long">
                <label class="label">adresse<FaAsterisk className="astericolor" /></label>
                <input class="input--style-4" type="text" name="adress" id="adress" />
              </div>
              <div class="input-style-long">
                <label class="label">Code postal<FaAsterisk className="astericolor" /></label>
                <input class="input--style-4" type="text" name="zipcode" id="zipcode" />
              </div>
              <div class="input-style-long">
                <label class="label">Ville<FaAsterisk className="astericolor" /></label>
                <input class="input--style-4" type="text" name="city" id="city" />
              </div>
              <div class="input-style-long">
                <label class="label">Réfférence<FaAsterisk className="astericolor" /></label>
                <input class="input--style-4" type="text" name="reference" id="reference" />
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