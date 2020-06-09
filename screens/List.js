import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
  const del = (id) => {
    db.transaction(
      tx => {
          tx.executeSql(
              `delete from shoplist where id=${id}`
          );
      },
      error => { console.log(error) }
  );
  }
  const add = (title) => {
    console.log("dovit")
    db.transaction(
      tx => {
          tx.executeSql(
              `insert into shoplist ( title, status ) values ('${title}', ${false})`
          );
      },
      error => { console.log(error) }
  );
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
              (_, { rows }) => dispatch(createShopList(rows._array)));
          },
          error => { console.log(error) }
        );
  }

  useEffect(
    () => {
      createDB(),
      readDB()
    }
  )
  return (
    <View style={styles.list}>

      <View style={styles.add}>
        <TextInput style={styles.addTxt} onChangeText={ text => setTitle(text) }/>
        <Icon name='add-circle-outline' size={40} color={GREEN} onPress={add}/>
      </View>

      {shoplist.length ? <View style={styles.item}>
        <TouchableOpacity style={styles.itemTitle} onPress={buy}>
          <Text style={styles.itemTxt}>123123123 Название</Text>
        </TouchableOpacity>
        <Icon name='remove-circle-outline' size={40} color={RED} onPress={del}/>
      </View> : <Text>Список пуст</Text>
      }
      
    </View>
  );
}