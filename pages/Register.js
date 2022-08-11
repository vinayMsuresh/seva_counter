import React from 'react'
import {Formik} from 'formik';
import {TextInput, Button, Avatar} from 'react-native-paper';
import {View, Text, Alert,} from 'react-native';
import styles from '../styles/styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from '../config/firebase';

function Register({navigation}) {
    const auth = getAuth(firebaseApp); 
    const registerUser = async(values) => {
        try{
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            Alert.alert('Logged in successfully');
        } catch (e) {
            console.log(e);
            Alert.alert(e.message);
        }
    }
  return (
    <View style={styles.container}>
        <Avatar.Image size={80} style={styles.im1} source={require('../assets/download.png')} />
        <Formik
            initialValues={{tname:'',address:'',phone:'',email:'',password:'', cpassword:''}}
            onSubmit={(values, actions)=>{
                registerUser(values)
                actions.resetForm();
            }}
        >{
            (props) => (
                <View style={styles.form}>
                    <TextInput
                        placeholder='Enter temple name'
                        style={{margin:3}}
                        onChangeText={props.handleChange('tname')}
                        value={props.values.tname}
                        onBlur={props.handleBlur('tname')}
                    />
                    <TextInput
                        placeholder='Enter Email'
                        style={{margin:3}}
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        onBlur={props.handleBlur('email')}
                    />
                    <TextInput
                        placeholder='Enter temple Address'
                        onChangeText={props.handleChange('address')}
                        style={{margin:3}}
                        value={props.values.address}
                        multiline
                        onBlur={props.handleBlur('address')}
                    />
                    <TextInput
                        placeholder='Enter phone number'
                        style={{margin:3}}
                        onChangeText={props.handleChange('phone')}
                        value={props.values.phone}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('phone')}
                    />
                    <TextInput
                        placeholder='Enter Password'
                        onChangeText={props.handleChange('password')}
                        style={{margin:3}}
                        value={props.values.password}
                        secureTextEntry
                        onBlur={props.handleBlur('password')}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder='Confirm Password'
                        onChangeText={props.handleChange('cpassword')}
                        style={{margin:3}}
                        value={props.values.cpassword}
                        onBlur={props.handleBlur('cpassword')}
                    />

                    <Button mode="contained" style={{margin:3}} color='red' onPress={props.handleSubmit}>Submit</Button>
                </View>
            )
        }

        </Formik>
    </View>
  )
}

export default Register