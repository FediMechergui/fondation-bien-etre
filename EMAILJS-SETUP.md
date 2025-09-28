# EmailJS Setup Guide - Fondation Bien Être

## 📧 Configuration EmailJS pour votre site web

### Étape 1: Créer un compte EmailJS

1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois inclus)
3. Vérifiez votre email

### Étape 2: Configurer un Service Email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé pour simplicité)
   - **Outlook** 
   - **Yahoo**
   - Ou tout autre service SMTP

4. Configurez les paramètres :
   - **Service Name** : `Fondation Bien Être`
   - **From Name** : `Fondation Bien Être`
   - **Reply To** : votre email professionnel
   - Connectez votre compte email

5. Notez votre **Service ID** (ex: `service_abc123`)

### Étape 3: Créer un Template Email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Donnez un nom : `Contact Form - Fondation Bien Être`

4. **Copiez et collez le contenu HTML** du fichier `email-template.html` dans l'éditeur

5. **Variables utilisées dans le template :**
   - `{{from_name}}` - Nom du client
   - `{{from_email}}` - Email du client  
   - `{{phone}}` - Téléphone du client
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Message du client
   - `{{date}}` - Date et heure d'envoi
   - `{{to_name}}` - Nom du destinataire (votre entreprise)

6. **Configurez les paramètres du template :**
   - **From Name** : `{{from_name}}`
   - **From Email** : votre email professionnel
   - **Subject** : `[Site Web] {{subject}}`
   - **To Email** : votre email de réception

7. Testez le template et notez votre **Template ID** (ex: `template_xyz789`)

### Étape 4: Récupérer votre Public Key

1. Allez dans **"Account"** → **"General"**
2. Trouvez votre **Public Key** (ex: `your_public_key_here`)

### Étape 5: Configuration du projet

1. **Créez un fichier `.env.local`** à la racine de votre projet :

```bash
# Configuration EmailJS - Fondation Bien Être
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. **Remplacez les valeurs** par celles obtenues dans EmailJS

3. **Redémarrez votre serveur de développement** :
```bash
bun run dev
```

### Étape 6: Configuration Gmail (si utilisé)

Si vous utilisez Gmail :

1. **Activez l'authentification à 2 facteurs**
2. **Créez un mot de passe d'application** :
   - Allez dans Paramètres Google → Sécurité
   - Authentification en 2 étapes → Mots de passe des applications
   - Générez un mot de passe pour "EmailJS"
3. **Utilisez ce mot de passe** dans la configuration EmailJS

### 🧪 Test de fonctionnement

1. Lancez votre site web
2. Allez sur la page Contact
3. Remplissez le formulaire
4. Envoyez un message test
5. Vérifiez votre boîte email

### 📋 Variables d'environnement requises

| Variable | Description | Exemple |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | ID du service email | `service_abc123` |
| `VITE_EMAILJS_TEMPLATE_ID` | ID du template | `template_xyz789` |
| `VITE_EMAILJS_PUBLIC_KEY` | Clé publique EmailJS | `your_public_key` |

### 🚨 Important - Sécurité

- ✅ Les variables commencent par `VITE_` (accessibles côté client)
- ✅ La Public Key peut être exposée (c'est normal)
- ✅ N'exposez jamais votre Private Key
- ✅ Le service EmailJS limite naturellement les envois

### 🎨 Personnalisation du template

Vous pouvez modifier le template HTML pour :
- Changer les couleurs (remplacez `#7c9885` par votre couleur)
- Modifier la mise en page
- Ajouter votre logo
- Personnaliser les messages

### 📞 Support

En cas de problème :
1. Vérifiez que toutes les variables d'environnement sont correctement définies
2. Regardez la console du navigateur pour les erreurs
3. Testez le template directement dans EmailJS
4. Vérifiez que votre service email est bien configuré

### 💡 Conseils

- **Quota gratuit** : 100 emails/mois
- **Upgrade possible** : Plans payants pour plus d'emails
- **Auto-réponse** : Créez un 2ème template pour confirmer la réception au client
- **Spam** : Assurez-vous que vos emails n'arrivent pas en spam