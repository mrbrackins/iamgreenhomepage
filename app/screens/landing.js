import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { ext } from '../const';

import { connectStyle, Theme } from '@shoutem/theme';

import {
  Button,
  Caption,
  Divider,
  Icon,
  Image,
  ListView,
  Row,
  Subtitle,
  ScrollView,
  Text,
  Tile,
  View,

} from '@shoutem/ui';

export class landing extends Component {
  
  render() {
    const { data, style } = this.props;
    return (
      <ScrollView styleName="" style={styles.container}>
 

<View styleName="horizontal h-center">
<Image
  styleName="medium-square h-center"
  source={{ uri: 'http://bcreativeteam.com/wp-content/uploads/2021/09/Group-2.png'}}
/>
</View>
      
        <Row style={styles.rowStyle}>
  <Text styleName="h-center" numberOfLines={1}>Current Location</Text>
</Row>
        <Row style={styles.rowStyle}>
  <Text styleName="h-center" numberOfLines={1}>92108</Text>
</Row>
        <Row style={styles.rowStyle}>
  <Text styleName="h-center" numberOfLines={1}>75Degrees</Text>
</Row>
        <Row style={styles.rowStyle}>
  <Text styleName="h-center" numberOfLines={1}>Current Temperature</Text>
</Row>
    <Row style={styles.rowStyle}>
          <View styleName="flexible horizontal space-between">
          
          <Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>

<Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>
</View>
        </Row>
        <Row style={styles.rowStyle}>
          <View styleName="flexible horizontal space-between">
          
          <Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>

<Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>
</View>
        </Row>
        <Row style={styles.rowStyle}>
          <View styleName="flexible horizontal space-between">
          
          <Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>

<Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>
</View>
        </Row>
        <Row style={styles.rowStyle}>
          <View styleName="flexible horizontal space-between">
          
          <Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>

<Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>
</View>
        </Row>
        <Row style={styles.rowStyle}>
          <View styleName="flexible horizontal space-between">
          
          <Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>

<Tile styleName="small clear">
  
  <View styleName="content">
    <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
    <Caption>20 hours ago</Caption>
  </View>
</Tile>
</View>
        </Row>
        <Row style={styles.rowStyle}>
  <Text styleName="h-center" numberOfLines={1}>Coming Soon!</Text>
</Row>

        <Row style={styles.rowStyle}>
        <Button styleName="confirmation">
    <Text>EV Car Share</Text>
  </Button>
        </Row>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDFFD9',
  },
  rowStyle: {
    backgroundColor: '#DDFFD9',
  },
  bottomPadding: {
    marginBottom: 10,
  },
});

// connect the component to the theme
export default connectStyle(ext('landing'))(landing);
