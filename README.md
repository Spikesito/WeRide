# <p align="center">WeRide</p>
  
Ce projet est une application mobile développée avec React Native. L'application permet aux utilisateurs de naviguer dans différentes sections, telles que le fil d'actualité avec la possibilité de voir des trajets, la messagerie et le profil.

Vous retrouverez la partie front et la partie back sur deux branches différentes:
- Sur la branche ```master/back```, vous retrouverez toute la partie back, réalisée par Quentin FAYOLLE et Emile SEGURET.
- Et sur la branche ```master/front```, vous retrouverez toute la partie front, réalisée par Gabby THOYER et Amaury LYONNET.

Ce projet sera amené à être terminé dans d'ici Septembre 2023 donc restez à l'affût si vous souhaitez voir la suite !


## 🧐 Fonctionnalités
Front:

- Page d'inscription et de connexion.
- Fil d'actualité avec affichage des trajets selon deux options :
    - Découvrir : accès aux trajets de tous les utilisateurs de l'application
    - Mes amis : accès aux trajets de ses amis uniquement 
    - Possibilité d'accèder à la liste des amis ainsi qu'au paramètre 
    - Page plus d'information sur un trajet en cliquant dessus.
    - On trouve aussi la possibilité de visualiser le profil d'un autre utilisateur.
- Découvrir : 
    - Permet aux utilisateurs de rechercher d'autre utilisateurs  
    - Mais aussi avec une page filtre pour rechercher des trip précis et de découvrir de nouveaux contenus.
- Mes trajets avec deux partie disctincte: 
    - Une permettant aux utilisateurs de créés leurs trajet 
    - Et l'autre partie permettant au utilisateurs de visualiser leurs trajets créé au part avant.
- Messagerie : offre un moyen de communication entre les utilisateurs de l'application.
- Profil : 
    - Permet aux utilisateurs de visualiser leurs profils
    - Mais aussi de le modifier.

Back:

- Page d'inscription et de connexion avec gestion d'erreur
- Page d'acueil avec affichage des trajets selon deux options :
    - Découvrir : accès aux trajets de tous les utilisateurs de l'application
    - Mes amis : accès aux trajets de ses amis uniquement
    - Page plus d'information sur un trajet en cliquant dessus.
    - Possibilité de rejoindre un trajet sur la page détail de ce dernier.
- Messagerie : un utilisateur est ajouté à une messagerie d'un trajet dès qu'il la rejoint
- Accès à son profil avec plusieurs options de modification :
    - Affichage de certaines données utilisateur / modification possible de toutes les données utilisateur.
    - Ajout de sa moto / modification de sa moto
    - Affichage de ses trajets / modification ou suppression possible d'un trajet
- Une page de création de trajet : 
    - Formulaire pour ajouter les informations nécessaires
    - Autocomplétion des adresses avec une API du gouvernement français
    - Possibilité d'ajouter des étapes / supprimer

## 🛠️ Pour exécuter ce projet, vous devez disposer des éléments suivants :
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en)
- Expo CLI installé globalement (npm install -g expo-cli)
- Un émulateur Android ou iOS, ou un appareil mobile avec l'application Expo Go installée


## 🛠️ Install Dependencies  
Clonez ce dépôt sur votre machine locale :  
```bash
git clone https://github.com/Spikesito/WeRide.git
```
Pour accèder à la branch ```master/back```:
```bash
git checkout master/back
```
Ou pour accèder à la branch ```master/front```:
```bash
git checkout master/front
```
Accédez au dossier du projet et installez les dépendances :
```bash
cd .\weride\
npm install
```
Démarrez l'application avec Expo :
```bash
npx expo start
```
Ouvrez l'émulateur Android ou iOS, ou scannez le QR code avec l'application Expo Go sur votre appareil mobile.

## Créateurs : 

Equipe Backend : Quentin FAYOLLE & Emile SEGURET

Equipe Frontend : Gabby THOYER & Amaury LYONNET
