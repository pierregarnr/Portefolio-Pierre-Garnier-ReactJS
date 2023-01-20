import React from 'react';
import { reactjsIcon, javascriptIcon, htmlIcon, cssIcon, nodejsIcon, mongoIcon, sassIcon } from '../../assets/technologies/index.js'

const Projet = (props) => {
      const { technos } = props;
      const images = {
            REACTJS: reactjsIcon,
            JAVASCRIPT: javascriptIcon,
            HTML: htmlIcon,
            CSS: cssIcon,
            NODEJS: nodejsIcon,
            MONGODB: mongoIcon,
            SASS: sassIcon,
      };

      return (
            < ul className='technos'>

                  {technos.map((techno) => (
                        <li>
                              <img src={images[techno]} alt={techno} />
                        </li>
                  ))}

            </ul>
      );
}
export default Projet;
