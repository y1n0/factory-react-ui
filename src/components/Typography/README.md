# Typography
```
import { Text, Paragraph, Heading } from 'vactyory-ui';
```


## Text
Vous pouvez utiliser le composant `Text` pour afficher du text simple.

### API 
| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| as         | Indique l'élément html à rendu | `string` ou `JSX component`  |  `p` |
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |


## Paragraph
Vous pouvez utiliser le composant `Paragraph` pour représenter un paragraphe de texte.

### API 
| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| as         | Indique l'élément html à rendu | `string` ou `JSX component`  |  `p` |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `paragraph.default`   |
| Box's props         |    |    |    |

### Theme

```
const Theme = {
    ...
    paragraph: {

    }
}
```



## Heading
Vous pouvez utiliser le composant `Heading` pour afficher un titre.

### API 
| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| level         | Le niveau du titre, six niveaux possible de 1 à 6 | `number`  |  `1` |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `heading.default`   |
| Box's props         |    |    |    |

### Theme

```
const Theme = {
    ...
    heading: {
        
    }
}