import React from 'react';
import './style.css';

const PriceTable = () => {
    return(

        <>
        
        <div class="containerPrice">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img"></img>
        <h2 class="pricing-header">Basic</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Premier mois gratuit</li>
          <li class="pricing-features-item">Sans engagement</li>
            <li class="pricing-features-item">Acces à une messagerie immeuble</li>
            <li class="pricing-features-item">De 1 à 9 gestionaires d'immeubles par comptes</li>
            <li class="pricing-features-item">Calendrier par immeuble et mutualisé</li>
        </ul>
        <span class="pricing-price">39€</span>
        <a href="#/" class="pricing-button is-featured">Decouvrez l'offre</a>
        </div>
      
      
      <div class="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img"></img>
        <h2 class="pricing-header">Premium</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Premier mois gratuit</li>
          <li class="pricing-features-item">Sans engagement</li>
            <li class="pricing-features-item">Acces à une messagerie immeuble</li>
            <li class="pricing-features-item">De 10 à 19 gestionaires immeubles par comptes</li>
            <li class="pricing-features-item">Calendrier par immeuble et mutualisé</li>
        </ul>
        <span class="pricing-price">55€</span>
        <a href="#/" class="pricing-button is-featured">Decouvrez l'offre</a>
        </div>
      
      
      <div class="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img"></img>
        <h2 class="pricing-header">Personalisé</h2>
        <ul class="pricing-features">
        <li class="pricing-features-item">Premier mois gratuit</li>
          <li class="pricing-features-item">Sans engagement</li>
            <li class="pricing-features-item">Acces à une messagerie immeuble</li>
            <li class="pricing-features-item">Nombre d'immeubles personalisé</li>
            <li class="pricing-features-item">Calendrier par immeuble et mutualisé</li>
        </ul>
        <span class="pricing-price centerContact">Contactez nous</span>
        <a href="#/" class="pricing-button">Interessé? Contactez nous ici</a>
        </div>
      
      
  
</div>
</div>
   </>
            )
};
export default PriceTable