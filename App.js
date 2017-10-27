import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView } from 'react-native';

 const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2
 });

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dataSource: ds.cloneWithRows([]),
        };
    }

    _onAddItem() {
        const task = this.state.text;
        this.setState({
            text: '',
            dataSource: ds.cloneWithRows([task])
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 40, height:40}}>Example TODO app</Text>
        <TextInput
          style={{height: 40, width: 400, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button onPress={this._onAddItem.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


