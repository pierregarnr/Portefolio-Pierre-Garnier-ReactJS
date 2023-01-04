import './footer.css'

import logoGit from '../../assets/logo-github.png'
import logoLinkdin from '../../assets/logo-linkedin.png'


export function Footer() {
      return (
            <footer>

                  <div class="reseaux-sociaux">
                        <a href="https://github.com/pierregarnr" target="_blank" draggable="false" rel='noreferrer'>
                              <img src={logoGit}
                                    alt="lien pour mon github" draggable="false" />
                        </a>

                        <a href="https://www.linkedin.com/in/pierre-garnier-d%C3%A9veloppeur-web/" target="_blank" draggable="false" rel='noreferrer'>
                              <img src={logoLinkdin}
                                    alt="lien pour mon linkedin" draggable="false" />
                        </a>
                  </div>

                  <div class="tel">
                        <p>Pierre Garnier - Paris 2022</p>
                  </div>

            </footer >



      )
}