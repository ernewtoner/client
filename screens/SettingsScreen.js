import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';

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

    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
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
                            <Button full onPress={this._logout}>
                                <Text>Logout</Text>
                            </Button>
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
