# Navigation
```
import { List, Item } from 'vactyory-ui';
```
## Description
Le composant `List` regroupe un ou plusieur `Item` éléments. Ils rendent 
respectivement une balise `ul` ou `ol` selon les props passés, et une 
balise `li`.

## API

### Les propriétés de **`List`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| horizontal    | pour avoir liste horizental | `boolean`   | `false`   |
| ordered       | pour rendre une list numerotée  |  `boolean`  | `false` |

On peut ainsi passer les autres props habituelles (`as`, `sx`, `__css`, `variant`, `margin`, `padding`, ...etc).

### Les propriétés de **`Item`** :

L'élément `Item` ne definit aucune props personalisée. Pourtant, il passe les props 
reçues à l'élément qu'il rend.


## Theme Object
Le style par default de ces composants peut être ajuster via l'objet `theme`, selon 
le chemin suivant, comme on peut aussi créer une nouvelle variante avec un nom et 
un path de notre choix.

```
// theme.js
{
    lists: {
        ...

        default: {
            // default List style
            ...

            li: {
                // default Item style
                ...
            }
        },
    }
}
```