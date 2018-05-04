import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const About = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

export default About;
