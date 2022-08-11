import React from 'react'
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { Formik } from 'formik';
import styles from '../../styles/styles'
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import firebaseApp from '../../config/firebase';
function AddSeva({navigation}) {

    const db = getFirestore(firebaseApp);

    const addSeva = async(data) => {
        try {
            await addDoc(collection(db, "sevas"), {
                seva_name: data.seva_name,
                seva_date: data.seva_date,
                description: data.description,
                price: data.price
            });
            Alert.alert("Seva added successfully");
            navigation.push("Seva_list");
        } catch (e) {
            Alert.alert("Error adding document: ", e);
        }
    }
  return (
    <View style={styles.container}>
        <Formik
            initialValues={{seva_name:'', seva_date:'', description:'', price:''}}
            onSubmit={async(values, actions)=>{
                await addSeva(values);
                actions.resetForm();
            }}
        >{
            (props) => (
                <View style={styles.form}>
                    <Text style={styles.bolder}> Add Seva</Text>
                    <TextInput
                        placeholder='Enter Seva Name'
                        style={{margin:3}}
                        onChangeText={props.handleChange('seva_name')}
                        onBlur={props.handleBlur('seva_name')}
                    />

                    <TextInput
                        placeholder='Enter Seva Date'
                        keyboardType='default'
                        style={{margin:3}}
                        onChangeText={props.handleChange('seva_date')}
                        onBlur={props.handleBlur('seva_date')}
                    />

                    <TextInput
                        placeholder='Enter Seva Description'
                        multiline
                        style={{margin:3}}
                        onChangeText={props.handleChange('description')}
                        onBlur={props.handleBlur('description')}
                    />

                    <TextInput
                        placeholder='Enter Seva Price'
                        keyboardType='numeric'
                        style={{margin:3}}
                        onChangeText={props.handleChange('price')}
                        onBlur={props.handleBlur('price')}
                    />

                    <Button mode="contained" style={{margin:5}} color='red' onPress={props.handleSubmit}>Add Seva</Button>
                </View>

            )
        }
        </Formik>
    </View>
  )
}

export default AddSeva