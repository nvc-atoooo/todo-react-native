import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TaskList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    borderColor: '#ededed',
    opacity: 1,
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: '#43484d',
    fontWeight: 'bold'
  }
});