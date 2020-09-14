# Button

### Description
Les boutons permettent aux utilisateurs d'effectuer une action et de faire des choix en un seul clic.

### API
`vactory-ui` expose deux composants `Link` et `Button``

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|---------------|---------------|
| outline         | Indique le type de l'outline et change le style  du bouton en  outline. les valeurs possibles:  `"primary"`, `"danger"`, `"success"`, `"warning"`, `"info"`  | `string`   | `"primary"`  |
| size         | indique la taille du bouton.les  valeurs possible: `"small"`, `"medium"`, `"large"` | `string`| `"medium"` |
| fill         | la couleur du background; les valeurs possible:   `"primary"`, `"danger"`, `"success"`, `"warning"`, `"info"`  | `string`   | `"primary"`  |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | -  |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |