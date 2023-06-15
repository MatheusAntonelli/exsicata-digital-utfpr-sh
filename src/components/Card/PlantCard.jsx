import React, {Component, useState} from 'react'
import { Card, Icon, Image, Button,TransitionablePortal,Header, Segment,Divider} from 'semantic-ui-react'
import '../../App.css'


export default class PlantCard extends Component {

  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })


  render() {
    const { open } = this.state
    return (
      <section id='featured' className='featured'>
        <h2>Plantas coletadas</h2>
        <Card.Group itemsPerRow={4} className='card-container'>
          {/* Alecrim -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837959438-ba02b578f5ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Alecrim</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Erva aromática comum <br />Uso: Digestiva, alívio da dor de cabeça
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Alecrim</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Rosmarinus officinalis</Header>
          <p> <strong>Família: </strong>Lamiaceae <br />
            <strong>Finalidade:</strong> melhora da digestão, alívio da dor de cabeça e combate ao cansaço <br />
            <strong>Usos: </strong>Serve para o consumo em forma em forma de chá é tempero. Utilizado também como repelente natural contra insetos é também e utilizado na fabricação de produtos químicos <br />
            <strong>Local de coleta:</strong> UTFPR- SH <br />
            <strong>Nome do coletor: </strong>Matheus Antonelli <br />
            <strong>Data de coleta:</strong> 01 /06 / 2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* Alecrim -  - ---------- */}

            {/* BOLDO -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837699603-1c88da19bb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Boldo</Card.Header>
            <Divider horizontal className='italic'>Peumus boldus</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Recomendado para digestao e estimular as funções do fígado
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Boldo</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Peumus boldus</Header>
          <p> <strong>Nome vulgar: </strong> Boldo <br />
            <strong>Nome científico:</strong> <i>Peumus boldus</i> <br />
            <strong>Família: </strong> Monimiaceae <br />
            <strong>Finalidade:</strong> estimular as funções do fígado, melhorar a digestão e aliviar sintomas de ressaca, também ajuda a digestão de gases em excesso <br />
            <strong>Usos:</strong> Consumo em forma de chá <br />
            <strong>Local de coleta:</strong> UTFPR-SH <br />
            <strong>Nome do coletor: </strong>Matheus Antonelli
            <strong>Data de coleta:</strong> 01/06/2023</p>
          
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* BOLDO -  - ---------- */}

            {/* ERVA CIDREIRA -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686839469004-81457c0a8b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} className='img-card'/>
          <Card.Content>
            <Card.Header>Erva Cidreira</Card.Header>
            <Divider horizontal className='italic'>Melissa officinalis</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
               É utilizada para melhorar a qualidade do sono e ansiedade.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Erva Cidreira</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Melissa officinalis:</Header>
          <p> <strong>Família:</strong>Lamiaceae <br />
           <strong>Finalidade: </strong> Melhorar a qualidade do sono, ajudar quem sofre de ansiedade e ainda controlar problemas digestivos, diminuindo cólicas e gases <br />
           <strong>Usos:</strong> Pode ser utilizada na forma de chá é em comidas para se fazer ponches é temperar saladas. <br />
           <strong>Local de coleta:</strong> UTFPR-SH <br />
           <strong>Nome do coletor:</strong> Matheus Antonelli <br />
           <strong>Data de coleta:</strong> 01/06/ 2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* ERVA CIDREIRA -  - ---------- */}
            {/* Losna -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837999742-7661eeec80ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Losna</Card.Header>
            <Divider horizontal className='italic'>Artemisia absinthium</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Pode ser usada via oral, infusão e compressas, bastante utilizadas para distúrbios de digestão. 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Losna</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Artemisia absinthium</Header>
          <p> <strong>Família: </strong> Asteraceae <br />
           <strong>Finalidade: </strong> uso oral contra gases, vermes, distúrbios de digestão, do fígado e da vesícula biliar.<br />
           <strong>Usos:</strong> Chá por infusão (uso oral) é por decocção ( compressa) <br />
           <strong>Local de coleta:</strong> UTFPR-SH <br />
           <strong>Nome do coletor:</strong> Matheus Antonelli <br />
           <strong>Data de coleta:</strong> 01/06/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837755775-f4c196ff8f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Manjericão</Card.Header>
            <Divider horizontal className='italic'>Ocimum basilicum</Divider>
            <Card.Meta>Data da Coleta: 01/06/2023</Card.Meta>
            <Card.Description>
              Estimulante digestivo, antiespamódico
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Manjericão</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Ocimum basilicum</Header>
          <p><strong>Família:</strong> Laminacea <br />
             <strong>Finalidade:</strong> estimulante digestivo é antiespamódico <br />
             <strong>Usos:</strong> Utilização como chá <br />
             <strong>Local de coleta:</strong> UTFPR-SH <br />
             <strong>Nome do coletor:</strong> Matheus Antonelli <br />
             <strong>Data de coleta:</strong> 01/06/2023</p>

        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}
            {/*  -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837852820-128f021a90a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Mil Folhas</Card.Header>
            <Divider horizontal className='italic'>Achillea millefolium L.</Divider>
            <Card.Meta>Data da Coleta: 01/06/2023</Card.Meta>
            <Card.Description>
              Planta digestiva, diurética, anti-inflamatoria ...
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Mil Folhas</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Achillea millefolium L.</Header>
          <p><strong>Família:</strong> Asteraceae 
            <strong>Finalidade:</strong> digestiva, diurética, anti-inflamatória e antiespasmódica ( uso interno). tratamento de hemorroidas, contusões, doenças de pele, feridas e dores musculares (uso externos) <br />
            <strong>Usos: </strong> Infusão tanto para uso oral como para banhos de assento e lavagens locais. <br />
            <strong>Local de coleta:</strong>  UTFPR- SH <br />
            <strong>Nome do coletor:</strong> Matheus Antonelli <br />
            <strong>Data de coleta:</strong> 01/06/2023</p>

        </Segment>
      </TransitionablePortal>
        </Card>



        <Card>
          <Image src='https://images.unsplash.com/photo-1686842077709-cf2050479b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Funcho</Card.Header>
            <Divider horizontal className='italic'>Foeniculum vulgare</Divider>
            <Card.Meta>Data da Coleta: 28/05/2023 </Card.Meta>
            <Card.Description>
              Conhecida como erva-doce, amplamente utilizada para problemas gastrointestinais.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Funcho</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Foeniculum vulgare</Header>
          <p><strong>Família:</strong> Apiaceae <br />
            <strong>Finalidade:</strong> Medicinal e Aromatica   <br />
            <strong>Usos: </strong> utilizado no combate a problemas gastrointestinais, ajuda na digestão, combate flatulência e diarreia, pode ajudar no combate a ansiedade, <br /> estresse e insônia, ajuda liberar excesso de liquido no corpo, pode reduzir dores menstruais, previne o mau hálito e azia <br />
            <strong>Local de coleta:</strong>  Missal - PR <br />
            <strong>Nome do coletor:</strong> Johny Lamera <br />
            <strong>Data de coleta:</strong> 28/05/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        {/* -  - ---------- */}

        {/*  -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686844683857-ba8a7ff83f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Perpetua</Card.Header>
            <Divider horizontal className='italic'>	Gomphrena Globosa</Divider>
            <Card.Meta>Data da Coleta: 28/05/2023</Card.Meta>
            <Card.Description>
              Planta medicinal utilizada com metodo de infusão contra tosses e cólicas.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Perpetua</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Gomphrena Globosa</Header>
          <p><strong>Família:</strong> Apiaceae <br />
            <strong>Finalidade:</strong> servem-se das flores, que são fervidas, para fazer chá, contra as cólicas, oligúrias e tosses. <br />
            <strong>Usos: </strong> Medicinal e decorativo
            <strong>Local de coleta:</strong>  Missal - PR <br />
            <strong>Nome do coletor:</strong> Johny Lamera <br />
            <strong>Data de coleta:</strong> 28/05/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}


        <Card>
          <Image src='https://images.unsplash.com/photo-1686842143609-a8c04d8f7c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header className='card-header'>Espinheira Santa</Card.Header>
            <Divider horizontal className='italic'>Maytenus ilicifolia</Divider>
            <Card.Meta>Data da Coleta: 28/05/2023</Card.Meta>
            <Card.Description>
              Uso medicinal - Recomendado para combate de acidez estomacal.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Espinheira Santa</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Maytenus ilicifolia</Header>
          <p><strong>Família:</strong> Celastraceae <br />
            <strong>Finalidade:</strong> É prescrita pela medicina popular no combate aos problemas de acidez estomacal, pois acalma as dores das úlceras e evita a fermentação e a formação de gases. <br />É utilizada também em banhos como cicatrizante das inflamações da pele
            <strong>Usos: </strong> Medicinal
            <strong>Local de coleta:</strong>  Missal - PR <br />
            <strong>Nome do coletor:</strong> Johny Lamera <br />
            <strong>Data de coleta:</strong> 28/05/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>

            {/*  -  - ---------- */}

        <Card>
          <Image src='https://images.unsplash.com/photo-1686842215450-5da70981866e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Louro</Card.Header>
            <Divider horizontal className='italic'>Laurus nobilis</Divider>
            <Card.Meta>Data da Coleta: 28/05/2023</Card.Meta>
            <Card.Description>
             Planta com foco condimentar utilizada na gastronomia.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Louro</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Laurus nobilis</Header>
          <p><strong>Família:</strong> Lauraceae <br />
            <strong>Finalidade:</strong> Utilizado como planta condimentar na cozinha de varios paises como Brasil e Índia.
            <strong>Usos: </strong> Condimentar e culinaria.
            <strong>Local de coleta:</strong>  Missal - PR <br />
            <strong>Nome do coletor:</strong> Johny Lamera <br />
            <strong>Data de coleta:</strong> 28/05/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>

            {/*  -  - ---------- */}

            {/* -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686841973947-00ecc3494587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Salvia</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta: 25/05/2023</Card.Meta>
            <Card.Description>
              Salvia é uma erva aromatica, medicinal ou ornamental.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Salvia</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Salvia rosmarinus</Header>
          <p><strong>Família:</strong> Lamiaceae <br />
            <strong>Finalidade:</strong> ajudar no tratamento do sistema nervoso central atuando como calmante, ajudando a manter o equilíbrio.
            <strong>Usos: </strong> Aromatica e medicinal.
            <strong>Local de coleta:</strong>  Missal - PR <br />
            <strong>Nome do coletor:</strong> Johny Lamera <br />
            <strong>Data de coleta:</strong> 28/05/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}

        <Card>
          <Image src='https://images.unsplash.com/photo-1686851211667-5f9b8e26d7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Carqueja</Card.Header>
            <Divider horizontal className='italic'>Baccharis trimera</Divider>
            <Card.Meta>Data da Coleta: 10/06/2023</Card.Meta>
            <Card.Description>
              Planta medicinal
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Carqueja</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Baccharis trimera</Header>
          <p><strong>Família:</strong> Asteraceae <br />
            <strong>Finalidade:</strong> controlo da glicemia, diabetes, hipercolesterolemia, diminuição da pressão arterial, combate da retenção de líquidos, <br /> fortalecimento do sistema imunitário, melhoramento das funções hepáticas, anti-inflamatório, auxiliar da gastrite e, no combate a vermes intestinais.
            <strong>Usos: </strong> Aromatica e medicinal. <br />
            <strong>Local de coleta:</strong>  UTFPR-SH <br />
            <strong>Nome do coletor:</strong> Johny Lamera e Matheus Antonelli<br />
            <strong>Data de coleta:</strong> 10/06/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        {/*  -  - ---------- */}
    </Card.Group>


    <Card.Group itemsPerRow={3} className='card-container'>


    <Card>
          <Image src='https://images.unsplash.com/photo-1686851606048-7bcc68d673dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Capim-limão</Card.Header>
            <Divider horizontal className='italic'>Cymbopogon citratus</Divider>
            <Card.Meta>Data da Coleta: 13/06/2023</Card.Meta>
            <Card.Description>
              Planta medicinal usada como digestivo e calmante suave utilizando suas folhas.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p><strong>Família:</strong> Poaceae <br />
            <strong>Finalidade:</strong> controlo da glicemia, diabetes, hipercolesterolemia, diminuição da pressão arterial, combate da retenção de líquidos, <br /> fortalecimento do sistema imunitário, melhoramento das funções hepáticas, anti-inflamatório, auxiliar da gastrite e, no combate a vermes intestinais.
            <strong>Usos: </strong> Aromatica e medicinal. <br />
            <strong>Local de coleta:</strong>  UTFPR-SH <br />
            <strong>Nome do coletor:</strong> Johny Lamera e Matheus Antonelli<br />
            <strong>Data de coleta:</strong> 13/06/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>

            {/* -  - ---------- */}

        <Card>
          <Image src='https://images.unsplash.com/photo-1686851286889-24cf7c42f632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Ginseng Brasileiro</Card.Header>
            <Divider horizontal className='italic'>Pfaffia glomerata</Divider>
            <Card.Meta>Data da Coleta: 13/06/2023</Card.Meta>
            <Card.Description>
            planta de pequeno porte, característica que permite o seu cultivo em vasos ou canteiros.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Ginseng Brasileiro</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Pfaffia glomerata</Header>
          <p><strong>Família:</strong> Amaranthaceae <br />
            <strong>Finalidade:</strong> Na medicina popular é prescrito em chás como um tônico estimulante, dando uma nova vitalidade ao organismo <br />
            <strong>Usos: </strong>medicinal. <br />
            <strong>Local de coleta:</strong>  UTFPR-SH <br />
            <strong>Nome do coletor:</strong> Johny Lamera e Matheus Antonelli<br />
            <strong>Data de coleta:</strong> 13/06/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}

        <Card>
          <Image src='https://images.unsplash.com/photo-1686851181503-29aec62714d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Figatil</Card.Header>
            <Divider horizontal className='italic'>Vernonia condensata Baker</Divider>
            <Card.Meta>Data da Coleta: 13/06/2023</Card.Meta>
            <Card.Description>
              Planta Medicinal utilizada contra disturbios do fígado.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
          <TransitionablePortal
            closeOnTriggerClick
            onOpen={this.handleOpen}
            onClose={this.handleClose}
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Fechar Informações' : 'Mais informações'}
                negative={open}
                positive={!open}
              />
            }
          >
        <Segment style={{ left: '0%', position: 'fixed', top: '50%', zIndex: 1000 }} >
          <Header className='card-header'>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p><strong>Família:</strong> Asteraceae <br />
            <strong>Finalidade:</strong> Contra distúrbios do fígado e do estômago, problemas intestinais e no combate a insuficiência dos rins e a inflamações. <br />
            <strong>Usos: </strong>medicinal. <br />
            <strong>Local de coleta:</strong>  UTFPR-SH <br />
            <strong>Nome do coletor:</strong> Johny Lamera e Matheus Antonelli<br />
            <strong>Data de coleta:</strong> 13/06/2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        {/* Losna -  - ---------- */}

    </Card.Group>
      </section>
    )
    }
 
}