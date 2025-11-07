import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message envoyé avec succès !');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>
      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nos Coordonnées</h2>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <Phone className="text-gold" />
                <span>+221 77 880 19 47</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-gold" />
                <span>contact@zuriaccessories.com</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-gold" />
                <span>123 Rue de l'Élégance, Dakar, Sénégal</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Suivez-nous</h2>
            {/* Social media links here */}
            <div className="flex space-x-4"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input type="text" id="name" required className="mt-1 block w-full p-3 border rounded-md focus:ring-gold focus:border-gold" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input type="email" id="email" required className="mt-1 block w-full p-3 border rounded-md focus:ring-gold focus:border-gold" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre message</label>
              <textarea id="message" rows={5} required className="mt-1 block w-full p-3 border rounded-md focus:ring-gold focus:border-gold"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-black text-white py-3 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;