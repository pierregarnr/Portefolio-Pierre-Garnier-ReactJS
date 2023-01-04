
import arrow from '../../assets/fleche-haut.png'
import React from 'react';
import './arrow.css'


export class Arrow extends React.Component {
      handleClick = () => {
            window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
            })
      };
      render() {
            return (
                  <button onClick={this.handleClick}>
                        <img src={arrow} alt="fleche pour remonter en haut du site" draggable='false' className='icone' />
                  </button>
            );
      }
}
