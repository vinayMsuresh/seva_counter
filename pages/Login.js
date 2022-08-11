import React from 'react'
import {View, Text, Alert} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import { Formik } from 'formik';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import firebaseApp from '../config/firebase';
function Login() {
    const auth = getAuth(firebaseApp);
    const loginUser = async(values) => {
        try{
            await signInWithEmailAndPassword(auth, values.email, values.password);
            await AsyncStorage.setItem('user',JSON.stringify(values));
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
            initialValues={{email:'', password:''}}
            onSubmit={(values, actions)=>{
                console.log(values);
                loginUser(values)
                actions.resetForm();
            }}
        >{
            (props) => (
                <View style={styles.form}>
                    <TextInput
                        placeholder='Enter Email'
                        style={{margin:3}}
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                    />

                    <TextInput
                        placeholder='Enter Password'
                        secureTextEntry
                        style={{margin:3}}
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                    />

                    <Button mode="contained" style={{margin:5}} color='red' onPress={props.handleSubmit}>Login</Button>
                </View>

            )
        }
        </Formik>
    </View>
  )
}

export default Login