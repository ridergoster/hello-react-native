import React, {useState, useCallback} from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';

import CatImage from './components/CatImage';

export default function CatScreen() {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?format=json',
      );
      const [body] = await response.json();
      setUrl(body.url);
    } catch (err) {
      console.log('error', err);
      setError(err);
    }

    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#43485d"
        onPress={onSubmit}>
        <Text>Give me cat !</Text>
      </TouchableHighlight>
      <CatImage url={url} loading={loading} error={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#aaaec1',
    margin: 10,
    padding: 10,
    marginBottom: '20%',
    borderRadius: 5,
  },
});
