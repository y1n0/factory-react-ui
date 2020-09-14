# Layer

### Use case

Vous pouvez utiliser ce composant pour implémenter: 
- Toolbox
- Notification ou alerts
- popup et dialogs
- Cookie
- ...


### API

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| full         |  Indique si le layer doit occuper la taille de la fenêtre  |  `boolean`   | `false`   |
| modal         | Indique si le Layer et destiné pour un modal (présence d'u overlay qui empêche l'interaction avec les éléments en-dessous du layer) | `boolean`   | `true`   |
| onClickOutside         | La fonction à executer lorsque l'utilisateur clique en dehors du Layer   | `function`   |  -  |
| plain      |  Indiquer si le layer doit avoir un background ou border|  `boolean`  | `false`   |
| position      |  La position du Layer. les valeurs possible: `center`, `bottom`, `bottom-left`, `bottom-right`, `center`, `end`, `hidden`, `left`, `right`, `start`, `top`, `top-left`, `top-right` |  `string` | `center`   
| sx      | Styler le drop via la prop `sx`  |  `object`  | -   |