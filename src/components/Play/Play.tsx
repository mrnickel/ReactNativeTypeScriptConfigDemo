import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  name: string;
}

interface DispatchProps {}

const Play = ({ name }: Props & DispatchProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Play;
