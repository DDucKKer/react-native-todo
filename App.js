import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddToDo} from './src/AddToDo'
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newToDo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos((prevTodos) => {
    //   return (
    //     ...prevTodos,
    //     newTodo
    //   )
    // })
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])

  }
  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <View>
      <Navbar title = "Todo Application"/>
      <View style={styles.container}>
        <AddToDo onSubmit = {addTodo}/>

        <FlatList 
          data = {todos}
          renderItem = {({item}) => (<Todo todo ={item} onRemove ={removeTodo}/>)}
          keyExtractor = {item => item.id.toString()}
        />
        {/* <View>
          { todos.map(todo => (
             <Todo todo ={todo} key ={todo.id}/>
          ))}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
});
