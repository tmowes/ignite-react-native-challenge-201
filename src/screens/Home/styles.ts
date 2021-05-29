import { FlatList } from 'react-native'

import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { LoginDataProps } from './types'

export const Container = styled.View`
  flex: 1;
  background-color: #4e3975;
  padding: 0 27px;
`

export const LoginList = styled(FlatList as new () => FlatList<LoginDataProps>).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(38)}px;
  margin-bottom: ${RFValue(22)}px;
`

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const EmptyListMessage = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins_500Medium';
  color: #9883bf;
`
