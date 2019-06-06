// src/components/Product.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Product extends React.Component {
    render() {
      return (
        <Card
            image={{uri: this.props.product.img}}>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                {this.props.product.name}
            </Text>
            <Text style={styles.price} h4>
                $ {this.props.product.price}
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details', {
                name: this.props.product.name,
                price: this.props.product.price,
                img: this.props.product.img
            })} />
        </Card>
      );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});

export default withNavigation(Product);