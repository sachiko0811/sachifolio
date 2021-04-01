import React from 'react'
import { Card, Button, CardGroup, Container } from 'react-bootstrap'
// import { img } from './works-img/cricket.png'

const Works = () => {

    return (
        <Container>
        <CardGroup className="card-group">
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img src="public/images/memoApp.png" variant="top" alt="photo" />
                <Card.Body>
                    <Card.Title>React</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="https://github.com/sachiko0811/MemoApp">
                    <Button 
                    variant="primary"
                    // onClick={goWebsite}
                    >WEBSITE</Button>
                    </Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="cards">
                <Card.Img variant="top" alt="photo" />
                <Card.Body>
                    <Card.Title>HTML, CSS, JS</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">WEBSITE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="cards">
                <Card.Img variant="top" alt="photo" />
                <Card.Body>
                    <Card.Title>PHP, WordPress</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">WEBSITE</Button>
                </Card.Body>
            </Card>

            </CardGroup>
        </Container>
    )
}

export default Works