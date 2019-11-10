import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Colors from '../constants/color';
import TitleText from './TitleText';

const Header = props =>{
	return(
			<View style = {{...styles.header, 
				...Platform.select({
					ios: styles.headerIOS,
					android: styles.headerAndroid
				})
			}}
			>
				<TitleText style = {styles.headerTitle}>{props.title}</TitleText>
			</View>
		);
}


const styles = StyleSheet.create({
	headerBase: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		//backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',


	},
	headerIOS:{
		backgroundColor: 'white',
		borderBottomColor:'#ccc',
		borderBottomWidth: 1
	},
	headerAndroid:{
	backgroundColor: Colors.primary,
	},
	headerTitle:{
		color: Platform.OS==='ios'?Colors.primary:'white'
	}
});

export default Header;	