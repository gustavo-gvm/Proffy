import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import landingImg from '../../assets/images/landing.png';
import api from '../../services/api';
import styles from './styles';

function Landing() {
  const {navigate} = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;

      setTotalConnections(total);
    })
  }, []);
  
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
        Total de {totalConnections} conexões já realizadas {'  '}
        <Image source={heartIcon}/>
      </Text>
    </View>
  );
}

export default Landing;