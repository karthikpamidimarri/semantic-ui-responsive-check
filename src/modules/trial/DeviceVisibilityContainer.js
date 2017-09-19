import React, { Component } from 'react'
import {
    Segment,
    Grid
} from 'semantic-ui-react'


export default class DeviceVisibilityContainer extends Component {

    render() {
        return (
            <Grid columns={4}>
                <Grid.Column only='widescreen' widescreen={10}>
                    <Segment>Widescreen</Segment>
                </Grid.Column>
                <Grid.Column only='widescreen' widescreen={6}>
                    <Segment>Widescreen</Segment>
                </Grid.Column>
                <Grid.Column only='large screen' largeScreen={6}>
                    <Segment>Large Screen</Segment>
                </Grid.Column>
                <Grid.Column only='large screen' largeScreen={10}>
                    <Segment>Large Screen</Segment>
                </Grid.Column>
                <Grid.Column only='mobile tablet' mobile={8} tablet={8}>
                    <Segment>Tablet and Mobile</Segment>
                </Grid.Column>
                <Grid.Column only='mobile tablet' mobile={8} tablet={8}>
                    <Segment>Tablet and Mobile</Segment>
                </Grid.Column>
                <Grid.Column only='mobile' mobile={16}>
                    <Segment>Mobile</Segment>
                </Grid.Column>
                <Grid.Row only='computer' columns={2}>
                    <Grid.Column>
                        <Segment>Computer and Up</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Computer and Up</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Column only='tablet'>
                    <Segment>Tablet Only Content</Segment>
                </Grid.Column>
                <Grid.Column only='tablet'>
                    <Segment>Tablet Only Content</Segment>
                </Grid.Column>
                <Grid.Column only='tablet'>
                    <Segment>Tablet Only Content</Segment>
                </Grid.Column>
                <Grid.Column only='tablet'>
                    <Segment>Tablet Only Content</Segment>
                </Grid.Column>
            </Grid>

        )
    }
}