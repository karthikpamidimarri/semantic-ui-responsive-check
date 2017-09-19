import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class DeviceColumnWidthContainer extends Component {

    render() {
        return (
            <Grid>
                <Grid.Column computer={3} mobile={6} tablet={9}>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column computer={9} mobile={6} tablet={3}>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column computer={9} mobile={6} tablet={3}>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column computer={3} mobile={6} tablet={9}>
                    <Segment>Content</Segment>
                </Grid.Column>
            </Grid>
        )
    }
}