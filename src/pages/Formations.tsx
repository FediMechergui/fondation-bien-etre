import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Download, Play, Users, Home } from "lucide-react";
import shiatsuImage from "@/assets/shiatsu-massage.jpg";
import kinesiologyImage from "@/assets/kinesiology-session.jpg";
import cuppingImage from "@/assets/cupping-massage.jpg";
import nutritionImage from "@/assets/nutrition-consultation.jpg";

const Formations = () => {
  const formations = [
    {
      title: "Shiatsu",
      description: "Formation complète en techniques de massage Shiatsu traditionnel japonais.",
      benefits: ["Techniques de pression", "Méridiens énergétiques", "Pratique théorique et pratique"],
      image: shiatsuImage
    },
    {
      title: "Kinésiologie",
      description: "La Kinésiologie est une approche corporelle qui vise à retrouver un meilleur équilibre mental, physique et énergétique. À l'aide d'un Test Musculaire, le Kinésiologue teste les flux d'énergie du corps.",
      benefits: ["Test musculaire", "Rééquilibrage énergétique", "Gestion du stress et des émotions"],
      image: kinesiologyImage
    },
    {
      title: "Massage par Ventouse",
      description: "Le système de massage est facile d'utilisation. Cette technique permet de nettoyer et réguler notre organisme. Le principe est plutôt simple: éliminer les toxines et le stress.",
      benefits: ["Drainage lymphatique", "Massage lifting du visage", "Élimination des toxines"],
      image: cuppingImage
    },
    {
      title: "Nutrition",
      description: "La Nutrition est l'ensemble des actions et processus par lesquels un être vivant récupère et transforme des substances pour assurer son fonctionnement. Elle a pour objectif que l'individu parvienne à nourrir le mieux possible son corps, son cœur et sa tête.",
      benefits: ["Équilibre alimentaire", "Bien-être physique", "Équilibre psycho-émotionnel"],
      image: nutritionImage
    }
  ];

  const formationBenefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Présentation claire & facile",
      description: "Dans une formation classique, on retient seulement 20% de ce qu'on voit et écoute ! Ici, vous retiendrez 100% grâce aux contenus téléchargeables et aux vidéos révisables à volonté."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Cours Bien Détaillés",
      description: "Nous avons mis beaucoup de temps et d'efforts dans ces formations, pour que chaque expérience soit agréable et la plus complète possible."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Espace Membre Privé",
      description: "Plusieurs modules débloqués automatiquement au fur et à mesure, pour ne pas vous surcharger d'informations et vous laisser le temps de bien maîtriser chaque concept."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Apprendre à domicile",
      description: "Formez-vous directement depuis chez vous, à votre rythme, pour suivre la partie théorique de cette formation."
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Journées Pratiques",
      description: "Elles seront complètes afin que vous puissiez être capable de pratiquer vous-même les différentes techniques."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Formations"
        subtitle="Les Bienfaits d'une formation claire, efficace et recommandée"
      />

      {/* Formation Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formationBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-wellness-sage-light text-wellness-sage">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="text-wellness-sage">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Formations */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-wellness-sage mb-12">
            Nos Formations Disponibles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {formations.map((formation, index) => (
              <ServiceCard
                key={index}
                title={formation.title}
                description={formation.description}
                benefits={formation.benefits}
                image={formation.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Techniques */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-wellness-sage mb-12">
            Techniques Spécialisées
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-wellness-sage">Massage Lifting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Le Massage Lifting a pour but de traiter l'affaissement et le relâchement de la peau et des muscles du visage 
                  (tempes et sourcils, joues, bajoues ovale du visage) et également de retendre la peau au niveau du cou.
                </p>
                <p className="text-sm text-muted-foreground">
                  Vous allez pouvoir offrir un service de prévention à votre visage par le Massage Lifting, 
                  et à votre corps par un drainage lymphatique grâce aux magnifiques résultats après chaque séance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-wellness-sage">Massage Pression Chaude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Le Massage Pression Chaude libère les tensions et douleurs. Cette technique encourage le corps 
                  à mener un processus de guérison naturel.
                </p>
                <p className="text-sm text-muted-foreground">
                  Une solution naturelle et efficace pour éliminer les toxines et le stress tout en favorisant 
                  la régénération de l'organisme.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-wellness-sage hover:bg-wellness-sage/90 text-white">
                Nous Contacter pour plus d'Informations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;