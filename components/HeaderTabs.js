import {React, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      <HeaderButton
        text="Pick up"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
    </View>
  )
}

const HeaderButton = ({text, btnColor, textColor, setActiveTab}) => (
<TouchableOpacity style={{
  backgroundColor: btnColor,
  paddingVertical: 6,
  paddingHorizontal: 16,
  borderRadius: 30
}}
onPress={() => setActiveTab(text)}
>
  <Text style={{color: textColor}}>{text}</Text>
</TouchableOpacity>
)
