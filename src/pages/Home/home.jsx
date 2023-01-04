import './home.css'
import nameInJaponness from '../../assets/japoness-name.png'
import { ProjectList } from '../../components'
import { About } from '../About/about'



export function Home() {

      return (
            <section className='section-home'>
                  <div class="background-animation" draggable='false'>
                        <img class="japon-name" src={nameInJaponness} alt="effet splash" draggable='false' fetchpriority="high"></img>
                  </div>

                  <About />
                  <ProjectList />

            </section>

      )
}