import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 

import { Home } from '@screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRouter() {
  return (
    <Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name='home'
        component={Home}
      />
    </Navigator>
  )
}