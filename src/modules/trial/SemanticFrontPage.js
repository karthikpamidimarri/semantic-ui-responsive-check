import React from 'react'
import {Button, Card, Divider,Container, Form, Grid, Header, Image, Message, Segment, Tab} from 'semantic-ui-react'

const panes = [
    { menuItem: 'Container', render: () => <Tab.Pane attached={false}><ContainerPage /></Tab.Pane> },
    { menuItem: 'TextContainer', render: () => <Tab.Pane attached={false}><TextContainerPage /></Tab.Pane> },
    { menuItem: 'Stackable Grid', render: () => <Tab.Pane attached={false}><StackableGridPage /></Tab.Pane> },/*,
    { menuItem: 'Doubling Grid', render: () => <Tab.Pane attached={false}><DoublingGridPage1 /></Tab.Pane> }
    { menuItem: 'Doubling Stackable Grid', render: () => <Tab.Pane attached={false}><DoublingStackableGrid/></Tab.Pane> },*/
    { menuItem: 'Grid Container', render: () => <Tab.Pane attached={false}><GridContainer/></Tab.Pane> },
    { menuItem: 'Responsive Vertical Divider', render: () => <Tab.Pane attached={false}><ResponsiveVerticalDivider/></Tab.Pane> }



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

const StackableGridPage = () =>(
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
);

const GridContainer = () => (
    <Grid columns={3} container>
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
);
const ResponsiveVerticalDivider = () =>(
    <Grid container columns={2} divided relaxed stackable>
        <Grid.Column>
            <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment>Content</Segment>
        </Grid.Column>
    </Grid>
);
/*const DoublingGridPage1 = () =>{
    <Grid columns={3} doubling>
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
};

const DoublingStackableGrid =() =>{
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
}*/

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
