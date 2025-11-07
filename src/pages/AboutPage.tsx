const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Zuri Accessories</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Zuri Accessories est né d'une passion pour l'élégance intemporelle et l'artisanat de qualité. Notre mission est de proposer des accessoires uniques qui ne se contentent pas de suivre les tendances, mais qui racontent une histoire et subliment votre style personnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center my-16">
          <div>
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1cb7cc03-9a90-4eda-b57b-482f72bc463f/bag-product-a4cl1mc-1762528895803.webp" 
              alt="Notre artisanat" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Notre Engagement</h2>
            <p className="text-gray-600 mb-4">
              Chaque pièce de notre collection est soigneusement sélectionnée pour sa qualité exceptionnelle et son design raffiné. Nous collaborons avec des artisans talentueux pour créer des accessoires qui durent et qui apportent une touche de sophistication à votre quotidien.
            </p>
            <p className="text-gray-600">
              Nous croyons en une mode durable et éthique. C'est pourquoi nous nous engageons à utiliser des matériaux responsables et à garantir des pratiques de production équitables.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-8">Rejoignez Notre Univers</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Explorez notre boutique et laissez-vous séduire par des accessoires qui célèbrent l'individualité et l'élégance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;