# Drop
```
import { Drop } from 'vactyory-ui';
```
## Use case

Vous pouvez utiliser ce composant pour implémenter: 
- Tooltip
- Menu contextuel
- ...


## API

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| align         | la position du drop. les valeurs possibles: `{"bottom": "bottom", "right": "right"}` `{"top": "top", "left": "left"}`   |  `object`   | `{top:  'top', left: 'left'}`   |
| onClickOutside         | La fonction à executer lorsque l'utilisateur clique en dehors du drop   | `function`   | -   |
| plain         | Préciser si le drop ne doit avoir ni background ni shadow   | `boolean`   |  `false`  |
| restrictFocus      |  Indiquer si le drop doit controler le focus ou pas  |  `boolean`  | `false`   |
| stretch      |  Indiquer si le drop doit être étiré pour correspondre à la largeur de l'élément cible  |  `boolean`  | `true`   |
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |