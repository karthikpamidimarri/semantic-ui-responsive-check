import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class NestedStackableGrid extends Component {

    render() {
        return (
            <Grid columns={2}>
                <Grid.Column>
                    <Grid columns={2} doubling stackable>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={3} doubling stackable>
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
                </Grid.Column>
            </Grid>
        )
    }
}