import React, {Component, useState} from 'react'
import { Card, Icon, Image, Button,TransitionablePortal,Header, Segment,Divider} from 'semantic-ui-react'
import '../../App.css'
const src ='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80'


export default class PlantCard extends Component {

  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })


  render() {
    const { open } = this.state
    return (
      <section id='featured' className='featured'>
        <h2>Plantas coletadas</h2>
        <Card.Group itemsPerRow={3} className='card-container'>
        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Alecrim</Card.Header>
            <Card.Meta>Coletado dia: 01/06/2023</Card.Meta>
            <Card.Description>
              Erva aromática comum
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
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>Usos</p>
        </Segment>
      </TransitionablePortal>
        </Card>

        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
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
          <Image src='' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
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
          <Image src='https://drive.google.com/file/d/1h1S8CtE9OBgeeqiVLr0NhfYSdZ9F226o/view?usp=drive_link' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
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
        

    </Card.Group>
      </section>
    )
    }
 
}