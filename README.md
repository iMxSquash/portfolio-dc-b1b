<img src="img/logo.png" alt="Logo Elwen Coussot" width="48" />

# Portfolio DC — Elwen Coussot

Portfolio interactif avec une interface inspirée de **macOS**, conçu pour présenter mes travaux de première année à DC (Design & Création). Le site simule un bureau avec un Finder, un dock et des fenêtres pour naviguer entre les projets réalisés sur Photoshop, Illustrator et Premiere Pro.

**[Voir le site en ligne →](https://imxsquash.github.io/portfolio-dc-b1b/)**

---

## Aperçu

L'interface reproduit l'environnement macOS :

- **Barre de menu** avec horloge en temps réel (algorithme de Zeller pour le jour de la semaine), indicateurs de batterie et Wi-Fi
- **Dock** avec accès direct aux sections Photoshop, Illustrator et Premiere Pro
- **Finder** interactif pour naviguer dans le portfolio
- **Fenêtres Notes** pour les sections À propos, Contact et Aide
- **Responsive** — barre de navigation adaptée mobile/tablette

## Sections

| Section | Description |
|---|---|
| `index.html` | Bureau principal avec dock et Finder |
| `photoshop.html` | Galerie de réalisations Photoshop |
| `illustrator.html` | Galerie de réalisations Illustrator |
| `premierpro.html` | Galerie de réalisations Premiere Pro |

## Stack technique

- HTML5 / CSS3 (vanilla, sans framework)
- JavaScript (vanilla, sans dépendance)
- Google Fonts — Roboto
- Polices d'icônes en SVG inline

## Lancer le projet localement

Aucune étape de build requise. Ouvrez simplement `index.html` dans un navigateur, ou lancez un serveur statique local :

```bash
npx serve .
```

> [!NOTE]
> Les chemins d'images utilisent des URLs absolues (`/img/...`). Un serveur local est recommandé pour éviter les erreurs de chargement en ouvrant directement le fichier.

## Structure du projet

```
.
├── index.html
├── photoshop.html
├── illustrator.html
├── premierpro.html
├── css/
│   ├── normalize.css
│   ├── style.css          # styles du bureau principal
│   ├── photoshop.css
│   ├── illustrator.css
│   └── premierpro.css
├── js/
│   ├── script.js          # logique commune (dock, Finder, horloge)
│   ├── photoshop.js
│   ├── illustrator.js
│   └── premierpro.js
└── img/                   # assets visuels (WebP/JPG)
```
