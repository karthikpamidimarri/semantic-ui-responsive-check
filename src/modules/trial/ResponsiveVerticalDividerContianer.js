import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class ResponsiveVerticalDividerContianer extends Component {

    render() {
        return (
            <Grid container columns={2} divided relaxed stackable>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
            </Grid>
        )
    }
}