import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class ConsecutiveDoublingStackableGridContainer extends Component {

    render() {
        return (
            <div>
            <Grid columns={3} container doubling stackable>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
            </Grid>
            <Grid columns={3} container doubling stackable>
        <Grid.Column>
        <Segment>Content</Segment>
    </Grid.Column>
        <Grid.Column>
            <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
            </Grid>
            </div>
        )
    }
}