import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack' 

import { Home } from '@screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

const options: NativeStackNavigationOptions = {
  headerShown: false
}

export function AppRouter() {
  return (
    <Navigator
      initialRouteName='home'
      screenOptions={options}
    >
      <Screen 
        name='home'
        component={Home}
      />
    </Navigator>
  )
}