import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigate } from 'react-router-dom';

// Dados simulados dos produtos
const products = [
  {
    id: '1',
    name: 'Hidratante Facial',
    image: require('../assets/images/hidratantefacial.png'), // Caminho ajustado
    price: 'R$ 69,90',
  },
  {
    id: '2',
    name: 'Sérum Vitamina C',
    image: require('../assets/images/serum.png'),
    price: 'R$ 89,90',
  },
  {
    id: '3',
    name: 'Máscara Facial',
    image: require('../assets/images/mascarafacial.png'),
    price: 'R$ 79,90',
  },
];
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Rare Touch</Text>
        <View style={styles.nav}>
          <TouchableOpacity><Text style={styles.navItem}>Início</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navItem}>Produtos</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navItem}>Sobre</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navItem}>Contato</Text></TouchableOpacity>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Cuide da sua pele com amor</Text>
        <Text style={styles.heroDescription}>Descubra nossa linha de produtos naturais e eficazes</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Ver produtos</Text>

        </TouchableOpacity>
      </View>

      {/* Products Section */}
      <View style={styles.catalogo}>
        <Text style={styles.catalogoTitle}>Produtos em destaque</Text>
        <ScrollView horizontal contentContainerStyle={styles.productsContainer}>
  {products.map(product => (
    <View key={product.id} style={styles.productCard}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  ))}
</ScrollView>
      </View>

      {/* About Section */}
      <View style={styles.sobre}>
        <Text style={styles.sobreTitle}>Sobre nós</Text>
        <Text style={styles.sobreDescription}>
          A Rare Touch é uma marca dedicada ao cuidado com a pele, oferecendo produtos de alta qualidade e eficácia.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.contato}>
        <Text style={styles.contatoTitle}>Contato</Text>
        <Text style={styles.contatoDescription}>Entre em contato conosco pelo email: contato@raretouch.com</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Rare Touch. Todos os direitos reservados.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6CFCA', // Rosa bem suave (fundo)
  },
  header: {
    backgroundColor: '#FFF', // Branco para o cabeçalho
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DCA1A1', // Rosa suave para a linha do cabeçalho
  },
  logo: {
    
    fontSize: 30,
    fontWeight: '600',
    color: '#E77499', // Rosa suave para o logo 
    fontFamily:'Tangerine',
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 20,
    fontSize: 16,
    color: '#E77499', // Rosa suave para os itens de navegação
    fontFamily:'garamond',
  },
  hero: {
    backgroundColor: '#F6CFCA', // Rosa suave para o fundo da seção hero
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E77499', // Texto branco para contrastar com o fundo rosa
    marginBottom: 20,
  },
  heroDescription: {
    fontSize: 18,
    color: '#E77499', // Texto branco para contrastar com o fundo rosa
    marginBottom: 30,
  },
  heroButton: {
    backgroundColor: '#FFF', // Branco para o botão
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  heroButtonText: {
    fontSize: 18,
    color: '#E77499', // Rosa suave para o texto do botão
    fontWeight: 'bold',
  },
  catalogo: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFF', // Branco para o fundo da seção de produtos
    alignItems: 'center',
  },
  catalogoTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#E77499', // Rosa suave para o título do catálogo
    marginBottom: 20,
  },
  productsContainer: {
    flexDirection: 'row',
  },
  productCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    marginRight: 30,
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#F6CFCA', // Rosa suave para o contorno dos cards
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#CD8F7F', // Rosa suave para o nome do produto
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#E77499', // Rosa suave para o preço
  },
  sobre: {
    padding: 40,
    backgroundColor: '#FFF', // Branco para a seção sobre
    alignItems: 'center',
  },
  sobreTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#E77499', // Rosa suave para o título
    marginBottom: 10,
  },
  sobreDescription: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  contato: {
    padding: 40,
    backgroundColor: '#FEE2E2', // Rosa bem suave para o fundo de contato
    alignItems: 'center',
  },
  contatoTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#F472B6', // Rosa suave para o título de contato
    marginBottom: 10,
  },
  contatoDescription: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#F472B6', // Rosa suave para o fundo do rodapé
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFF', // Texto branco para o rodapé
    fontSize: 14,
  },
});

export default App;
