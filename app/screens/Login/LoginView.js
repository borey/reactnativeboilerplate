import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class LoginView extends React.Component {
  navigate = () => {
    this.props.onLogin('username', 'password');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TouchableOpacity onPress={this.navigate}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>open drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginView.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginView;
