import React from 'react';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TaskScreen from '../components/screens/Task';
import ActiveScreen from '../components/screens/Active';
import CompletedScreen from '../components/screens/Completed';
import TabBarIcon from '../components/common/TabBarIcon';

const TaskStack = createStackNavigator({
    Task: {
        screen: TaskScreen,
        navigationOptions: {
            title: 'Task'
        }
    }
});
TaskStack.navigationOptions = {
    title: 'Task',
    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-list"/>
}

const ActiveStack = createStackNavigator({
    Active: {
        screen: ActiveScreen,
        navigationOptions: {
            title: 'Active'
        }
    }
});
ActiveStack.navigationOptions = {
    tabBarLabel: 'Active',
    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-information-circle-outline"/>
}

const CompletedStack = createStackNavigator({
    Completed: {
        screen: CompletedScreen,
        navigationOptions: {
            title: 'Completed'
        }
    }
});
CompletedStack.navigationOptions = {
    tabBarLabel: 'Completed',
    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-checkbox-outline"/>
}

export default createBottomTabNavigator({
    TaskStack,
    ActiveStack,
    CompletedStack
})