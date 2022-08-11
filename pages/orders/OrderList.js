import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const OrderList = ({ navigation }) => {
  return (
    <View>
      <Text>OrderList</Text>
      <Button 
          mode="contained" 
          style={{marginHorizontal: 120, marginVertical: 10}} 
          color='red' 
          onPress={()=>navigation.push('add_order')}
          >
            Add Order
        </Button>
    </View>
  )
}

export default OrderList