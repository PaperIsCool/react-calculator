import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TextInput } from 'react-native';
import styles from './Styles'
import { useState } from 'react';
import Button from './Button'
import ButtonSide from './ButtonSide'
import ButtonTop from './ButtonTop'
import ButtonAC from './ButtonAC';
import InvisibleButton from './InvisibleButton';

export default function App() {

  const [input, setInput] = useState('')
  return (

    <SafeAreaView style={styles.container}>
      

      <TextInput readOnly={true} style={styles.input} placeholder='Calculator' value={input}></TextInput>

      <View style={styles.buttons}>

        <ButtonAC title='AC' onPress={() => {
          setInput('')
        }}></ButtonAC>
        
        <InvisibleButton />
        <InvisibleButton />

        <ButtonTop title='/' onPress={() => {
          setInput(input + '/')
        }}></ButtonTop>
        

      </View>
      
      <View style={styles.buttons}>

        <Button title='7' onPress={() => {
          setInput(input + '7')
        }}></Button>

        <Button title='8' onPress={() => {
          setInput(input + '8')
        }}></Button>

        <Button title='9' onPress={() => {
          setInput(input + '9')
        }}></Button>
        
        <ButtonSide title='*' onPress={() => {
          setInput(input + '*')
        }}></ButtonSide>

      </View>
      
      <View style={styles.buttons}>

        <Button title='4' onPress={() => {
          setInput(input + '4')
        }}></Button>

        <Button title='5' onPress={() => {
          setInput(input + '5')
        }}></Button>

        <Button title='6' onPress={() => {
          setInput(input + '6')
        }}></Button>
        
        <ButtonSide title='-' onPress={() => {
          setInput(input + '-')
        }}></ButtonSide>

      </View>
      
      <View style={styles.buttons}>

        <Button title='1' onPress={() => {
          setInput(input + '1')
        }}></Button>

        <Button title='2' onPress={() => {
          setInput(input + '2')
        }}></Button>

        <Button title='3' onPress={() => {
          setInput(input + '3')
        }}></Button>
        
        <ButtonSide title='+' onPress={() => {
          setInput(input + '+')
        }}></ButtonSide>

      </View>
      
      <View style={styles.buttons}>

        <Button title='0' onPress={() => {
          setInput(input + '0')
        }}></Button>
        
        <InvisibleButton />

        <Button title='.' onPress={() => {
          setInput(input + '.')
        }}></Button>

        <ButtonSide title='=' onPress={() => {
          try {
            setInput(eval(input).toString())
          } catch (error) {
            setInput("Error")
          }
          

        }}></ButtonSide>

      </View>
      


      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}