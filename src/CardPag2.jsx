import "./Estilos.css"
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
function CardPag2(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="acordeon">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem className="acordeon2">
          <AccordionHeader targetId="1" className="subPag2">Inicios</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>
            Los hermanos proporcionaron coros y otros papeles secundarios para su hermana 
            y miembros de la familia, Rebecca St. James , y varias bandas en conciertos por 
            todo Estados Unidos. Poco después de que Luke se graduara de la escuela 
            secundaria, los hermanos decidieron explorar la posibilidad de formar una banda 
            y, en 2007, comenzaron a actuar como su banda. Comenzaron su carrera como "Joel & Luke", 
            que luego cambiaron a "Austoville", antes de decidirse por su nombre actual.
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="acordeon2">
          <AccordionHeader targetId="2" className="subPag2">Musicalmente...</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>
            En 2008, "Joel & Luke" lanzó un EP de seis canciones titulado A Tale of Two Towns. 
            Tres de esas canciones ("Missing", "Sane" y "Love's to Blame") aparecieron en Crave 
            con melodías y letras ligeramente diferentes. Las otras tres canciones fueron 
            "Broken Lullabies", "Believe Me Now" y "Something's Gotta Give". Love's to Blame 
            fue coescrita por St. James.
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="acordeon2">
          <AccordionHeader targetId="5" className="subPag2">Debut</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>
            Su álbum debut Crave fue lanzado el 28 de febrero de 2012. El álbum alcanzó el puesto número 2
             en el iTunes Top Christian & Gospel Albums el día de su lanzamiento y el número 42 en la lista 
             general. Alcanzó el puesto número 4 en la lista de álbumes cristianos de Billboard y permaneció 
             en la lista durante 41 semanas.También alcanzó el puesto número 128 en la lista Billboard 
             200.
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="acordeon2">
          <AccordionHeader targetId="6" className="subPag2">mas...</AccordionHeader>
          <AccordionBody accordionId="6">
            <strong>
            Su canción debut, "Busted Heart (Hold On to Me)", apareció en el episodio del 28 de octubre de 2012 
            de Rehab with Dr. Drew de VH1 . Entre otras apariciones en televisión, sus canciones "People Change" 
            y "Love's To Blame" han aparecido en Vampire Diaries de The CW , y "Light It Up" y "Sane" han aparecido 
            en el programa de Lifetime Drop Dead Diva. En julio de 2012, anunciaron The Proof of Your Love Tour con 
            Jason Castro y Dara Maclean para visitar 30 ciudades desde septiembre hasta noviembre de 2012. En octubre 
            de 2012, lanzaron una canción navideña original: "Baby Boy"; alcanzó el puesto número 20 en la lista 
            Hot Christian Songs.
            </strong>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default CardPag2;