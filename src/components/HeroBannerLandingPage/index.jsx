import "./style.css";

const HeroBannerLandingPage = () => {
    return(
        <div>
            <div className="row1">
                <div className="container">
                    <div className="column__img"><img src="https://pbs.twimg.com/media/Ewl1n5uXEAEmle0?format=jpg&name=4096x4096" className="pictureHeroBanner" alt="yo" /></div>
                    <div className="column__text">
                        <h1 className="title__herobanner">Gérer des copropriétés n'a jamais été aussi simple.</h1>
                        <p className="intro__herobanner">
                            MainHouse est le premier service dédié aux agences et aux propriétaires pour gérer et faire vivre leurs copropriétés.<br/><br/>
                            Messagerie personnalisée, gestion d'événements, nous avons pensé à tout !<br/><br/>
                        <p className="question__herobanner">Vous êtes une agence ? Découvrez notre offre ci-dessous :</p>
                        </p>
                        <div className="button__herobanner">
                            <button  className="componentsHeroeLogin">Contactez-nous</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
};
export default HeroBannerLandingPage;