import React from "react";
import { Menu } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';


export const V_header = () => {
    return(
        <Segment color="blue"size="large">
                <Menu secondary vertical>
                    <Menu.Item 
                        name='Home' active
                    />
                    <Menu.Item 
                        name='Gallery' link
                    />
                    <Menu.Item
                        name='Contact Us' link
                    />
                    <Menu.Item
                        name='About Us' link
                    />
                </Menu>
        </Segment>
    );   
}