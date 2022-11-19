import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito'

import theme from './src/theme'
import { Routes } from 'src/routes'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded 
        ? <Routes /> 
        : <Loading />}
    </ThemeProvider>
  )
}
