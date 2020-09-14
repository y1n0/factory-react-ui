# Breadcrumb

### Description
Breadcrumb permet :

- - D'indiquer la position courante de l’internaute dans l’arborescence du site par rapport à la page d’accueil;
- - A l’internaute de remonter dans l’arborescence du site;


### API

`vactory-ui` expose deux composants pour implémenter le fil d'Ariane: `Breadcrumb` et `BreadcrumbItem`.

### Props

Les propriétés de **`Breadcrumb`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|
| separator         | Le séparateur des élément de breadcrumb   | `JSX component` ou `string`   | `/`   |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `breadcrumb.default`   |
| Box's props         |    |    |    |


Les propriétés de **`BreadcrumbItem`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|
| href         | Le lien de l'élément | `string`   | -   |
| active         | Indique l'ément activé ou courant | `boolean`   | `false`   |
| as         | Indique l'élément html à rendu | `string` ou `JSX component`  |  `a` |
| Box's props         |    |    |    |


### Theme Object
Le chemin de breadcrumb dans l'objet theme:
```
// theme.js
{
    ...
    breadcrumb: {
        ...

        default: {
            ...

            item: {

            },

            active : {

            }
        }
    }
}
```

