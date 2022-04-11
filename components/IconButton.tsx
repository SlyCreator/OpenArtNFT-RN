import React from 'react'
import {
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

export interface Props extends PressableProps {
  icon: (props: { style: ViewStyle; fill: string }) => React.ReactElement
}

/**
 *
 */
const IconButton = ({ icon, ...props }: Props) => {
  return (
    <Pressable {...props}>
      <View
        style={{
          ...styles.container,
          backgroundColor: 'transparent',
        }}
      >
        {icon({ style: styles.icon, fill: '#000' })}
      </View>
    </Pressable>
  )
}

export default IconButton

const size = 30
const styles = StyleSheet.create({
  container: {
    padding: 0,
    borderRadius: 100,
  },
  icon: {
    width: size,
    height: size,
  },
})
