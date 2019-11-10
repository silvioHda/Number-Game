 import React,  { Component } from 'react';
 import {StyleSheet, View, Text} from 'react-native';

 const TitleText = props =>{
	return(
			<Text style={{...styles.title, ...props.style}}>{props.children}</Text>
		);
}

const styles = StyleSheet.create({
	title:{
		fontFamily: 'Cochin',
		fontWeight: 'bold',
		fontSize: 30,
		color: 'black'

	}
});

export default TitleText;	