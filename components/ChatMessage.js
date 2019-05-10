import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content } from 'native-base';

export class ChatMessage extends React.Component {
    render() {
        const { text, users_id, created_at, currentUser_id, currentUser_name } = this.props;
        // Need to fetch display name for users other than self, put the below just as a placeholder
        return (
            <Content style={styles.content}>
                <Text style={users_id === currentUser_id ? styles.self : styles.user}>
                    {users_id === currentUser_id ? currentUser_name : users_id}
                </Text>
                <Text
                    style={
                        users_id === currentUser_id ? styles.messageSelf : styles.message
                    }>
                    {text}
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
