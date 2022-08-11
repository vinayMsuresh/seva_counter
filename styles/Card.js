import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}</View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card:{
        marginHorizontal: 3,
        marginVertical: 4,
        borderRadius: 8,
        elevation: 3,
        shadowOffset:{width: 3, height:2},
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        backgroundColor: 'lightblue'
    },
    cardContent:{
        marginHorizontal: 20,
        marginVertical: 25
    }
})