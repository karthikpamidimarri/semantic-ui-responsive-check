import React, { Component } from 'react'
import {
    Container,
    Segment
} from 'semantic-ui-react'

export default class TextContainer extends Component {

    render() {
        return (
            <Container text>
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