import React from 'react'
import { useTheme } from 'styled-components/native'
import {
  IconArrowUpRight,
  Container,
  Description,
  PercentualNumberText
} from './styles'

type TProps = {
  isPositive?: boolean
  percentual: string
}

export function PercentualCard({ isPositive = true, percentual }: TProps) {
  const { COLORS } = useTheme()

  return (
    <Container isPositive={isPositive}>
      <IconArrowUpRight 
        color={isPositive 
          ? COLORS.GREEN_DARK 
          : COLORS.RED_DARK}
      />
      <PercentualNumberText>
        {percentual}
      </PercentualNumberText>
      <Description>
        das refeições dentro da dieta
      </Description>
    </Container>
  )
}