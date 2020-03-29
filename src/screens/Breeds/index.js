import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Breed from './components/Breed';

export default function Breeds(props) {
  const [breeds, setBreeds] = useState([]);
  const {navigation} = props;

  useEffect(() => {
    async function getBreeds() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const body = await response.json();
        setBreeds(body);
      } catch (err) {
        console.log('err', err);
      }
    }

    getBreeds();
  }, []);

  const onPressBreed = useCallback(
    item => {
      navigation.push('Cat', {
        breedId: item.id,
        name: item.name,
      });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={renderProps => (
          <Breed {...renderProps} onPress={onPressBreed} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
