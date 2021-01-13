import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Menu, Settings } from 'react-native-feather';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt.',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt.',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const Flexboxdemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="rgb(4, 186, 62)" barStyle="light-content" />

      <View style={styles.header}>
        <ImageBackground
          source={require('./assets/img1.jpg')}
          style={styles.bgImage}
          imageStyle={{ borderBottomRightRadius: 65 }}
        ></ImageBackground>
        <Menu stroke="white" width={32} height={32} style={styles.menu} />
        <Settings
          stroke="black"
          width={32}
          height={32}
          style={styles.settings}
        />
        <Text style={styles.hello}>Hello Stranger, hope you are okay</Text>
      </View>

      <View style={styles.infoArea}>
        <View style={styles.areaA}>
          <Text>Info of cats</Text>
        </View>

        <View style={styles.areaB}>
          <FlatList
            //horizontal={false}
            data={mediaArray}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.catpic}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.thumbnails.w160 }}
                  />
                  <View style={styles.catInfo}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Flexboxdemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: '100%',
    paddingTop: 0,
  },
  header: {
    height: 270,
    backgroundColor: 'white',
  },
  bgImage: {
    width: '100%',
    height: 270,
  },

  menu: {
    position: 'absolute',
    top: 40,
    left: 20,
  },

  settings: {
    position: 'absolute',
    top: 40,
    right: 20,
  },

  hello: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },

  infoArea: {
    flex: 6,
    flexDirection: 'column',
  },
  areaA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  areaB: {
    flex: 8,
    padding: 20,
    //alignItems: 'center',
  },

  catpic: {
    width: '50%',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
  },

  catInfo: {},

  title: {
    fontSize: 20,
    color: 'green',
  },

  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 100,
  },
});
