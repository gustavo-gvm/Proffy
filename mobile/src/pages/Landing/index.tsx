import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import landingImg from '../../assets/images/landing.png';
import styles from './styles';

function Landing() {
  const {navigate} = useNavigation();
  
  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner}/>

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={styles.btnContainer}>
        <RectButton
        onPress={handleNavigateToStudyPage}
        style={[styles.btn, styles.btnPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.btnText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.btn, styles.btnSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.btnText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 287 conexões já realizadas {'  '}
        <Image source={heartIcon}/>
      </Text>
    </View>
  );
}

export default Landing;