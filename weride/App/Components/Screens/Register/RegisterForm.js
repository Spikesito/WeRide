import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../../../../firebase';
import writeUserData from '../../../../firebase';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        writeUserData("user_emile", "emile", "younjo", "emile@younjo.fr", "928219218", "23/01/2001", "MDPCrypté");
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        navigation.navigate("LoginScreen")
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Prénom"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Pseudo"
                    value={pseudo}
                    onChangeText={text => setPseudo(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Téléphone"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Date de naissance (DD/MM/YYYY)"
                    value={date}
                    onChangeText={text => setDate(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirmer Mot de passe"
                    value={confirmedPassword}
                    onChangeText={text => setConfirmedPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
});




export default RegisterForm;