import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmbeddedMapProps {
  location?: string;
  className?: string;
}

const EmbeddedMap: React.FC<EmbeddedMapProps> = ({ 
  location = "Lille, France", 
  className = "" 
}) => {
  // Coordinates for Lille, France (city center)
  const lat = 50.6292;
  const lng = 3.0573;
  const zoom = 13; // Higher zoom level to focus on city
  
  // URLs for external map services
  const googleMapsUrl = `https://www.google.com/maps/search/Lille,+France/@${lat},${lng},${zoom}z`;
  const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=${zoom}`;
  
  return (
    <Card className={`bg-gradient-card shadow-soft ${className}`}>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-wellness-sage" />
          <CardTitle className="text-wellness-sage">
            Notre Localisation
          </CardTitle>
        </div>
        <CardDescription>
          Région de Lille, France - Nous intervenons dans toute la métropole
          lilloise
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 rounded-lg overflow-hidden border">
          <iframe
            src={`https://www.openstreetmap.org/export/embed.html?bbox=3.0173%2C50.6092%2C3.0973%2C50.6492&layer=mapnik&marker=${lat}%2C${lng}`}
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            title="Notre localisation à Lille sur OpenStreetMap"
          />
        </div>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold text-wellness-sage mb-2">
            Zone d'Intervention
          </h4>
          <p className="text-sm text-muted-foreground">
            Nous intervenons dans toute la métropole lilloise et les communes
            environnantes. N'hésitez pas à nous contacter pour vérifier la
            possibilité d'intervention dans votre secteur.
          </p>
          <div className="mt-3 text-sm space-y-1">
            <p>
              <strong>Région :</strong> Nord-Pas-de-Calais, France
            </p>
            <p>
              <strong>Zone de couverture :</strong> Métropole Européenne de
              Lille
            </p>
            <p>
              <strong>Communes principales :</strong> Lille, Roubaix, Tourcoing,
              Villeneuve-d'Ascq, Marcq-en-Barœul
            </p>
            <p>
              <strong>Coordonnées :</strong> 50.6292°N, 3.0573°E
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbeddedMap;