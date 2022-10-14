import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/clientApp';
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

     const onHandleLogin = () => {
        if (email !== '' && password !== '') {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => console.log('Login success'))
            .catch(err => console.log(`Login err: ${err}`));
    }

    const RouterPush = () => {
        Router.push(path)
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome back!</h2>
      <input
        style={styles.input}
        placeholder='Enter email'
        autoCapitalize='none'
        type='emailAddress'
        autoFocus={true}
        value={email}
        onChange={text => setEmail(text)}
      />
      <input
        className={styles.input}
        placeholder='Enter password'
        autoCapitalize='none'
        value={password}
        onChange={text => setPassword(text)}
      />
        <button className={styles.btn} onClick={onHandleLogin}>
            Login
        </button>
        <button onClick={RouterPush}>
            Register
        </button>
    </div>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 50,
//     paddingHorizontal: 12
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#444',
//     alignSelf: 'center',
//     paddingBottom: 24
//   },
//   input: {
//     backgroundColor: '#fff',
//     marginBottom: 20,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#333',
//     borderRadius: 8,
//     padding: 12
//   }
// });