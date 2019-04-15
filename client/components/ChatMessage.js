import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content } from 'native-base';

export class ChatMessage extends React.Component {
    render() {
        const { message, user, isSelf } = this.props;
        return (
            <Content style={styles.content}>
                <Text style={isSelf ? styles.self : styles.user}>
                    {user}
                </Text>
                <Text
                    style={
                        isSelf ? styles.messageSelf : styles.message
                    }>
                    {message}
                </Text>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        margin: 10
    },
    user: {
        textAlign: 'left'
    },
    self: {
        textAlign: 'right'
    },
    messageSelf: {
        backgroundColor: '#007AFF',
        color: 'white',
        padding: 10
    },
    message: {
        backgroundColor: 'grey',
        color: 'white',
        padding: 10
    }
});
