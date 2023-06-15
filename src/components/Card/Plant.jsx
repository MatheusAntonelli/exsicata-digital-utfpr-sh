import React, { useState } from 'react';
import { Card, Button, TransitionablePortal, Header, Segment, Divider } from 'semantic-ui-react';
import '../../App.css';

function PlantCard() {
  const [openStates, setOpenStates] = useState([]);

  const handleOpen = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = true;
      return newOpenStates;
    });
  };

  const handleClose = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = false;
      return newOpenStates;
    });
  };

  const renderPortalContent = (index) => {
    return (
      <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }}>
        <Header>Nome da planta</Header>
        <Divider horizontal>Nome Cientifico</Divider>
        <Header className="italic">Nome cientifico:</Header>
        <p>Plantas medicinais podem ajudar a sociedade.</p>
        <p>Usos</p>
      </Segment>
    );
  };

  const renderCards = () => {
    return (
      <Card.Group itemsPerRow={3} className="card-container">
        {openStates.map((open, index) => (
          <Card key={index}>
            {/* Card content */}
            <TransitionablePortal
              closeOnTriggerClick
              onOpen={() => handleOpen(index)}
              onClose={() => handleClose(index)}
              openOnTriggerClick
              trigger={
                <Button
                  content={open ? 'Fechar Informações' : 'Mais informações'}
                  negative={open}
                  positive={!open}
                />
              }
            >
              {/* Portal content */}
              {renderPortalContent(index)}
            </TransitionablePortal>
          </Card>
        ))}
      </Card.Group>
    );
  };

  return (
    <section id="featured" className="featured">
      <h2>Plantas coletadas</h2>
      {renderCards()}
    </section>
  );
}

export default PlantCard;