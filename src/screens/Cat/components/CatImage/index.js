import React from 'react';

import {StyleSheet, Image, Text, View} from 'react-native';

export default function CatImage(props) {
  const {url, loading, error} = props;

  if (error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.textLoading}>Error: {error.message}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.textLoading}>loading...</Text>
      </View>
    );
  }

  if (!url) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: url}} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c92ac',
    margin: 10,
    marginTop: 0,
    padding: 10,
    minHeight: '20%',
    borderRadius: 5,
  },
  textLoading: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  container: {
    margin: 10,
    marginTop: 0,
    backgroundColor: '#d6dbe1',
    minHeight: '10%',
    borderRadius: 5,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 5,
  },
});
