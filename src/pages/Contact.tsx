import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import EmbeddedMap from "@/components/EmbeddedMap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configuration EmailJS manquante. Vérifiez vos variables d'environnement."
        );
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject || "Nouveau message depuis le site web",
        message: formData.message,
        to_name: "Fondation Bien Être",
        reply_to: formData.email,
        // Current date and time
        date: new Date().toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        toast({
          title: "Message envoyé avec succès ! ✨",
          description:
            "Nous vous répondrons dans les plus brefs délais. Merci pour votre confiance.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Erreur d'envoi ❌",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Contact"
        subtitle="Nous sommes là pour vous accompagner dans votre parcours bien-être"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-wellness-sage mb-8">
                Nos Coordonnées
              </h2>

              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-wellness-sage" />
                      <CardTitle className="text-wellness-sage">
                        Téléphone
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">07.81.99.10.44</p>
                    <p className="text-sm text-muted-foreground">
                      Disponible du lundi au vendredi
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-wellness-sage" />
                      <CardTitle className="text-wellness-sage">
                        Email
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">
                      fondation.bienensemble@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Réponse sous 24h
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-wellness-sage" />
                      <CardTitle className="text-wellness-sage">
                        Localisation
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">Région de Lille</p>
                    <p className="text-sm text-muted-foreground">France</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-wellness-sage" />
                      <CardTitle className="text-wellness-sage">
                        Horaires
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <strong>Lundi - Vendredi :</strong> 9h00 - 18h00
                      </p>
                      <p className="text-sm">
                        <strong>Samedi :</strong> 9h00 - 16h00
                      </p>
                      <p className="text-sm">
                        <strong>Dimanche :</strong> Fermé
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-wellness-sage mb-8">
                Envoyez-nous un Message
              </h2>

              <Card className="bg-gradient-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-wellness-sage">
                    Formulaire de Contact
                  </CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et nous vous répondrons rapidement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Ex: Demande d'information sur les formations"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Décrivez votre demande, vos besoins ou vos questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-wellness-sage hover:bg-wellness-sage/90 text-white disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer le Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-wellness-sage mb-8">
              Où Nous Trouver
            </h2>
            <EmbeddedMap />
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-wellness-sage text-2xl">
                  Pourquoi Nous Contacter ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold text-wellness-sage mb-2">
                      Informations Personnalisées
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Obtenez des conseils adaptés à votre situation et vos
                      objectifs de bien-être.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wellness-sage mb-2">
                      Devis sur Mesure
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Recevez un devis personnalisé pour vos besoins spécifiques
                      en formation ou séances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wellness-sage mb-2">
                      Accompagnement Expert
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Bénéficiez de l'expertise de nos professionnels diplômés
                      et reconnus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;