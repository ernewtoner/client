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
    Input,
    View
} from 'native-base';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Emote',
        headerBackTitle: 'Back'
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
                    <H2 style={styles.content}>Login</H2>
                    <Form style={styles.content}>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}/>
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
                                this.props.navigation.navigate('SignUp')}>
                            Sign up now
                        </Text>
                    </Text>
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
