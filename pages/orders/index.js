import { createStackNavigator } from '@react-navigation/stack';
import AddOrder from './AddOrder';
import OrderList from './OrderList';
const Stack = createStackNavigator();

function Order() {
  return (
    <Stack.Navigator initialRouteName="order_list" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="order_list" component={OrderList} />
        <Stack.Screen name="add_order" component={AddOrder} />
      </Stack.Navigator>
  )
}

export default Order