import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import {
    Container,
    Header,
    Content,
    Left,
    Right,
    Body,
    Icon,
    Button,
    Title
} from 'native-base';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <Container>
                        <Header>
                            <Left>
                                <Button transparent>
                                    <Icon name="menu" />
                                </Button>
                            </Left>
                            <Body>
                                <Title>Settings</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Content>
                            <Text>Settings here...</Text>
                        </Content>
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30
    }
});
