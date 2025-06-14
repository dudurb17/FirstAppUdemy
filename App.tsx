import { View, Text, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo ao</Text>
        <Text style={styles.appTitle}>Meu Primeiro App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>Eduardo Robetti Bedin</Text>
        <Text style={styles.subtitle}>Desenvolvedor Mobile</Text>
        
        <View style={styles.messageBox}>
          <Text style={styles.message}>
            Começando minha jornada no desenvolvimento mobile com React Native!
          </Text>
          <Text style={styles.courseInfo}>
            Curso Udemy - React Native + TypeScript
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.hashtags}>
          #PrimeiroApp #ReactNative #Udemy #DesenvolvimentoMobile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 30,
    paddingTop: 50,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 5,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  messageBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignSelf: 'center',  
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  message: {
    fontSize: 18,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 24,
  },
  courseInfo: {
    fontSize: 16,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f1f3f5',
    alignItems: 'center',
  },
  hashtags: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default App;
