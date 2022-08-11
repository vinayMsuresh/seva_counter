import {View, Text, Alert} from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../styles/styles';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Button } from 'react-native-paper';
import firebaseApp from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
export default function Header({title}) {
    const [user, setUser] = useState(null);
    // const navigation = useNavigation();
    const auth = getAuth(firebaseApp);
    useEffect(async() => {
        onAuthStateChanged(auth,(user1)=>{
          if(user1){
            setUser(user1);
          }
        });
      },[]);

      const logout = () => {
        try{
        signOut(auth);
        Alert.alert('Logged out successfully');
        } catch(e){
            Alert.alert(e.message);
        }

      }
    return (
      <View style={styles.header}>      
          <Text style={styles.bolder}>{title}</Text>
          {user? <Button mode="contained" style={styles.headerBtn} color='red' onPress={logout}>Logout</Button>: 
          <Button mode="contained" style={styles.headerBtn} color='red' >Login</Button>}
      </View>
    )
  }