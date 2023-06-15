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
          <p>Serve para o consumo em forma em forma de chá é tempero. Utilizado também como repelente natural contra insetos é também e utilizado na fabricação de produtos químicos <br />
            Local de coleta: UTFPR- SH <br />
            Nome do coletor: Matheus Antonelli <br />
            Data de coleta: 01 /06 / 2023</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* Alecrim -  - ---------- */}

            {/* BOLDO -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837699603-1c88da19bb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Boldo</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* BOLDO -  - ---------- */}

            {/* ERVA CIDREIRA -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686839469004-81457c0a8b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} className='img-card'/>
          <Card.Content>
            <Card.Header>Erva Cidreira</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* ERVA CIDREIRA -  - ---------- */}
            {/* Losna -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1686837999742-7661eeec80ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Losna</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>

        <Card>
          <Image src='' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/* Losna -  - ---------- */}
            {/*  -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        {/* -  - ---------- */}

        {/*  -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}


        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>

            {/*  -  - ---------- */}

        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>

            {/*  -  - ---------- */}
            {/* -  - ---------- */}
        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}

        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        {/*  -  - ---------- */}


        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>

            {/* -  - ---------- */}

        <Card>
          <Image src='' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
            {/*  -  - ---------- */}

        <Card>
          <Image src='https://drive.google.com/file/d/1h1S8CtE9OBgeeqiVLr0NhfYSdZ9F226o/view?usp=drive_link' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Divider horizontal className='italic'>Salvia rosmarinus</Divider>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos - POUCO TEXTO
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
          <Header>Nome da planta</Header>
          <Divider horizontal>Nome Cientifico</Divider>
          <Header className='italic'>Nome cientifico:</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        {/* Losna -  - ---------- */}

    </Card.Group>
      </section>
    )
    }
 
}