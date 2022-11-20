import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

type TStyleProps = {
  isPositive: boolean
}

export const Container = styled.View<TStyleProps>`
  width: 100%;
  height: 102px;

  background-color: ${({ theme, isPositive }) => (
    isPositive 
      ? theme.COLORS.GREEN_LIGHT 
      : theme.COLORS.RED_LIGHT
  )};

  align-items: center;
  justify-content: center;

  padding: 20px 16px;
  border-radius: 10px;
`

export const PercentualNumberText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const IconArrowUpRight = styled(ArrowUpRight).attrs(() => ({
  size: 24
}))`
  position: absolute;
  right: 10px;
  top: 10px;
`