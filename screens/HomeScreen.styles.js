import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  picker: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: '#4f46e5',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 12,
    alignSelf: 'center',
  },
  link: {
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 10,
  },
  close: {
    marginTop: 16,
    alignSelf: 'center',
  },
  closeText: {
    color: 'gray',
  },
});
