import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import styles from 'HomeScreen.styles';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [reference, setReference] = useState('');
  const [marque, setMarque] = useState('');
  const [categorie, setCategorie] = useState('');
  const [saison, setSaison] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👚 Ma Garde-Robe</Text>

      {/* Filtres */}
      <View style={styles.row}>
        <Picker
          selectedValue={categorie}
          style={styles.picker}
          onValueChange={(itemValue) => setCategorie(itemValue)}
        >
          <Picker.Item label="Toutes catégories" value="" />
          <Picker.Item label="Haut" value="Haut" />
          <Picker.Item label="Bas" value="Bas" />
          <Picker.Item label="Robe" value="Robe" />
          <Picker.Item label="Chaussures" value="Chaussures" />
          <Picker.Item label="Accessoire" value="Accessoire" />
        </Picker>

        <Picker
          selectedValue={saison}
          style={styles.picker}
          onValueChange={(itemValue) => setSaison(itemValue)}
        >
          <Picker.Item label="Toutes saisons" value="" />
          <Picker.Item label="Été" value="Été" />
          <Picker.Item label="Automne" value="Automne" />
          <Picker.Item label="Hiver" value="Hiver" />
          <Picker.Item label="Printemps" value="Printemps" />
          <Picker.Item label="Inter-saison" value="Inter-saison" />
        </Picker>
      </View>

      {/* Bouton Ajouter */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>➕</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nouveau vêtement</Text>

            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.link}>📷 Sélectionner une image</Text>
            </TouchableOpacity>

            {image && (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            )}

            <TextInput
              placeholder="Référence"
              style={styles.input}
              value={reference}
              onChangeText={setReference}
            />
            <TextInput
              placeholder="Marque"
              style={styles.input}
              value={marque}
              onChangeText={setMarque}
            />

            <Button title="Ajouter au dressing" onPress={() => setModalVisible(false)} />

            <Pressable onPress={() => setModalVisible(false)} style={styles.close}>
              <Text style={styles.closeText}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}