import React, { Component } from 'react'
import {
    Container,
    Segment
} from 'semantic-ui-react'


export default class ContainerLayout extends Component {

    render() {
        return (
            <Container>
                <Segment.Group>
                    <Segment>Content</Segment>
                    <Segment>Content</Segment>
                    <Segment>Content</Segment>
                    <Segment>Content</Segment>
                </Segment.Group>
            </Container>
        )
    }
}