# Tabs

### Description
Les tabs sont typiquement utilisées pour visualiser :
- Un contenu de même type;
- Les aspects différents d'un même objet

### API
`vactory-ui` expose deux composants: `Tab` et `Tabs`.

Les propriétés de **`Tabs`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| activeTab      | Indique l'élément activé |  `string`  | -   |
| showBar      | Pour afficher une barre qui se déplace lorsque l'utilisateur change d'onglet|  `booleann`  | `false`   |
| onChange      | La fonction à exécuter Lorsque l'utilisateur change d'onglet |  `function(indice)`  | `false`   |
| variant       | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `tabs`   |
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |

Les propriétés de **`Tab`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| title      | Le titre/label de l'onglet|  `string`  | -   |
| isActive      | Indique si l'onglet doit être activé ou non|  `boolean`  | `false`   |
| variant       | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `tabs`   |
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |