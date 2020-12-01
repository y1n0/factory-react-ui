# Form

```
import { Checkbox , Radio, Input, Select} from 'vactyory-ui';
```

## Description
`vactory-ui` expose quatre composants de formulaire:
- `Checkbox`
- `Radio`
- `Input`
- `Select`


## Checkbox
### Description
Les cases à cocher permettent à l'utilisateur de sélectionner un ou plusieurs objets d'un ensembe.

### API

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| iconName         | La nom de l'icon du checkbox | `string`   | `null`   |
| checkedIconName         | La nom de l'icone à utiliser lorsque l'utilisateur coche une case à cocher | `string`   | ``   |
| uncheckedIconName | La nom de l'icone à utiliser lorsque l'utilisateur coche une case à cocher  | `string`   |   |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `checkbox`   |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |


## Radio
### Description
Les radios buttons permettent a l'utilisateur de sélectionner un choix parmi un ensemble de choix.
### API

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| iconName         | La nom de l'icon du checkbox | `string`   | `null`   |
| checkedIconName         | La nom de l'icone à utiliser lorsque l'utilisateur sélectionne une case| `string`   | ``   |
| uncheckedIconName | La nom de l'icone à utiliser lorsque l'utilisateur sélectionnne une case | `string`   | `anchor.default`   |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `radio`   |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |


## Input
### Description
Les champs de texte permettent aux utilisateurs d'entrer et de modifier du texte.
### API

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| variant         | les variants de input. les valeurs possibles: `"default"`, `"dam"`, `"awb"`| `string`   | `"default"`,   |
| status         | LE statut de l'input. les valeurs possibles: `"primary"`, `"danger"`, `"success"`, `"info"`, `"warning"` | `string`   | `"primary"`   |
| size         | indique la taille du bouton.les  valeurs possible: `"small"`, `"medium"`, `"large"` | `string`| `"medium"` |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `radio`   |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |

## Select
### Description
Select components are used for collecting user provided information from a list of options.
### API

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| options       | An object of the form `"{" [ opt1: "{" "value": val1, [ attr: attr_value ].. "}" ].. "}"`. The Object key is used as the option's name, the rest of its sub-keys are set as attributes to the option. In the presense of this prop, the `children` are not rendered. | object of objects with a mandatory `value` key | `undefined` |
| state         | Controls the visual state of the input. Possible values are `default`, `success`, `danger`, `info`. | `string`   | `default`   |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `radio`   |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |