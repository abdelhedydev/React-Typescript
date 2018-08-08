import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Education = () => (
    <Card.Group>
        <Card>
            <Card.Content>
                <Image floated='right' size='mini' src='https://media.licdn.com/dms/image/C4E0BAQFQSNYRneC-Fg/company-logo_200_200/0?e=2159024400&v=beta&t=Pl0juZmT7RiFX9hx0d-O4pre9Hlf5zHiH5FMCTjkiT8' />
                <Card.Header>Computer Science Licence</Card.Header>
                <Card.Description>
                    From <strong>2014</strong> to <strong>2017</strong>
                </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default Education
