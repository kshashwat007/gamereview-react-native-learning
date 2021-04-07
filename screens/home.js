import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1'
    },

    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2'
    },

    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3'
    }
  ]);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name="add"
            size={24}
            onPress={() => setModelOpen(false)}
          />
          <Text>Hello</Text>
        </View>
      </Modal>
      <MaterialIcons name="add" size={24} onPress={() => setModelOpen(true)} />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Reviews', item);
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {}
});
