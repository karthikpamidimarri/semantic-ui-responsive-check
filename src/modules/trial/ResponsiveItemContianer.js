import React, { Component } from 'react'
import {
    Container,
    Image,
    Item,Button,Icon,Label,
} from 'semantic-ui-react'


export default class ResponsiveItemContianer extends Component {

    render() {
        return (
            <Container>
                <Item.Group divided>
                    <Item>
                        <Item.Image src='/assets/images/wireframe/image.png' />
                        <Item.Content>
                            <Item.Header as='a'>Content Header</Item.Header>
                            <Item.Meta>
                                <span>Date</span>
                                <span>Category</span>
                            </Item.Meta>
                            <Item.Description>
                                A description which may flow for several lines and give context to the content.
                            </Item.Description>
                            <Item.Extra>
                                <Image
                                    avatar
                                    circular
                                    src='/assets/images/wireframe/square-image.png'
                                />
                                Username
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image src='/assets/images/wireframe/image.png' />
                        <Item.Content>
                            <Item.Header as='a'>Content Header</Item.Header>
                            <Item.Meta>
                                <span>Date</span>
                                <span>Category</span>
                            </Item.Meta>
                            <Item.Description>
                                A description which may flow for several lines and give context to the content.
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' primary>
                                    Primary
                                    <Icon name='right chevron' />
                                </Button>
                                <Label>Limited</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image src='/assets/images/wireframe/image.png' />
                        <Item.Content>
                            <Item.Header as='a'>Content Header</Item.Header>
                            <Item.Meta>
                                <span>Date</span>
                                <span>Category</span>
                            </Item.Meta>
                            <Item.Description>
                                A description which may flow for several lines and give context to the content.
                            </Item.Description>
                            <Item.Extra>
                                <Button primary floated='right'>
                                    Primary
                                    <Icon name='right chevron' />
                                </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>

        )
    }
}