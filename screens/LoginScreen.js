import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { addMessage, setCurrentUser, setCurrentChat, addChatRoom } from "../redux/actions";

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
    View,
    ActionSheet
} from 'native-base';

import { ErrorMessage } from '../components/ErrorMessage';
import { baseUrl } from '../constants/api';
import { handleResponse, storeData } from '../helpers/api';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Emote',
        headerBackTitle: 'Back'
    };

    state = {
        email: '',
        password: '',
        errorMessage: ''
    };

    addMessage = () => (this.props.addMessage(1, "Test", "David", true, { David: ':joy:', Nick: ':laughing:' } ));
    setCurrentUser = () => (this.props.setCurrentUser("David"));
    setCurrentChat = () => (this.props.setCurrentChat(1));
    addChatRoom1= () => (this.props.addChatRoom(
        1,
        'Tea Chats',
        ['David', 'Nick']
    ));
    addChatRoom2= () => (this.props.addChatRoom(
        1,
        'Coffee Chats',
        ['David', 'Ryan']
    ));

    submitForm = async () => {
        const { email, password } = this.state;

        this.setState({
            errorMessage: ''
        });

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
            .then(handleResponse)
            .then(storeData)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(({ message }) => {
                this.setState({
                    errorMessage: message
                });
            });
    };

    render() {
        const { errorMessage } = this.state;
        console.log(this.props.count);
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
                    <Button
                            style={styles.button}
                            onPress={this.addMessage}>
                            <Text>Add message</Text>
                    </Button>
                    <Button
                            style={styles.button}
                            onPress={this.setCurrentUser}>
                            <Text>Set current user</Text>
                    </Button>
                    <Button
                            style={styles.button}
                            onPress={this.setCurrentChat}>
                            <Text>Set current chat</Text>
                    </Button>
                    <Button
                            style={styles.button}
                            onPress={this.addChatRoom1}>
                            <Text>Add chatroom 1</Text>
                    </Button>
                    <Button
                            style={styles.button}
                            onPress={this.addChatRoom2}>
                            <Text>Add chatroom 2</Text>
                    </Button>
                    <ErrorMessage message={errorMessage} />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
      //count: state.count
      //history: state.messages,
      //userID: state.userID
    };
}

const mapDispatchToProps = {
    addMessage,
    setCurrentUser,
    setCurrentChat,
    addChatRoom
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);