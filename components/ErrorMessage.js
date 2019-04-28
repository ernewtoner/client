import React from 'react';
import { Content, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export class ErrorMessage extends React.Component {
    render() {
        return (
            <Content style={styles.content}>
                {this.props.message ? (
                    <Text style={styles.message}>
                        {this.props.message}
                    </Text>
                ) : null}
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        padding: 10,
        textAlign: 'center'
    },
    message: {
        color: 'red'
    }
});
