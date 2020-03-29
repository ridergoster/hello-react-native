import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';

import CatImage from './components/CatImage';

export default function CatScreen(props) {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    route: {params},
    navigation,
  } = props;

  useEffect(() => {
    fetchData();

    if (params && params.name) {
      navigation.setOptions({title: params.name});
    }
  }, [fetchData, navigation, params]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    let fetchUrl = 'https://api.thecatapi.com/v1/images/search?format=json';

    if (params && params.breedId) {
      fetchUrl = fetchUrl + '&breed_ids=' + params.breedId;
    }

    try {
      const response = await fetch(fetchUrl);
      const [body] = await response.json();
      setUrl(body.url);
    } catch (err) {
      console.log('error', err);
      setError(err);
    }

    setLoading(false);
  }, [params]);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#43485d"
        onPress={fetchData}>
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
