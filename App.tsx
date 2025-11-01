import React from 'react';
import { StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar
        barStyle="dark-content"     
        backgroundColor="#ffffff"   
      />
      <WebView
        source={{ uri: 'https://mortgagetools.ca' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.loader}
          />
        )}
        pullToRefreshEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default App;
