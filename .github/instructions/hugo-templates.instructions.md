# Instructions Hugo Templates - Everos

## Structure des Templates

### Layout Principal (baseof.html)
```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode }}">
<head>
    {{- partial "head.html" . -}}
</head>
<body>
    {{- partial "header.html" . -}}
    <main>
        {{- block "main" . }}{{- end }}
    </main>
    {{- partial "footer.html" . -}}
    {{- partial "scripts.html" . -}}
</body>
</html>
```

### Partials Disponibles

#### head.html
- Méta tags SEO et Open Graph
- Liens vers CSS et fonts
- Favicon
- CSS personnalisé par page

#### header.html  
- Hero banner pour homepage
- Navigation via nav.html

#### nav.html
- Menu principal avec dropdowns
- Logo Everos
- Menu responsive

#### footer.html
- Liens de navigation
- Réseaux sociaux
- Contact

#### scripts.html
- Scripts JS principaux
- Scripts conditionnels par section

### Shortcodes Disponibles

#### carousel
```hugo
{{< carousel data="carousel" >}}
```

#### infocard
```hugo
{{< infocard title="Titre" icon="fas fa-icon" url="/lien/" class="class-css" >}}
Contenu de la carte
{{< /infocard >}}
```

#### lightbox
```hugo
{{< lightbox src="image.jpg" alt="Description" title="Titre" >}}
```

#### update
```hugo
{{< update type="Type" title="Titre" date="2025-01-15" url="/lien/" >}}
Description de la mise à jour
{{< /update >}}
```

#### map
```hugo
{{< map continent="slug-continent" >}}
```

### Données YAML

#### divinites.yaml
Structure pour chaque divinité :
- slug, name, title
- short_description, description
- image, colors (primary, secondary, accent, text, light)
- continent, domain

#### carousel.yaml
Slides du carousel homepage :
- title, description, image, url, active

#### updates.yaml
Mises à jour récentes :
- type, title, description, date, url

### Front Matter Standards

#### Pages de divinités
```yaml
---
title: "Nom - Titre"
description: "Description SEO"
deity_slug: "slug-divinite"
layout: "single"
---
```

#### Pages générales
```yaml
---
title: "Titre de la page"
description: "Description SEO"
layout: "single"
---
```

### Conventions CSS

#### Variables par divinité
```css
.deity-page {
    --deity-primary: #couleur;
    --deity-secondary: #couleur;
    --deity-accent: #couleur;
    --deity-text: #couleur;
    --deity-light: #couleur;
}
```

#### Classes communes
- `.container` : Conteneur principal
- `.section-title` : Titres de section
- `.btn`, `.btn-primary`, `.btn-secondary` : Boutons
- `.info-card`, `.update-card` : Cartes de contenu

### Formulaires Netlify

Configuration requise :
- `data-netlify="true"`
- `netlify-honeypot` pour spam
- `data-netlify-recaptcha="true"` pour reCAPTCHA
- Action vers page de remerciement