import LogoGithub from '../../assets/lien-github.png';
import LogoSite from '../../assets/lien-site.png'
import './card.css'
// import { ImgTechno } from '../Tag/tag';
let reactJs = 'https://i.postimg.cc/k5y55WkX/pngwing-com.png';
let javascript = 'https://i.postimg.cc/Kj1LL925/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b.png';
let html = 'https://i.postimg.cc/DwpSQrxj/file-type-html-icon-130541.png';
let css = 'https://i.postimg.cc/B6qRqF03/css-3.png';
let nodeJs = 'https://i.postimg.cc/6pMMdPsk/kisspng-node-js-javascript-server-side-scripting-ruby-5ad4ed85bd63f1-3434504215239038777758.png';
let mangoDb = 'https://i.postimg.cc/XqZWb5fJ/pngwing-com-1.png';
let sass = 'https://i.postimg.cc/8zXq1cCf/pngegg.png';



export function Card({ techno, title, subtitle, contexte, github, site, cover }) {



      function Website() {
            if (site === "0") {
                  return null
            } else {
                  return <a href={site} target="_blank" rel="noopener noreferrer">
                        <img src={LogoSite} alt='lien vers le site du projet' draggable='false' className="logo-github" />
                  </a>;
            }
      }

      console.log(techno.length)
      return (

            <div class="fiche-wrapper">
                  <div>

                        <h2 class="titre-projet"> {title} </h2>
                        <h3> {subtitle} </h3>
                        <p> {contexte} </p>
                        <span className="links-projets">
                              <a href={github} target="_blank" rel="noopener noreferrer">
                                    <img src={LogoGithub} alt='lien vers mon projet Github' draggable='false' className="logo-github" />
                              </a>


                              <Website />



                        </span>
                  </div>
                  <div>
                        <img src={cover}
                              alt="représentation de la version mobile et desktop du projet" draggable="false" class="img-projet"></img>
                  </div>
            </div>
      )
}
