import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableHighlight } from 'react-native'
import { Icon, SocialIcon } from 'react-native-elements'
import Hr from "react-native-hr-component";

// IMAGE
import IndihomeLogo from '../../../assets/indihome-logo.jpg'

export default function Login({ navigation }) {
    const renderIcon = () => {
        return (
            <Icon 
                name='email'
            />
        )
    }
    return (
        <View>

            {/* UPPER BOX */}
            <View style={styles.containerUp}>
                <Image 
                    source={IndihomeLogo}
                    style={styles.logo}
                    />
            </View>
            {/* UPPER BOX */}

            <View style={styles.containerDown}>

            </View>

            <View style={styles.containerLoginBox}>
                <Text style={styles.welcomeText}>Selamat Datang</Text> 

                {/* LOGIN BOX */}
                <View style={styles.containerLogin}>

                    <Text style={{ marginTop: 20, fontSize: 14, marginBottom: 15 }}>Silahkan masuk untuk mulai belajar</Text>
                    <View style={styles.inputSection}>
                        <Icon 
                            name='email'
                            size="medium"
                            style={{
                                margin: 10
                            }}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Masukkan Alamat Email"
                            underlineColorAndroid= 'transparent'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon 
                            name='lock'
                            size="medium"
                            style={{
                                margin: 10
                            }}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Masukkan Kata Sandi"
                            underlineColorAndroid= 'transparent'
                            secureTextEntry={true}
                        />
                    </View>

                    <Text style={styles.lupaSandi}>Lupa kata sandi?</Text>

                    <TouchableHighlight
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate("HomePage")}
                    >
                        <Text style={styles.loginText}>Masuk</Text>
                    </TouchableHighlight>
                    
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={styles.hr}>
                        </View>

                        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 11 }}>ATAU</Text>

                        <View style={styles.hr}>
                        </View>
                    </View>

                    <TouchableHighlight
                        style={styles.loginBtn2}
                    >
                        <Text style={styles.loginText}>Voucher IndihomeStudy</Text>
                    </TouchableHighlight>
                   
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <SocialIcon
                            type='facebook'
                            style={{ width: 35, height: 35,  }}
                        />
                        <SocialIcon
                            type='google'
                            style={{ width: 35, height: 35,  }}
                        />
                        <SocialIcon
                            type='medium'
                            style={{ width: 35, height: 35,  }}
                        />
                    </View>

                    <Text style={styles.willRegisterText}>Belum punya akun? 
                        <Text style={styles.span} onPress={() => navigation.navigate('Register')}> Daftar</Text> 
                    </Text> 
                </View>

          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerUp: {
        backgroundColor: '#FE0000',
        height: 375,
        width: 360,
        alignItems: 'center'
    },
    containerDown: {
        backgroundColor: "white",
        height: 400,
        width: 360
    },  
    logo: {
        width: 180,
        height: 45,
        marginTop: 40
    },
    containerLoginBox: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        marginLeft: 20,
        marginRight: 20,
        height: 600,
        marginTop: 100,
    },
    containerLogin: {
        backgroundColor: 'white',
        width: 320,
        height: 400,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontWeight: 'bold',
        color: 'white'
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#c4c4c4',
        height: 35,
        borderRadius: 5 ,
        width: 200,
        margin: 10, 
    },
    input: {
        width: 200,
        height: 35,
        fontSize: 11
    },
    icon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center',
        marginTop: -15
    },
    lupaSandi: {
        color: '#00a1db',
        fontWeight: 'bold',
        marginLeft: 120,
        fontSize: 10,
        marginBottom: 20
    },
    loginBtn: {
        borderRadius: 20,
        width: 150,
        height: 35,
        backgroundColor: '#009c1a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtn2: {
        borderRadius: 20,
        width: 180,
        height: 35,
        backgroundColor: '#ffd729',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    loginText: {
        fontWeight: 'bold',
        color: 'white'
    },
    customStylesHere: {
        fontWeight: "bold",
        color: "orange"
    },
    hr: {
        height: 0.5,
        width: 90,
        marginTop: 10,
        backgroundColor: '#cccccc'
    },
    willRegisterText: {
        fontSize: 8
    },
    span: {
        color: '#00a1db'
    }
});