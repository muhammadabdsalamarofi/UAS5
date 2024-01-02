import Reacth, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
        <View style={{backgroundColor: '#f98441', flex: 1}}>
            <StatusBar backgroundColor="#f98441" barStyle="light-content" />
        </View>
    );
    }
}

export default App;