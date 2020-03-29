import React, {useCallback} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

export default function Home(props) {
  const {navigation} = props;

  const onBack = useCallback(() => navigation.goBack(), [navigation]);

  const onNavigate = useCallback(() => navigation.navigate('Details'), [
    navigation,
  ]);

  const onPushCat = useCallback(() => navigation.push('Cat'), [navigation]);

  const onPushBreeds = useCallback(() => navigation.push('Breeds'), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to HOME</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Button title="Go back" onPress={onBack} />
      <Button title="Navigate Details" onPress={onNavigate} />
      <Button title="Push Cat" onPress={onPushCat} />
      <Button title="Push Breeds" onPress={onPushBreeds} />
    </View>
  );
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
