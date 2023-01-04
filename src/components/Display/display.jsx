import { projetsList } from "../../datas/projetsList.js";
import { Card } from "../../components/Card/card.jsx";
import './display.css'



export function ProjectList() {
      const listItems = projetsList.map((item) =>
            <Card key={item.id} id={item.id} techno={item.techno} title={item.title}
                  subtitle={item.subtitle} contexte={item.contexte}
                  github={item.github} site={item.site} cover={item.cover} />);

      return (

            <section class="realisation">
                  <h2> Mes récentes réalisations</h2>
                  {listItems}
            </section>
      );

} 