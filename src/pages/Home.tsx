import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import wellnessBalanceImg from "@/assets/wellness-balance.jpg";
import massageImg from "@/assets/massage-therapy.jpg";
import tcmImg from "@/assets/tcm-setup.jpg";
import zenWellnessImg from "@/assets/zen-wellness.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Formations et Séances Bien Être"
        subtitle="Votre quotidien vous fait souffrir, accordez-vous du temps."
        description="Vous accordez du temps, c'est vous donner de l'importance"
      />

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-sage mb-6">
              Équilibre Physique & Émotionnel
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Réduire les stress, se sentir bien au quotidien au travail et à la maison, éviter les burn-out. 
              Faites-vous accompagner avec un coaching personnalisé.
            </p>
          </div>

          <div className="bg-gradient-card rounded-xl p-8 shadow-soft mb-12">
            <p className="text-lg leading-relaxed text-center">
              <strong>La Fondation Bien Ensemble</strong> a été créée dans le but de promouvoir la sensibilisation 
              et l'éducation à la santé globale par les méthodes naturelles. Développer et rendre accessible à tout public 
              les pratiques bien-être, de prévention, maintien et retour à la santé, ainsi que les approches visant 
              l'épanouissement de l'individu.
            </p>
          </div>
        </div>
      </section>

      {/* Zen Wellness Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <div 
              className="h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${zenWellnessImg})`,
              }}
            >
              <div className="text-center text-white max-w-2xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Trouvez Votre Équilibre Intérieur
                </h2>
                <p className="text-lg opacity-90">
                  Un voyage vers la sérénité et le bien-être authentique vous attend
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-wellness-sage mb-12">
            Nos Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              title="Thérapies Naturelles"
              description="Nous proposons des thérapies naturelles de relaxation individuellement ou en groupes."
              benefits={[
                "Ateliers éducatifs",
                "Ateliers sportifs", 
                "Actions sociales pour tous",
                "Coaching personnalisé"
              ]}
              image={wellnessBalanceImg}
            />
            
            <ServiceCard
              title="Massage par Acupression"
              description="Les bienfaits ressemblent à ceux vantés par l'acupuncture, mais sans douleur. La Médecine Traditionnelle Chinoise explique que ce phénomène de guérison est dû à l'ouverture des méridiens grâce à l'énergie (QI)."
              benefits={[
                "Détente et relâchement",
                "Équilibration et libération",
                "Réduction de la douleur"
              ]}
              image={massageImg}
            />
            
            <ServiceCard
              title="Formation en MTC"
              description="Possibilité de se former en Médecine Traditionnelle Chinoise par des professionnels diplômés et reconnus."
              benefits={[
                "Pour soi-même",
                "Pour votre famille",
                "En entreprise",
                "En équipes ou individuellement"
              ]}
              image={tcmImg}
            />
          </div>

          <div className="text-center">
            <Link to="/formations">
              <Button size="lg" className="bg-wellness-sage hover:bg-wellness-sage/90 text-white px-8 py-3">
                Découvrir nos Formations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-wellness-sage mb-6">
            Prêt à commencer votre parcours bien-être ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous pour découvrir comment nous pouvons vous accompagner dans votre quête d'équilibre et de bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-wellness-sage hover:bg-wellness-sage/90 text-white">
                Nous Contacter
              </Button>
            </Link>
            <Link to="/tarifs">
              <Button size="lg" variant="outline" className="border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white">
                Voir nos Tarifs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;