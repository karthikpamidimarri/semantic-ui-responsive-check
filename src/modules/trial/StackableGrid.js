import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class StackableGrid extends Component {

    render() {
        return (
            <Grid columns={2} stackable>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
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
                <Grid.Column width={10}>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Segment>Content</Segment>
                </Grid.Column>
            </Grid>
        )
    }
}