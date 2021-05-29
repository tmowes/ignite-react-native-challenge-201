import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Input, Icon } from './styles'

export function SearchBar(props: TextInputProps) {
  return (
    <Container>
      <Input {...props} placeholderTextColor="#9883BF" />
      <Icon name="search" />
    </Container>
  )
}
