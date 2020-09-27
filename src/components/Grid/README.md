# Grid
```
import {Container, Row, Col} from 'vactory-ui';
```
## Description
Le système de grille permet d’aligner vos composants de page en fonction de colonnes et de lignes séquencées.
Le système de grille de `vactory-ui` est inspiré de celui de Bootstrap.


## API
`vactory-ui` expose trois composants essentiels au focntionnement de Grid System: 
- `Container` : Le conteneur du système;
- `Row` : Sert à aligner les éléments en lignes;
- `Col` : Sert à aligner les éléments en colonnes; 


#### Les propriétés de **`Container`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|---------------|---------------|
| fluid         | Indique si le conteneur occupera 100% de la largeur disponible   | `boolean`   | `false`   |


#### Les propriétés de **`Row`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|
| les props de `flexbox` de `styled-system`| Les props de flexbox incluent des prop de style pour `alignItems`, `alignContent`, `justifyItems`, `justifyContent`, `flexWrap`, `flexDirection`, `flex`, `flexGrow`, `flexShrink`, `flexBasis`, `justifySelf`, `alignSelf`, and `order`.| `string`   | -   |


#### Les propriétés de **`Col`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|---------------|---------------|
| `xs`| La largeur de la colonne pour des écrans très petits (xs < 576px)  | `string`   | -   |
| `sm`| La largeur de la colonne pour des écrans petits (sm >= 576px)  | `string`   | -   |
| `md`| La largeur de la colonne pour des écrans moyen (md >= 768px)  | `string`   | -   |
| `lg`| La largeur de la colonne pour des écrans grands (lg >= 992px)  | `string`   | -   |
| `xl`| La largeur de la colonne pour des écrans très grands (xl >= 1200px)  | `string`   | -   |

## Configuration

La configuration de Grid System se fait depuis l'objet theme.

Vous devez définir les breakpoints et les caractèristiques de Grid System.

```
const theme = {
    ...
    breakpoints : [
        '576px', 
        '768px', 
        '992px', 
        '1200px'
    ],
    gridSystem:  {
        gridSize: 12,
        gutterWidth: 16,
        outerMargin: 8,
        container: {
            sm: '540px', 
            md: '720px', 
            lg: '960px',  
            xl: '1140px',
        }
    }
    ...
}
```
Par la suite vous pouvez également définir des alias pour les breakpoints:
```
theme.breakpoints.xs = '0px';
theme.breakpoints.sm = '576px'; 
theme.breakpoints.md = '768px';
theme.breakpoints.lg = '992px'; 
theme.breakpoints.xl = '1200px';
```


Les caractéristiques du Grid System prédéfinies par `vactory-ui` sont:

```
gridSystem =  {
    gridSize: 12,
    gutterWidth: 16,
    outerMargin: 8,
    container: {
        sm: '540px', 
        md: '720px', 
        lg: '960px',  
        xl: '1140px',
    }
}
```

| Prop         | Description   |  valeur par défaut   |
|---------------|---------------|---------------|
| `gridSize`| Le nombre de colonnes   |`12` |
| `gutterWidth`| Le `padding-left` et `padding-right` de `Col` | `16px` |
| `outerMargin`| Le `padding-left` et `padding-right` de `Container`  | `8px` |
| `container`| La largeur du `Container` si la prop `fluid` vaut `false` | `{sm: '540px', md: '720px', lg: '960px',  xl: '1140px',}` |
