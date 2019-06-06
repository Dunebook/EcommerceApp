// src/views/Details.js
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class DetailsScreen extends React.Component {
    render() {
      const { navigation } = this.props;
      const img = navigation.getParam('img');
      const price = navigation.getParam('price');
      const name = navigation.getParam('name');

      return (
        <View>
          <Card
            image={{uri: img}}>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                {name}
            </Text>
            <Text h4>
                $ {price}
            </Text>
          </Card>
        </View>
      );
    }
}

export default DetailsScreen;