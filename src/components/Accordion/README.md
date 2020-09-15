# Accordion
```
import {Accordion, AccordionPanel} from 'vactyory-ui';
```

## Description
L'accordion est un composant dynamique qui permet d'optimiser l'affichage d'un contenu dans un espace réduit grâce à un système de **plier/délier** appliqué sur un groupe de panneaux. Il aide les utilisateurs à trouver facilement l'information qu'ils recherchent.


## API

`vactory-ui` expose trois composants pour implémenter l'accordion: `Accordion` , `AccordionPanel` et `AccordionContext`.

Voir le use-case sur storybook `(Storybook/Components/Accordion/Variant 1)`

### Les propriétés de **`Accordion`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|
| activeIndex         | L'indice du panneau activé. Il peut prendre la valeur `panelKey` d'un des panneaux. ou l'indice du panneau de `0` à `n`    | `number` ou `string`   | -   |
| multiple         | Si `true` l'utilisateur peut étendre plusieurs panneaux à la fois.  | `boolean`   | `false`   |
| onChange         | La fonction à executer lorsque un panneau est activé.   | `function(indexes)`   |    |
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `accordion`   |
| Box's props         |    |    |    |


### Les propriétés de **`AccordionPanel`** :

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|
| title         | le titre du panneau | `string` ou `JSX compoennt`   | -   |
| panelKey         | l'identifiant du panneau | `string`   |    |
| animationTransition | Les caractéristiques de la transition  | `object` | `{ ease: "easeInOut", duration: 0.3 }`  
| Box's props         |    |    |    |


