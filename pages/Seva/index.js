import { createStackNavigator } from '@react-navigation/stack';
import Seva_list from './Seva_list';
import AddSeva from './AddSeva';
import EditSeva from './EditSeva';
const Stack = createStackNavigator();

export default function Seva() {
  return (
    <Stack.Navigator initialRouteName="Seva_list" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Seva_list" component={Seva_list} />
      <Stack.Screen name="Add_Seva" component={AddSeva} />
      <Stack.Screen name="Edit_Seva" component={EditSeva} />
    </Stack.Navigator>
  );
}