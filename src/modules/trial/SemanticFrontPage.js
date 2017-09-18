import React from 'react'
import {Button, Card, Divider,Container, Form, Grid, Header, Image, Message, Segment, Tab} from 'semantic-ui-react'

const panes = [
    { menuItem: 'Container', render: () => <Tab.Pane attached={false}><ContainerPage /></Tab.Pane> },
    { menuItem: 'TextContainer', render: () => <Tab.Pane attached={false}><TextContainerPage /></Tab.Pane> }
];
const ContainerPage = () => (
    <Container>
        <Segment.Group>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
        </Segment.Group>
    </Container>
);

const TextContainerPage = () => (
    <Container text>
        <Segment.Group>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
        </Segment.Group>
    </Container>
);

const SemanticFrontPage = () => (
    <Grid
        textAlign='center'
        className='top-level-view view-stores-list-page'
        columns={1}
        verticalAlign='middle'
    >
        <Grid.Column>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
        </Grid.Column>
    </Grid>
);

export default SemanticFrontPage;
