import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class CelledStackableGridContainer extends Component {

    render() {
        return (
            <Grid celled container stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}