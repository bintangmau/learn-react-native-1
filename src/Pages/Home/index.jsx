import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, SafeAreaView, Image } from 'react-native'
import { Icon, SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Family from '../../../assets/family.jpg'

export default function Home() {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <ScrollView style={styles.container}>

                <View style={styles.upperContainer}>
                
                    <View style={styles.iconBox}>
                        <Icon 
                            name="search"
                            type="font-awesome"
                            color="white"
                            style={{
                                marginRight: 10
                            }}
                            size="medium"
                        />
                        <Icon 
                            name="wechat"
                            type="font-awesome"
                            color="white"
                            size="medium"
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.headerText}>Selamat Pagi, </Text>
                        <Text style={styles.headerText}>Banyu Raziq Al Ghifari</Text>
                    </View>
                </View>

                <View style={styles.firstBox}>
                    
                        <View style={styles.secondBox}>
                            <View style={styles.thirdBox}>
                                <Icon 
                                    name="github-with-circle"
                                    type="entypo"
                                    style={{
                                        marginRight: 8
                                    }}
                                    size={40}
                                    color='#dbc835'
                                />
                                0 Point
                            </View>
                            <View style={styles.thirdBox}>
                                <Icon 
                                    name="calendar"
                                    type="entypo"
                                    style={{
                                        marginRight: 8
                                    }}
                                    size={40}
                                    color='#3eb0e6'
                                />
                                Jadwal
                            </View>
                        </View>

                        <View style={styles.fourthBox}>
                            <TouchableHighlight
                                style={styles.loginBtn}
                            >
                                <Text style={styles.loginText}>Buat Akun</Text>
                            </TouchableHighlight>
                        </View>
                </View>  
            
                <View style={styles.secondFirstBox}>
                    
                    <View style={styles.secondSecondBox}>
                        <View>
                            <Icon 
                                name="monitor-screenshot"
                                type="material-community"
                                reverse
                                color="#FE0000"
                                size={30}
                            />
                            <Text style={styles.secondBoxText}>Buku Digital</Text>
                        </View>
                        <View>
                            <Icon 
                                name="laptop"
                                type="entypo"
                                reverse
                                color="#FE0000"
                                size={30}
                                />
                            <Text style={styles.secondBoxText}>Materi Belajar</Text>
                        </View>
                        <View>
                            <Icon 
                                name="mobile"
                                type="entypo"
                                reverse
                                color="#FE0000"
                                size={30}
                            />
                            <Text style={styles.secondBoxText}>Materi Ujian</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.thirdFirstBox}>
                    
                    <View style={styles.secondSecondBox}>
                        <View>
                            <Icon   
                                name="github-with-circle"
                                type="entypo"
                                reverse
                                color="#FE0000"
                                size={30}
                                reverseColor="#dbc835"
                            />
                            <Text style={styles.secondBoxText}>Buku Digital</Text>
                        </View>
                        <View>
                            <Icon 
                                name="clipboard"
                                type="entypo"
                                reverse
                                color="#FE0000"
                                size={30}
                                reverseColor="black"
                                />
                            <Text style={styles.secondBoxText}>Materi Belajar</Text>
                        </View>
                        <View>
                            <Icon 
                                name="layout"
                                type="feather"
                                reverse
                                color="#FE0000"
                                size={30}
                            />
                            <Text style={styles.secondBoxText}>Materi Ujian</Text>
                        </View>
                    </View>
                </View>
                
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 30, marginTop: 30 }}>Blog</Text>
                <ScrollView
                    horizontal
                    style={{
                        marginLeft: 30,
                        marginTop: 10,
                        marginRight: 30
                    }}
                >
                    <View style={styles.horizontalView}>
                        <Image 
                            style={styles.image}
                            source={Family}
                        />
                        <View style={styles.imageContent}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 7, marginLeft: 10 }}>Belajar Yuk</Text>
                            <Text style={{ fontSize: 10, marginLeft: "20", marginTop: 7, marginLeft: 10 }}>Belajar yuk kita sekarang mari belajar</Text>
                        </View>
                    </View>
                
                    <View style={styles.horizontalView}>
                        <Image 
                            style={styles.image}
                            source={Family}
                        />
                        <View style={styles.imageContent}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 7, marginLeft: 10 }}>Belajar Yuk</Text>
                            <Text style={{ fontSize: 10, marginLeft: "20", marginTop: 7, marginLeft: 10 }}>Belajar yuk kita sekarang mari belajar</Text>
                        </View>
                    </View>
                </ScrollView>
                
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 30, marginTop: 10 }}>Yuk Berlangganan</Text>
                <ScrollView
                    horizontal
                    style={{
                        marginBottom: 100,
                        marginLeft: 30,
                        marginTop: 10,
                        marginRight: 30
                    }}
                >


                </ScrollView>
            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1
    },
    container: {
      backgroundColor: '#fff',
      height: 1000
    },
    upperContainer: {
        backgroundColor: '#FE0000',
        height: 250,
        width: 360,
    },
    iconBox: {
        flexDirection: 'row',
        marginLeft: 280,
        marginTop: 50
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 30,
    },
    firstBox: {
        position: 'absolute',
        marginLeft: 20,
        marginRight: 20,
        height: 220,
        width: 320,
        marginTop: 140,
        backgroundColor: '#fff',
        borderColor: '#FE0000',
        borderWidth: 2,
        borderRadius: 10
    },
    secondBox: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#FE0000',
    },
    thirdBox: {
        width: 160,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    loginBtn: {
        borderRadius: 5,
        width: 120,
        height: 30,
        backgroundColor: '#FE0000',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "yellow",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },  
    loginText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12
    },
    fourthBox: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1 ,
    },
    secondFirstBox: {
        marginTop: 130,
        width: 300,
        marginLeft: 30,
        marginRight: 30
    },
    secondSecondBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secondBoxText: {
        fontSize: 11,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    thirdFirstBox: {
        marginTop: 30,
        width: 300,
        marginLeft: 30,
        marginRight: 30
    },
    horizontalView: {
        width: 200,
        height: 200,
        marginRight: 100
    },
    image: {
        width: 280,
        height: 120,
        borderRadius: 5
    },
    imageContent: {
        width: 280,
        height: 50,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        marginTop: -5,
        backgroundColor: '#c4c4c4'
    }
  });