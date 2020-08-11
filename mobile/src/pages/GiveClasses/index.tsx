import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesBgImages from '../../assets/images/give-classes-background.png';
import styles from './styles';

function GiveClasses() {
  const {goBack} = useNavigation();
  
  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImages} 
        style={styles.content}
      >

        <Text style={styles.title}>Que ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okBtn}>
        <Text style={styles.okBtnText}>Tudo bem</Text>
      </RectButton>

    </View>
  );
}

export default GiveClasses;