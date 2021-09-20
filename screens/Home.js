import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <SafeAreaView>
      <HeaderTabs />
    </SafeAreaView>
  )
}
