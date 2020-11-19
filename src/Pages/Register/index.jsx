import React, {useState } from 'react'
import { Text, Picker, View, StyleSheet, TextInput, TouchableHighlight, ScrollView, Button } from 'react-native'
import { Icon, SocialIcon } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'

export default function Register({ navigation }) {
    const [checked, setChecked] = useState('first');
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Icon 
                    name="arrow-left"
                    type="font-awesome"
                    style={{marginLeft: 20}}
                    onPress={() => navigation.navigate('Profile')}
                />
                <Text style={styles.headerText}>Daftar</Text>
            </View>

            <View style={styles.contentBox}>

                <View style={{ flexDirection: 'row', marginTop: 10, textAlign: 'center' }}>
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

                <View style={styles.hr}>

                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Nama Lengkap</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nama Lengkap"
                    />
                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Masukkan alamat email"
                    />
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>Jenis Kelamin</Text>
                    <View style={{ flexDirection: 'row', width: 300 }}>
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                            />
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            />
                    </View>
                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Nomor Handphone</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Contoh: 082323355181"
                    />
                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Nama Sekolah</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Contoh: SD Krida Nusantara"
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, width: 300 }}>
                    <View style={styles.inputBox}> 
                        <Text style={styles.inputLabel}>Kelas</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.input2}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Kelas 1" value="java" />
                            <Picker.Item label="Kelas 2" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.inputBox}> 
                        <Text style={styles.inputLabel}>Kota</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.input2}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Jakarta" value="java" />
                            <Picker.Item label="Surabaya" value="js" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Provinsi</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Pilih Provinsi" enabled/>
                        <Picker.Item label="Jawa Barat" value="java" />
                        <Picker.Item label="DKI Jakarta" value="js" />
                    </Picker>
                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Kata Sandi</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Masukkan kata sandi"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.inputBox}> 
                    <Text style={styles.inputLabel}>Konfirmasi Kata Sandi</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Konfirmasi kata sandi kamu"
                        secureTextEntry={true}
                    />
                </View>
               
                <TouchableHighlight
                        style={styles.loginBtn}
                    >
                    <Text style={styles.loginText}>Buat Akun</Text>
                </TouchableHighlight>

                <Text style={{ fontSize: 8, marginTop: 10 }}>Sudah punya akun? 
                    <Text style={{ color: '#00a1db' }}> Masuk disini</Text>
                </Text>

            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 800
    },
    header: {
        flexDirection: 'row',
        height: 60,
        border: '1px solid #c4c4c4',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4,
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 15
    },
    contentBox: {
        alignItems: 'center',
        marginTop: 15
    },
    inputBox: {
        flexDirection: 'column',
        marginTop: 12
    },
    input: {
        border: '0.5px solid blue',
        width: 300,
        height: 35,
        borderRadius: 20,
        paddingLeft: 10,
        fontSize: 11,
        marginTop: 5
    }, 
    input2: {
        border: '0.5px solid blue',
        width: 130,
        height: 35,
        borderRadius: 20,
        paddingLeft: 10,
        fontSize: 11,
        marginTop: 5
    }, 
    inputLabel: {
        fontWeight: 'bold',
        fontSize: 11
    },
    hr: {
        height: 0.5,
        width: 300,
        marginTop: 30,
        backgroundColor: '#cccccc'
    },
    loginBtn: {
        borderRadius: 20,
        width: 150,
        height: 35,
        backgroundColor: '#009c1a',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    loginText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12
    },
  });