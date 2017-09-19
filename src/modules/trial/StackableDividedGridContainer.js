import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class StackableDividedGridContainer extends Component {

    render() {
        return (
            <Grid columns={2} container divided stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Content</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
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