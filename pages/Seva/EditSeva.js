import React from 'react'
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { Formik } from 'formik';
import styles from '../../styles/styles'
import { collection, updateDoc, getFirestore, doc } from "firebase/firestore"; 
import firebaseApp from '../../config/firebase';
function EditSeva({route, navigation}) {
    const item = route.params;
    const db = getFirestore(firebaseApp);

    const editSeva = async(data) => {
        try {
            const sevaRef = doc(db, 'sevas', item.id);
            await updateDoc(sevaRef, {
                seva_name: data.seva_name,
                seva_date: data.seva_date,
                description: data.description,
                price: data.price
            });
            Alert.alert("Seva Updated successfully");
            navigation.push("Seva_list");
        } catch (e) {
            Alert.alert("Error adding document: ", e);
        }
    }
  return (
    <View style={styles.container}>
        <Formik
            initialValues={{seva_name: item.seva_name, seva_date: item.seva_date, 
                description: item.description, price: item.price}}
            onSubmit={async(values, actions)=>{
                console.log(values);
                await editSeva(values);
                actions.resetForm();
            }}
        >{
            (props) => (
                <View style={styles.form}>
                    <Text style={styles.bolder}> Update Seva</Text>
                    <TextInput
                        placeholder='Enter Seva Name'
                        style={{margin:3}}
                        value={props.values.seva_name}
                        onChangeText={props.handleChange('seva_name')}
                        onBlur={props.handleBlur('seva_name')}
                    />

                    <TextInput
                        placeholder='Enter Seva Date'
                        style={{margin:3}}
                        value={props.values.seva_date}
                        onChangeText={props.handleChange('seva_date')}
                        onBlur={props.handleBlur('seva_date')}
                    />

                    <TextInput
                        placeholder='Enter Seva Description'
                        multiline
                        style={{margin:3}}
                        value={props.values.description}
                        onChangeText={props.handleChange('description')}
                        onBlur={props.handleBlur('description')}
                    />

                    <TextInput
                        placeholder='Enter Seva Price'
                        keyboardType='numeric'
                        style={{margin:3}}
                        value={props.values.price}
                        onChangeText={props.handleChange('price')}
                        onBlur={props.handleBlur('price')}
                    />

                    <Button mode="contained" style={{margin:5}} color='red' onPress={props.handleSubmit}>Edit Seva</Button>
                </View>

            )
        }
        </Formik>
    </View>
  )
}

export default EditSeva