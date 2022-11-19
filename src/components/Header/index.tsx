import React from 'react'
import {
  Container,
  Logo,
  Profile
} from './styles'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profile.png'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Profile source={profileImg} />
    </Container>
  )
}