import React from "react";
import { Container, Header } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { V_header } from "../V_header/V_header";

export const Body = () => {
    return(
        <Grid>
            <Grid.Column width={4}>
                <V_header />
            </Grid.Column>
            <Grid.Column width={12}>
                <Container text h>
                    <Header as={'h1'}>Personal Blog</Header>
                    <Header as={'h2'}>Web Development</Header>
                    <p>
                    For larger organizations and businesses, Web development teams can consist of hundreds of people 
                    Web developers and follow standard methods like Agile methodologies while developing Web sites. 
                    Smaller organizations may only require a single permanent or contracting developer, or secondary 
                    assignment to related job positions such as a graphic designer or information systems technician.
                     Web development may be a collaborative effort between departments rather than the domain of a 
                     designated department. There are three kinds of Web developer specialization: front-end developer, 
                     back-end developer, and full-stack developer. Front-end developers are responsible for behavior 
                     and visuals that run in the user browser, while back-end developers deal with the servers. Since the 
                     commercialization of the Web with Tim developing the World Wide Web at CERN, the industry 
                     has boomed and has become one of the most used technologies ever.
                    </p>
                </Container>
            </Grid.Column>
        </Grid>
    );
}