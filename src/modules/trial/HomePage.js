import React, { Component } from 'react'
import {
    Container,
    Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class HomepageLayout extends Component {

    render() {
        return (
            <Container>
                <Segment.Group>
                    <Segment><Link to="/container">Container</Link></Segment>
                    <Segment><Link to="/textContainer">Text Container</Link></Segment>
                    <Segment><Link to="/stackableGrid">Stackable Grid</Link></Segment>
                    <Segment><Link to="/doublingGrid">Doubling Grid</Link></Segment>
                    <Segment><Link to="/doublingStackableGrid">Doubling Stackable Grid</Link></Segment>
                    <Segment><Link to="/nestedStackableGrid">Nested Stackable Grid</Link></Segment>
                    <Segment><Link to="/stackableGridContainer">Stackable Grid Container</Link></Segment>
                    <Segment><Link to="/doublingGridContainer">Doubling Grid Container</Link></Segment>
                    <Segment><Link to="/doublingStackableGridContainer">Doubling Stackable Grid Container</Link></Segment>
                    <Segment><h3><Link to="#">Device Adjustment</Link></h3></Segment>
                    <Segment><Link to="/deviceColumnWidth">Device Column Width</Link></Segment>
                    <Segment><Link to="/deviceVisibility">Device Visibility</Link></Segment>
                    <Segment><h3><Link to="#">Responsive Grid with Variations</Link></h3></Segment>
                    <Segment><Link to="/stackableDividedGrid">Stackable Divided Grid</Link></Segment>
                    <Segment><Link to="/stackableVerticallyDividedGrid">Stackable Vertically Divided Grid</Link></Segment>
                    <Segment><Link to="/celledStackableGrid">Celled Stackable Grid</Link></Segment>
                    <Segment><Link to="/consecutiveDoublingStackableGrid">Consecutive Doubling Stackable Grid</Link></Segment>
                    <Segment><Link to="/gridContainer">Grid Container</Link></Segment>
                    <Segment><h3><Link to="#">Responsive Elements</Link></h3></Segment>
                    <Segment><Link to="/responsiveVerticalDivider">Responsive Vertical Divider</Link></Segment>
                    <Segment><Link to="/responsiveTable">Responsive Table</Link></Segment>
                    <Segment><Link to="/responsiveMenu">Responsive Menu</Link></Segment>
                    <Segment><Link to="/responsiveItem">Responsive Item</Link></Segment>
                    <Segment><Link to="/responsiveSteps">Responsive Steps</Link></Segment>


                </Segment.Group>
            </Container>
        )
    }
}