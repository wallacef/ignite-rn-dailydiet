import React from 'react'

import { Header } from '@components/Header'
import { PercentualCard } from '@components/PercentualCard'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <PercentualCard 
        isPositive
        percentual='90,86%'
      />
    </Container>
  )
}