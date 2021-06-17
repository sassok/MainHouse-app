import React from 'react';
import './style.css';
import batiment from  '../../assets/images/batiment.png'
import groupe from  '../../assets/images/groupe_1.png'
import calendar from  '../../assets/images/calendar.png'

const IconsLanding= () => {
    return(
        <div className="containerIcons">
            <div class="row">
                <div class="column">
                    <div className="card">
                        <p><img className="logoBatiment" alt="batiment" src={batiment}></img></p>
                        <p>Gérez les copropriétés de tous vos immeubles sur une seule plateforme</p>
                        <p className="CTA">Pour en savoir plus... cliquez ici !</p>
                    </div>
                </div>
                <div class="column">
                    <div className="card">
                        <p><img className="logoBatiment" alt="batiment" src={groupe}></img></p>
                        <p>Faites vivre votre copropriété grâce à une messagerie dédiée à chaque immeuble</p>
                        <p className="CTA">Pour en savoir plus... cliquez ici !</p>
                    </div>
                </div>
                <div class="column">
                    <div className="card">
                        <p><img className="logoBatiment" alt="batiment" src={calendar}></img></p>
                        <p>Retrouvez tous les événements liés à vos copropriétés au même endroit</p>
                        <p className="CTA">Pour en savoir plus... cliquez ici !</p>
                    </div>
                </div>
            </div>
        </div>
            )
};
export default IconsLanding