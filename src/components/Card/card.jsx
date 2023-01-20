import LogoGithub from '../../assets/lien-github.png';
import LogoSite from '../../assets/lien-site.png'
import './card.css'
import Projet from '../Techno/techno';




export function Card({ techno, title, subtitle, contexte, github, site, cover }) {

      function Website() {
            if (site === "0") {
                  return null
            } else {
                  return <a href={site} target="_blank" rel="noopener noreferrer" className='website-link'>
                        <img src={LogoSite} alt='lien vers le site du projet' draggable='false' className="logo-github" />
                  </a>;
            }
      }

      return (

            <div class="fiche-wrapper">
                  <div className='fiche-descriptif'>

                        <h2 class="titre-projet"> {title} </h2>
                        <h3> {subtitle} </h3>
                        <p> {contexte} </p>
                        <div className="links-technos">
                              <div className='links'>
                                    <a href={github} target="_blank" rel="noopener noreferrer" >
                                          <img src={LogoGithub} alt='lien vers mon projet Github' draggable='false' className="logo-github" />
                                    </a>
                                    <Website />
                              </div>


                              <Projet technos={techno} />


                        </div>
                  </div>
                  <div className='fiche-cover'>
                        <img src={cover}
                              alt="représentation de la version mobile et desktop du projet" draggable="false" class="img-projet"></img>
                  </div>
            </div>
      )

}
