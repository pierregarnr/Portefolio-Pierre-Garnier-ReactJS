import './tag.css'
let reactJs = 'https://i.postimg.cc/k5y55WkX/pngwing-com.png';
let javascript = 'https://i.postimg.cc/Kj1LL925/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b.png';
let html = 'https://i.postimg.cc/DwpSQrxj/file-type-html-icon-130541.png';
let css = 'https://i.postimg.cc/B6qRqF03/css-3.png';
let nodeJs = 'https://i.postimg.cc/6pMMdPsk/kisspng-node-js-javascript-server-side-scripting-ruby-5ad4ed85bd63f1-3434504215239038777758.png';
let mangoDb = 'https://i.postimg.cc/XqZWb5fJ/pngwing-com-1.png';
let sass = 'https://i.postimg.cc/8zXq1cCf/pngegg.png';


export function ImgTechno(techno) {
      if (techno === 'reactJs') {
            return <img src={reactJs} alt="Icone de ReactJS" draggable="false" />
      }
      if (techno === 'javascript') {
            return <img src={javascript} alt="Icone de javascript" draggable="false" />
      }
      if (techno === 'html') {
            return <img src={html} alt="Icone de HTML" draggable="false" />
      }
      if (techno === 'css') {
            return <img src={css} alt="Icone de css" draggable="false" />
      }
      if (techno === 'nodeJs') {
            return <img src={nodeJs} alt="Icone de nodeJs" draggable="false" />
      }
      if (techno === 'mangoDb') {
            return <img src={mangoDb} alt="Icone de mangoDb" draggable="false" />
      }
      if (techno === 'sass') {
            return <img src={sass} alt="Icone de sass" draggable="false" />
      } else {
            return null
      }

}

// const Tag = (props) => {
//       console.log(props.techno)
//       return (
//             <span className="tag" key={props.id}>
//                   {props.techno}
//             </span>
//       )

// }
// export default Tag;