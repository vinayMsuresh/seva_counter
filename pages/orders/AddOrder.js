import { View, Text } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import React, {useState} from 'react'
import { useFormik, Form, Field } from 'formik';
import styles from '../../styles/styles';
import { PaperSelect } from 'react-native-paper-select';

export default function AddOrder({ navigation }) {
    const [colors, setColors] = useState({
        value: '',
        list: [
          { _id: '1', value: 'BLUE' },
          { _id: '2', value: 'RED' },
          { _id: '3', value: 'GREEN' },
          { _id: '4', value: 'YELLOW' },
          { _id: '5', value: 'BROWN' },
          { _id: '6', value: 'BLACK' },
          { _id: '7', value: 'WHITE' },
          { _id: '8', value: 'CYAN' },
        ],
        selectedList: [],
        error: '',
      });
    const initialValues = { name:'', seva_name:'', email:'', phone:'',rashi:'',nakshatra:'', gothra:''};
    const onSubmit = (values, submitProp) => {
        console.log(values);
        navigation.pop();
        // submitProp.resetForm();
    }
    const formik= useFormik({
        initialValues,
        onSubmit
    })
  return (
        <View style={styles.form}>
            <TextInput
                name='name'
                placeholder='Enter Name'
                style={{margin:3}}
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
            />
            <View>
           <PaperSelect
                label="Select Gender"
                value={colors.value}
                onSelection={(value) => {
                    setColors({
                    ...colors,
                    value: value.text,
                    selectedList: value.selectedList,
                    error: '',
                    });
                }}
                arrayList={[...colors.list]}
                selectedArrayList={colors.selectedList}
                errorText={colors.error}
                multiEnable={false}
                dialogTitleStyle={{ color: 'red' }}
                checkboxColor="yellow"
                checkboxLabelStyle={{ color: 'red', fontWeight: '700' }}
                textInputBackgroundColor="yellow"
                textInputColor="red"
            />
            </View>
            <TextInput
                name='email'
                placeholder='Enter Email'
                style={{margin:3}}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('emnail')}
            />
            <TextInput
                name='phone'
                placeholder='Enter Phone number'
                style={{margin:3}}
                onChangeText={formik.handleChange('phone')}
                onBlur={formik.handleBlur('phone')}
            />
            <TextInput
                name='rashi'
                placeholder='Enter Rashi'
                style={{margin:3}}
                onChangeText={formik.handleChange('rashi')}
                onBlur={formik.handleBlur('rashi')}
            />
            <TextInput
                name='nakshatra'
                placeholder='Enter Nakshatra'
                style={{margin:3}}
                onChangeText={formik.handleChange('nakshatra')}
                onBlur={formik.handleBlur('nakshatra')}
            />
            <TextInput
                name='gothra'
                placeholder='Enter Gothra'
                style={{margin:3}}
                onChangeText={formik.handleChange('gothra')}
                onBlur={formik.handleBlur('gothra')}
            />

            <Button 
                mode="contained" 
                style={{margin:5}} 
                color='red'
                type='submit'
                onPress={formik.handleSubmit} 
            >Add Seva</Button>
        </View>
  )
}