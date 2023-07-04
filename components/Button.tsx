import { StyleSheet } from 'react-native'
import React from 'react'
import { Button as NativeButton } from 'react-native-elements';
import { COLORS } from '../utils/constants';
type ButtonProps = {
  title: string,
  color: string,
  onPress: () => void,
  fontColor?: string 
}

const Button:React.FC<ButtonProps> = ({title, color, onPress, fontColor = COLORS.light }) => {
  return (
    <NativeButton
      title={title}
      loading={false}
      buttonStyle={{
        backgroundColor: color,
        borderRadius: 12,
      }}
      titleStyle={{ 
        fontWeight: 'bold', 
        fontSize: 23, 
        color: fontColor
      }}
      containerStyle={{
        height: 50,
        width: 200,
      }}
      onPress={onPress}
    />
  )
}

export default Button
