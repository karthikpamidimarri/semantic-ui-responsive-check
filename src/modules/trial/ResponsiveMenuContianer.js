import React, { Component } from 'react'
import {
    Container,
    Menu,Image
} from 'semantic-ui-react'


export default class ResponsiveMenuContianer extends Component {

    render() {
        return (
            <Container>
                <Menu stackable>
                    <Menu.Item>
                        <Image src='/logo.png' />
                    </Menu.Item>
                    <Menu.Item>Features</Menu.Item>
                    <Menu.Item>Testimonials</Menu.Item>
                    <Menu.Item>Sign-in</Menu.Item>
                </Menu>
            </Container>
        )
    }
}