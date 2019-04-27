import React from 'react';
import { StyleSheet } from 'react-native';

import {
    Container,
    H2,
    Content,
    Button,
    Text,
    Item,
    Form,
    Label,
    Input
} from 'native-base';

// import { SignUpForm } from '../components/SignUpForm';

export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Emote'
    }

    submitForm = () => {
        // Validate form has proper input

        // Submit credentials

        // In promise response, if validated, direct to main page
        this.props.navigation.navigate('Main');
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <H2 style={styles.content}>Sign Up</H2>
                    <Form style={styles.content}>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Display Name</Label>
                            <Input/>
                        </Item>
                        <Item stackedLabel>
                            <Label>First Name</Label>
                            <Input/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Last Name</Label>
                            <Input/>
                        </Item>
                        <Button
                            full
                            style={styles.button}
                            onPress={this.submitForm}>
                            <Text>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    content: {
        marginTop: 10,
        textAlign: 'center'
    },
    button: {
        margin: 10
    }
});
