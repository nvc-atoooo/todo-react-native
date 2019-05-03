import React from 'react';
import { ScrollView, View, StyleSheet, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Task extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.props.changeTextHandler}
          onSubmitEditing={this.props.addTask}
          value={this.props.text}
          placeholder="Add Task"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <ScrollView>
            {
                this.props.tasks.map(task => 
                    <CheckBox key={task.id}
                        title={task.text}
                        checked={task.completed}
                        onPress={() => this.props.toggleTask(task.id)}
                    />
                )
            }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    margin: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
  }
});