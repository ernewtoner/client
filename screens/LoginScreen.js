import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';

import {
    Container,
    H2,
    Content,
    Button,
    Text,
    Item,
    Form,
    Label,
    Input,
    View
} from 'native-base';

import { ErrorMessage } from '../components/ErrorMessage';
import { baseUrl } from '../constants/api';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Emote',
        headerBackTitle: 'Back'
    };

    state = {
        email: '',
        password: '',
        errorMessage: ''
    };

    submitForm = async () => {
        const { email, password } = this.state;

        // Validate form has proper fields
        if (!email || !password) {
            this.setState({
                errorMessage:
                    'You must enter your Email and Password.'
            });
            return;
        }
        const data = {
            email,
            password
        };

        // Submit credentials
        fetch(`${baseUrl}login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error(
                        'There was an error, please try again.'
                    );
                }
            })
            .then(({ access_token, user }) => {
                try {
                    const userData = [
                        ['userToken', access_token],
                        ['user', JSON.stringify(user)]
                    ];
                    AsyncStorage.multiSet(userData);
                    this.props.navigation.navigate('Main');
                } catch (error) {
                    console.log('Error setting data');
                }
            })
            .catch(({ message }) => {
                this.setState({
                    errorMessage: message
                });
            });
    };

    render() {
        const { errorMessage } = this.state;
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <H2 style={styles.content}>Login</H2>
                    <Form style={styles.content}>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) =>
                                    this.setState({ email })
                                }
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                onChangeText={(password) =>
                                    this.setState({ password })
                                }
                            />
                        </Item>
                        <Button
                            full
                            style={styles.button}
                            onPress={this.submitForm}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                    <Text style={styles.content}>
                        Not registered?{' '}
                        <Text
                            style={styles.link}
                            onPress={() =>
                                this.props.navigation.navigate(
                                    'SignUp'
                                )
                            }>
                            Sign up now
                        </Text>
                    </Text>
                    <ErrorMessage message={errorMessage} />
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
    link: {
        color: 'rgb(49,125,246)'
    },
    button: {
        margin: 10
    }
});
