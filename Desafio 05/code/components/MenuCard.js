// src/components/MenuCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/tokens';

export default function MenuCard({ image, name, desc, price, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{desc}</Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 361,
    height: 160,
    borderRadius: 16,
    backgroundColor: colors.brown, // #4B3426
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { x:0, y:6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6
  },
  image: { width: '100%', height: 90 },
  content: { padding: 12, flex:1, justifyContent:'space-between' },
  title: { fontFamily:'Inter-SemiBold', fontSize:16, color:colors.white },
  desc: { fontFamily:'Inter-Regular', fontSize:13, color:colors.beige },
  price: { fontFamily:'Inter-Bold', fontSize:15, color:colors.gold, textAlign:'right' }
});