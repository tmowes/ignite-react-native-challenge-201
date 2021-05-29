import React, { useState, useCallback, useEffect } from 'react'

import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SearchBar } from '../../components/SearchBar'
import { LoginDataItem } from '../../components/LoginDataItem'
import { Container, LoginList, EmptyListContainer, EmptyListMessage } from './styles'
import { LoginDataProps } from './types'

export function Home() {
  const [searchListData, setSearchListData] = useState<LoginDataProps[]>([])
  const [data, setData] = useState<LoginDataProps[]>([])

  const loadData = async () => {
    try {
      const storageKey = '@passmanager'
      const result = await AsyncStorage.getItem(`${storageKey}:logins`)
      const logins = result ? (JSON.parse(result) as LoginDataProps[]) : []
      setSearchListData(logins)
      setData(logins)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [])
  )

  function handleFilterLoginData(search: string) {
    if (search !== '') {
      const dataFiltered = data.filter(item => item.title.includes(search))
      setSearchListData(dataFiltered)
    } else {
      setSearchListData(data)
    }
  }

  return (
    <Container>
      <SearchBar
        placeholder="Pesquise pelo nome do serviço"
        onChangeText={value => handleFilterLoginData(value)}
      />

      <LoginList
        keyExtractor={item => item.id}
        data={searchListData}
        ListEmptyComponent={
          <EmptyListContainer>
            <EmptyListMessage>Nenhum item a ser mostrado</EmptyListMessage>
          </EmptyListContainer>
        }
        renderItem={({ item: loginData }) => (
          <LoginDataItem
            title={loginData.title}
            email={loginData.email}
            password={loginData.password}
          />
        )}
      />
    </Container>
  )
}
