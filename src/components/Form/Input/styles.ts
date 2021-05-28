import { TextInput } from 'react-native'

import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  margin-top: ${RFValue(26)}px;
`

export const Label = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(14)}px;
  color: #4e3975;
  margin-bottom: 8px;
`

export const Error = styled.Text`
  color: #d93025;
  margin-bottom: ${RFValue(4)}px;
`

export const FormInput = styled(TextInput)`
  padding: ${RFValue(15)}px;
  border-radius: 10px;
  border: 1px solid #9883bf;
  color: #4e3975;
  background-color: #ffffff;
  font-size: ${RFValue(14)}px;
`
