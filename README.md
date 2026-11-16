# Baie Vivante Solidaire : site Hugo

## Ajouter un événement
    hugo new evenements/2027-03-12-mon-evenement
La **date de l’événement est le préfixe du nom du dossier** (AAAA-MM-JJ). Placez dans ce dossier :
- `cover.jpg` : l’image de l’événement ;
- les documents à télécharger (PDF…), déclarés dans `resources:` du fichier `index.md`.

## Ajouter une action
    hugo new actions/mon-action
Même principe : `cover.jpg` + documents dans le dossier. Le champ `date` sert à trier les actions (la plus récente en premier).

Les images fournies sont des illustrations d’exemple, à remplacer par de vraies photos.

## Gestion avec Pages CMS
Le fichier `.pages.yml` (à la racine) permet de gérer le site depuis https://app.pagescms.org :
pages, actions, événements, réglages, images (`assets/uploads/images`) et documents (`static/uploads/documents`).
Une image ou des documents ajoutés dans le CMS s’ajoutent à ceux déjà présents dans le dossier de la page.
Pour un événement, la date est saisie dans le CMS et sert aussi de préfixe au dossier (`AAAA-MM-JJ-titre`) ;
si vous changez la date, renommez aussi le dossier.
