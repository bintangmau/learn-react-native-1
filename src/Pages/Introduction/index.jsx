import React from 'react'
import {  StyleSheet, Image, TouchableOpacity } from 'react-native'
import IndihomeLogo from '../../../assets/indihome-logo.jpg'

export default function Introduction({ navigation }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Profile', { name: "Jane" })}        
        >
            <Image 
                source={IndihomeLogo} 
                style={styles.logo}
                
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FE0000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 550
    },
    logo: {
        width: 300,
        height: 150
    }
});
