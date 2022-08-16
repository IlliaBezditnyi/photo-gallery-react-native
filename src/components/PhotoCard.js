import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, Button } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth / 2.4,
    top: 20
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingVertical: 10,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    flex: 1,
    width: deviceWidth / 2.4,
    height: deviceWidth * 0.63,
    borderRadius: 10
  }
})

const PhotoCard = ({ photos }) => {
  const [openModal, setOpenModal] = useState(false);
  const [img, setImg] = useState();

  const { container, sub, h1, cover, button } = styles;
  const { id, urls, user } = photos;
  return (
    <>
      <View style={container}>
        <View style={sub}>
          <TouchableOpacity onPress={() => 
            {
              console.log(id)
              setImg({ uri: urls.full })
              setOpenModal(true);
            }
          }>
            <Image style={cover} source={{ uri: urls.small }} />
          </TouchableOpacity>
        </View>
        <Text style={h1}>By {user.name}</Text>
      </View>

      <Modal visible={openModal}>
        <Image source={ img } style={{ width: deviceWidth, height: deviceWidth * 2 }} />
        <Button
          style={{ width: deviceWidth, backgroundColor: '#717E8E' }}
          onPress={() => {
            setOpenModal(false);
          }}
          title="Close"
        />
      </Modal>
    </>
  )
}

export default PhotoCard;