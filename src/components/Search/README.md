# Search Overlay
```
import { SearchOverlay } from 'vactyory-ui';
```
## Props
| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| open       |  indique si le search overlay est ouvert ou non   | `boolean`   | `false`   |
| onClose |  La fonction à exécuter lorsque l'utilisateur ferme le search overlay | `function`   |  -  |
| inputTitle      | la valeur de l'attribut `title` de `input`  |  `string`  | `"Veuillez tapez quelques chose"`  |
| inputPlaceholder      | La valeur du placeholder  |  `string`  | `"Que recherchez-vous ?"`  |
| searchInfo      | Le texte informatif en-dessous du formulaire |  `string`  | `"Appuyer sur la touche \"Entrée\" du clavier pour lancer la recherche"`  |
| topContent      | Le section en haut du Search Overlay |  `JSX Component`  | `null`  |
| closeIcon      | L'icone de fermeture |  `Icon`  | `null`  |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `searchOverlay`   |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |


## Theme Object
Le chemin de `search-overlay` dans l'objet theme:
```
// theme.js
{
    ...
    searchOverlay: {
        ...

         wrapper : {

        },
        top: {
            closeBtn: {
                
            }
        },
        form: {
            wrapper: {

            },
            input: {

            },
            searchBtn: {

            }
        },
        info: {

        },
        
        '&.vf-search-overlay--open' : {

        },

        '&.vf-search-overlay--close' : {

        },

        '& .vf-search-overlay__content-wrapper' : {
           
        }

    }
}
```