import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import createUser from '../../../../Data/functions';
import auth from '@react-native-firebase/auth';

const RegisterForm = () => {
    // const [name, setName] = useState('');
    // const [pseudo, setPseudo] = useState('');
    // const [phone, setPhone] = useState('');
    // const [date, setDate] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmedPassword, setConfirmedPassword] = useState('');

    const initialState = {
        firstname: '',
        pseudo: '',
        phone: '',
        date: '',
        email: '',
        password: '',
        confirmedPassword: '',
    };

    const [formData, setFormData] = useState(initialState);

    const [seePassword, setSeePassword] = useState(true);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [checkValidDate, setCheckValidDate] = useState(false);

    const navigation = useNavigation()

    useEffect(() => {
        setFormData({
            firstname: '',
            pseudo: '',
            date: '',
            email: '',
            password: '',
            confirmedPassword: '',
        })
    }, [])

    const handleCheckEmail = (text) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        setFormData({
            ...formData,
            email: text,
        })

        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        } else {
            setCheckValidEmail(true);
        }
    }

    const handleDateFormat = (text) => {
        const dateRegex = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

            setFormData({
                ...formData,
                date: text,
            })

        if (dateRegex.test(text)) {
            setCheckValidDate(false);
        } else {
            setCheckValidDate(true);
        }
        console.log(text)
    }

    const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return 'Password must not contain Whitespaces.';
        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit.';
        }

        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
            return 'Password must be 8-16 Characters Long.';
        }

        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }

        return null;
    }

    const handleSignUp = () => {
        checkPasswordValidity(formData.password)
        createUser(formData)
        navigation.navigate("Home")
    }

    const handleLogin = () => {
        navigation.navigate("Login")
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Prénom"
                    value={formData.firstname}
                    onChangeText={text => setFormData({
                        ...formData,
                        firstname: text,
                    })}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Pseudo"
                    value={formData.pseudo}
                    onChangeText={text => setFormData({
                        ...formData,
                        pseudo: text,
                    })}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={text => handleCheckEmail(text)}
                    style={styles.input}
                />
                {checkValidEmail ? (
                    <Text style={styles.textFailed}>Wrong format email</Text>
                ) : (
                    <Text style={styles.textFailed}></Text>
                )}
                <TextInput
                    placeholder="Date de naissance (DD/MM/YYYY)"
                    value={formData.date}
                    onChangeText={text => handleDateFormat(text)}
                    style={styles.input}
                />
                {checkValidDate ? (
                    <Text style={styles.textFailed}>Wrong date format</Text>
                ) : (
                    <Text style={styles.textFailed}></Text>
                )}
                <TextInput
                    placeholder="Mot de passe"
                    value={formData.password}
                    onChangeText={text => setFormData({
                        ...formData,
                        password: text,
                    })}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirmer Mot de passe"
                    value={formData.confirmedPassword}
                    onChangeText={text => setFormData({
                        ...formData,
                        confirmedPassword: text,
                    })}
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
    textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
    },
});




export default RegisterForm;