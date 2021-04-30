import React, { useState } from 'react'
import uuid from 'uuid';

import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        "Error",
        `Must Enter An Item`,  
          [{text: "OK"}]
      );
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  }; 

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items}
        renderItem={({ item }) => <ListItem deleteItem={deleteItem} item={item} />}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
