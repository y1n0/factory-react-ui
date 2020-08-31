# Vactory

## StoryBook
### `yarn storybook`
Lancez `yarn storybook` pour démarrer l'environnement Storybook. 
Storybook est accesible via `http://localhost:9009`


## Getting Started

###  RTL & LTR

#### **1. DirectionManager**
Pour supporter la direction du contenu `RTL` ou `LTR`, il suffit d'encapsuler l'application dans un composant `DirectionManager`.

```
import {DirectionManager} from 'vactory/core';

<DirectionManager dir="rtl>
    <App />
</DirectionManager>

```


#### **2. dir property**
`DirectionManager` accepete une properiété `dir` pour définir la direction, elle prend les valeurs suivantes:

- `ltr` valeur par défaut, le contenu est aligné à gauche;
- `rtl` le contenu est aligné à droite; 

#### **3. Ignorer le flipping **
Ajouter le commentaire `/* @noflip */` pour ignore le flipping d'une régle css

```
const Box = styled.div`
    background: green;
    margin-bottom: 10px;
    /* @noflip */
    ${typography}
    /* @noflip */
    border-left: 20px solid red;
`;
```


###  ThemeProvider

#### **1. ThemeProvider**

```
import {ThemeProvider} from 'styled-components;
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>

```

### **2. Modifier le theme par défaut**