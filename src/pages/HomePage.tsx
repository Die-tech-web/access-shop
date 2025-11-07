import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section 
        className="relative bg-cover bg-center h-[60vh]" 
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/1cb7cc03-9a90-4eda-b57b-482f72bc463f/hero-banner-hvj9ynr-1762528879855.webp)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Collection Élégance Pure</h1>
            <p className="text-lg md:text-xl mb-8">Découvrez nos accessoires qui définissent votre style.</p>
            <Link to="/shop" className="bg-gold text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-transform duration-300 ease-in-out transform hover:scale-105">Découvrir</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Catégories Populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Montres', 'Sacs', 'Bijoux', 'Lunettes', 'Écouteurs', 'Coques'].map(category => (
              <Link key={category} to="/shop" className="block p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-beige">
                <h3 className="font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nouveautés</h2>
          {/* Placeholder for new products */}
          <div className="text-center text-gray-500">Bientôt disponible...</div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Avis de nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-beige p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="text-gold fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">"Un service client exceptionnel et des produits d'une qualité inégalée. Je recommande vivement Zuri Accessories !"</p>
                <p className="font-semibold">- Client satisfait</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;