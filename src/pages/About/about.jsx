import './about.css'
import visage from '../../assets/visage-manga.png'
import cv from '../../assets/cv-pierre.png'


export function About() {

      return (
            <section class="présentation">


                  <div class="photo-texte">
                        <img class="photo" src={visage}
                              alt="Pierre Garnier visage version manga" draggable="false" />


                        <div class="bubble">
                              <div class="bubble-text">
                                    <h1>Développeur web</h1>

                                    <p>Salut, moi c'est Pierre ! Heureux de te retrouver sur mon site. Je voulais te partager
                                          mes
                                          créations
                                          dans un univers animé old school. Enjoy ! </p>
                              </div>
                        </div>

                        <a href="../../assets/cv-pierre-garnier.pdf" target="_blank" className='cv-wrapper' draggable='false'>
                              <img src={cv} alt="lien pour télécharger mon cv" draggable="false" className='cv-icone' />
                              <p>Télécharger mon CV 📋</p>
                        </a>


                  </div>

            </section>

      )
}