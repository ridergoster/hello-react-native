import React, {useCallback} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Breed(props) {
  const {item, onPress /* index, separators */} = props;

  const _onPress = useCallback(() => onPress(item), [item, onPress]);

  return (
    <TouchableOpacity onPress={_onPress}>
      <View style={styles.container}>
        <View style={styles.informations}>
          <Text style={styles.informationsName}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>view image ></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#d6dbe1',
    borderRadius: 5,
  },
  informations: {
    padding: 10,
  },
  informationsName: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    backgroundColor: '#c5cbb9',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
  },
  linkText: {
    color: '#000000',
    fontSize: 18,
  },
});
