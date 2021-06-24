import React from 'react';
import './style.css';

const OwnerProfileRight = () => {
 /*   const owner = useSelector((state) => state.owner);
    const [profile, setProfile] = useState([]);
    const id = useSelector(state => state.owner.id);
    const bearer = useSelector(token => token.bearer)

  useEffect(() => {
    const fetchProfile = () => {
      fetch(`https://mainhouseapi.herokuapp.com/owners/${id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
      }).then((response) => response.json())
        .then((response) => {
          console.log(response)
          setProfile(response);
        }).catch(function () {
          console.log("error");
        });

    };
    fetchProfile()
    console.log(profile.name)
  }, []);

  const OnSend = (e) => {
    e.preventDefault();
    var first_name = profile.first_name;
    var last_name = profile.last_name;
    var email = profile.email;
    var phone_number = profile.phone_number;
    if (document.querySelector('#first_name').value != "") {
        first_name = document.querySelector('#first_name').value;
    }
    if (document.querySelector('#last_name').value != "") {
        last_name = document.querySelector('#last_name').value;
    }
    if (document.querySelector('#email').value != "") {
      email = document.querySelector('#email').value;
    }
    if (document.querySelector('#phone_number').value != "") {
      phone_number = document.querySelector('#phone_number').value;
    }

    const infos = { "owner": { "first_name": first_name, "last_name": last_name, "email": email, "phone_number": phone_number } };
    fetch(`https://mainhouseapi.herokuapp.com/owners/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_owner')}`
      },
      body: JSON.stringify(infos),
    })

  }
*/
  return (

    <main className="main">
      <div className="wrap">
        <div className="headprofileright">
        <div className="img-owner-profile">
                <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image-profile"/>
              </div>
        </div>
      </div>
      <div className="bodyprofileright">
     

   
  <div class="inner-div">
    <div class="front">
      <div class="front__bkg-photo"></div>
      <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg"class="front__face-photo"/>
      <div class="front__text">
        <h3 class="front__text-header">Bobby Korec</h3>
        <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>Seattle</p>
        
        <span class="front__text-hover">Hover to Find Me</span>
      </div>
    </div>
    <div class="back">
      <div class="social-media-wrapper">
        <a href="#" class="social-icon"><i class="fab fa-codepen" aria-hidden="true"></i></a> 
        <a href="#" class="social-icon"><i class="fab fa-github-square" aria-hidden="true"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-square" aria-hidden="true"></i></a>
         <a href="#" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
      </div>
    </div>

  </div>
  
      </div>
    </main>
  );
};

export default OwnerProfileRight;
