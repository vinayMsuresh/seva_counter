import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Seva from './pages/Seva';
import firebaseApp from './config/firebase';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import Order from './pages/orders';

const Tab = createBottomTabNavigator();
export default function App() {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  useEffect(async() => {
    onAuthStateChanged(auth,(user1)=>{
      if(user1){
        setUser(user1);
      }
      else{
        setUser(null);
      }
    });
  });
  const login = (<Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle:{
        fontWeight: '700',
        fontSize: 15,
        textAlignVertical: 'auto',
      },
      tabBarIconStyle: {display: 'none'}
    }}
  >
    <Tab.Screen name="Login" component={Login} options={{headerTitle: ()=><Header title={'Login'} />, tabBarLabel:'Login'}}/>
    <Tab.Screen name="Register" component={Register} options={{headerTitle: ()=><Header title={'Register'} />, tabBarLabel:'Register'}}/>
  </Tab.Navigator>);

  const home = (<Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle:{
        fontWeight: '700',
        fontSize: 15,
        textAlignVertical: 'auto',
      },
      tabBarIconStyle: {display: 'none'}
    }}
  >
    <Tab.Screen name="Home" component={Home} options={{headerTitle: ()=><Header title={'Home'} />, tabBarLabel:'Home'}}/>
    <Tab.Screen name="Setting" component={Settings} options={{headerTitle: ()=><Header title={'Settings'} />, tabBarLabel:'Settings'}}/>
    <Tab.Screen name="Seva" component={Seva} options={{headerTitle: ()=><Header title={'Seva'} />, tabBarLabel:'Seva'}}/>
    <Tab.Screen name="Order" component={Order} options={{headerTitle: ()=><Header title={'Order'} />, tabBarLabel:'Order'}}/>
  </Tab.Navigator>);
  return (
    <NavigationContainer>
      { user ? home : login}    
    </NavigationContainer>
  );
}

