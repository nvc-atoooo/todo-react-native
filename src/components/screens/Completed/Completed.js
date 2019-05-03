import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import TaskList from '../../common/TaskList';

export default class Completed extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <ScrollView>
                {
                    this.props.tasks.map(task =>
                        <TaskList key={task.id}
                            text={task.text}
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
    }
  });