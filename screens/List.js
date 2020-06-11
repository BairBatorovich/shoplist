import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as SQLite from 'expo-sqlite';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';
import { GREEN, RED, WHITE } from './constants';
import { createShopList } from '../store/action'

const db = SQLite.openDatabase("db.db");

export default function List() {
  const [title, setTitle] = useState('');

  const shoplist = useSelector(state => state.reducer.shoplist);
  const dispatch = useDispatch();

  const buy = () => {
    console.log("kuplen")
  }
  //Удаление позиции из списка
  const del = (id) => {
    console.log("delete")
    db.transaction(
      tx => {
        tx.executeSql(
          `delete from shoplist where id=${id}`
        );
      },
      error => { console.log(error) }
    );
    readDB()
  }

  //Добавление в список
  const add = (title) => {
    db.transaction(
      tx => {
        tx.executeSql(
          `insert into shoplist (title, status) values ('${title}', '${false}')`
        );
      },
      error => { console.log(error) }
    );
    readDB()
    setTitle('')
  }

  const createDB = () => {
    db.transaction(
      tx => {
        tx.executeSql(
          `create table if not exists shoplist (id integer primary key autoincrement not null, title string, status boolean);`);
      },
      error => { console.log(error) }
    );
  }

  const readDB = () => {
    db.transaction(
      tx => {
        tx.executeSql(
          `select * from shoplist`,
          [],
          (_, { rows }) => dispatch(createShopList(rows._array)) );
      },
      error => { console.log(error) }
    );
  }

  useEffect(
    () => {
      createDB(),
        readDB()
    },
    []
  )
  return (
    <View style={styles.list}>

      <View style={styles.add}>
        <TextInput style={styles.addTxt} onChangeText={text => setTitle(text)} value={title}/>
        <Icon name='add-circle-outline' size={30} color={GREEN} onPress={() => add(title)} />
      </View>

      {shoplist.length ?
        <FlatList
          data={shoplist}
          renderItem={({ item }) => <View style={styles.item}>
            <TouchableOpacity style={styles.itemTitle} onPress={buy}>
              <Text style={styles.itemTxt}>{item.title}</Text>
            </TouchableOpacity>
            <Icon name='remove-circle-outline' size={40} color={RED} onPress={() => del(item.id)} />
          </View>}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.2}
        />
        : <TouchableOpacity onPress={del}><Text>Список пуст</Text></TouchableOpacity>
      }

    </View>
  );
}