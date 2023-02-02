import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Input, Menu} from 'semantic-ui-react';


export const Nav = (props) => {
    return(
        <Segment basic inverted color='blue' size='big'>
        <Grid>
        <Grid.Column width={5}>
            <div><h1>Welcome to {props.name} Page</h1></div>
        </Grid.Column>
        <Grid.Column  color='blue' width={11}>
            <div>
                <Menu secondary>
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
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </Grid.Column>
        </Grid> 
        </Segment>
    );   
}

