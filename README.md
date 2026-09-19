# Difun

Outil de publication automatique multi-canal pour indépendants (vendeurs de véhicules d'occasion en premier cas d'usage) : une annonce imprimée en PDF + des photos, diffusées automatiquement sur Facebook, Instagram et le site internet du client.

## Contenu de ce dépôt

- `index.html` — prototype front-end interactif (parcours complet : dépôt du PDF/photos → analyse simulée → vérification/édition → publication → historique). Fichier autonome, sans dépendance à installer.
- `guide-pdf.html` — guide client pas-à-pas pour transformer une annonce en PDF avant de la déposer dans Difun, selon l'appareil (ordinateur, Android, iPhone/iPad).

## Comment les ouvrir

Double-clique sur `index.html` ou `guide-pdf.html`, ou ouvre-les depuis ton navigateur (`Fichier > Ouvrir`). Aucun serveur n'est nécessaire pour cette version.

## État actuel

Ceci est un prototype de démonstration : l'extraction des champs (marque, modèle, prix, kilométrage, description) est **simulée** avec des exemples, pas une vraie lecture du PDF. La prochaine étape pour un fonctionnement réel est de brancher l'API Claude sur l'étape d'analyse, ce qui nécessite un petit backend et une clé API.

## Documents de référence

Le cahier des charges complet (architecture, budget, calendrier, risques, plan commercial, onboarding) est tenu à jour sur un document Claude partagé séparément.

## Prochaines étapes techniques suggérées

1. Brancher l'extraction réelle du PDF (API Claude) sur l'étape d'analyse.
2. Ajouter la connexion réelle aux comptes Facebook/Instagram (API Graph Meta) et au site WordPress (API REST), quand applicable.
3. Remplacer le stockage `localStorage` de l'historique par une vraie base de données côté serveur, une fois le backend en place.
4. Construire la version installable (PWA) avec intégration au partage natif Android.
5. Développer l'extension de partage native iOS (compte développeur Apple requis).
