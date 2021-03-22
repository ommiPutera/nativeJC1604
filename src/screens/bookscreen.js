import React, {useRef} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Bookscreen({navigation, route}) {
  // tanpa destructuring props.route

  const password = useRef();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            // flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Books Screen </Text>
          <TextInput
            placeholder="username"
            style={styles.textInput}
            onSubmitEditing={() => password.current.focus()}
          />
          <TextInput
            ref={password}
            placeholder="password"
            style={styles.textInput}
            // onSubmitEditing={e => console.log(e.target)}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    color: 'black',
    marginBottom: 36,
  },
});
