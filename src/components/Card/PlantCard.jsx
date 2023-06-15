import React, {Component} from 'react'
import { Card, Icon, Image, Button,TransitionablePortal,Header, Segment} from 'semantic-ui-react'
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
        <Card.Group itemsPerRow={2} className='card-container'>
        <Card>
          <Image src='https://images.unsplash.com/photo-1623613466226-30970499b058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome da Planta</Card.Header>
            <Card.Meta>Data da Coleta</Card.Meta>
            <Card.Description>
              Tipo de Planta e usos
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
          <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={
          <Button
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
          />
        }
      >
        <Segment
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
        >
          <Header>Nome da planta</Header>
          <p>Plantas medicinais podem ajudar a sociedade.</p>
          <p>To close, simply click the close button or click away</p>
        </Segment>
      </TransitionablePortal>
        </Card>
        

    </Card.Group>
      </section>
    )
    }
 
}