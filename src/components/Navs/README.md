# Navigation

### Description
Navigation contient une liste de liens vers des pages oui vers des sections de page. C'est un composant destinés à la navigation.

### API
`vactory-ui`  expose deux composants: `Navs` et `Nav``

Les propriétés de **`Navs`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| variant       | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `navs`   |
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |

Les propriétés de **`Nav`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| as       |  indique l'élément html à rendu  | `string`   | `a`   |
| active |  Indique l'ément activé ou courant | `boolean`   | `false`   |
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |


### Theme Object
Le chemin de `navs` dans l'objet theme:
```
// theme.js
{
    ...
    navs: {
        ...

        nav: {
            ...
        },
        activeNav: {
            ...
        }
    }
}
```