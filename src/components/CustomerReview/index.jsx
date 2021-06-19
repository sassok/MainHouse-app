import React from 'react';
import './style.css'
import stars from '../../assets/images/stars.png'

const CustomerReview = () => {
    return(
        <div className="AdviceContainer">
            <div className="row1-container">
                <div className="box box-down blue">
                    <h2>"Fini les post-it dans l'assenceur ou les mails sans réponse"</h2>
                    <h4>Jean</h4>
                    <img className="starsPicture" src={stars} alt="stars"></img>
                    <p>"Depuis que j'utilise mainhouse, je peux dialoguer en direct avec mon agence en quelques secondes ! Fini les post-it dans l'assenceur ou les mails sans réponse. Un vrai plaisir !"</p>
                    <img  alt=""></img>
                </div>
                <div className="box blue">
                    <h2>"C'est un outil très simple d'utilisation, et qui devient vite indispensable"</h2>
                    <h4>Sophie</h4>
                    <img className="starsPicture" src={stars} alt="stars"></img>
                    <p>"Depuis que notre agence à opté pour la solution MainHouse, la mise en place d'assemblées générales se fait sans encombres. C'est un outil très simple d'utilisation, et qui devient vite indispensable."</p>
                    <img  alt=""></img>
                </div>
                <div className="box box-down blue">
                    <h2>"Merci MainHouse !"</h2>
                    <h4>Frederic</h4>
                    <img className="starsPicture" src={stars} alt="stars"></img>
                    <p>"L'assenceur de l'immeuble étais en panne et j'ai pu m'adresser directement à mon agence qui à reglé le problème en quelques heures ! Merci MainHouse !"</p>
                    <img  alt=""></img>
                </div>
            </div>
            <div className="row2-container">
                <div className="box blue">
                    <h2>"Mainhouse nous permet d'être plus efficaces et plus transparents avec nos clients"</h2>
                    <h4>Martine</h4>
                    <img className="starsPicture" src={stars} alt="stars"></img>
                    <p>"Aujourd'hui, nous gérons l'ensemble de nos propriétés en quelques clics, ajoutant des nouveaux propriétaires, éditant des évenements... Mainhouse nous permet d'être plus efficaces et plus transparents avec nos clients."</p>
                    <img  alt=""></img>
                </div>
            </div>
        </div>
            )
};
export default CustomerReview