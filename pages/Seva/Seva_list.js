import React, { useEffect } from 'react'
import {View, Text,  FlatList, DevSettings, Alert} from 'react-native';
import {Button,Card} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; 
import styles from '../../styles/styles';
import firebaseApp from '../../config/firebase';
import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"; 
import { MaterialIcons, Entypo  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
function Seva_list({navigation}) {
    const [sevas, setSevas] = React.useState([]);
    const db = getFirestore(firebaseApp);

    useEffect(async()=> {
      try{
        let arr = [];
        const querySnapshot = await getDocs(collection(db, "sevas"));
        querySnapshot.forEach((doc) => {
          let obj = {...doc.data(), id: doc.id,};
          arr.push(obj);
        });
        console.log('array',arr);
        setSevas(arr);
      }
      catch(e) {
        Alert.alert('Error', e);
      }
    },[]);
    const deleteTodo = async(id) => {
      try{
        await deleteDoc(doc(db, 'sevas', id));
        Alert.alert("Seva deleted successfully");
        DevSettings.reload();
      } catch(e) {
        Alert.alert(e.message);
      }
    }


    const RightContent = ({item}) => (<View 
      style={{flexDirection:'row'}}
      >
        <Entypo 
          name="edit" 
          size={24} 
          color="black" 
          style={{marginRight:20}} 
          onPress={()=>navigation.push('Edit_Seva', item)}
        />
        <MaterialIcons 
          name="delete" size={24} 
          color="black" 
          onPress={()=>deleteTodo(item.id)} 
        />
      </View>);
  return (
    <View style={styles.container}>
        <Text style={styles.bolder}> Welcome to the Seva page</Text>

        <Button 
          mode="contained" 
          style={{marginHorizontal: 120, marginVertical: 10}} 
          color='red' 
          onPress={()=>navigation.push('Add_Seva')}
          >
            Add Seva
          </Button>

        <FlatList 
        keyExtractor={(item)=> item.id}
        data={sevas}
        renderItem = {({item})=>(
            <Card style={{marginVertical: 6, marginHorizontal: 15, paddingRight: 10}}>
              <Card.Title 
                title={item.seva_name} 
                right={()=>RightContent({item})}
              />
              <Card.Content style={{alignItems:'center'}}>
                <Text>
                  Date: {item.seva_date} Price: {item.price}
                </Text>
              </Card.Content>
            </Card>
        )}
        />
    </View>
  )
}

export default Seva_list