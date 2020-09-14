# Bien démarrer


## Installation

Pour installer la bibliothèque `vactory-ui` sur votre projet React, lancez la commande `yarn` suivante:
```
yarn add git+ssh://git@bitbucket.org:adminvoid/factory-react-ui.git
```


## ThemeProvider
Après l'ajout de `vactory-ui` vous devez installer `styled-components` pour le `ThemeProvider` et installer `deepmerge`  pour fusionner  votre objet `theme` et celui de `vactory-ui`.

```
yarn add styled-components
yarn add deepmerge
```

```
import { vactoryTheme, ColorModeProvider, DirectionManager } from 'vactory-ui';
import { ThemeProvider } from 'styled-components';
import deepmerge from 'deepmerge';

const customThem = {
    colors: {
        primary: "#1EA7FD"
    }
}

const theme = deepmerge.all([vactoryTheme, customTheme]);
function App() {
    return (
        <ThemeProvider theme={theme}>
                <DirectionManager>
                        <AboutUsPage />
                </DirectionManager>
        </ThemeProvider>
    );
}
```

Le composant `<ThemeProvider />`  permet à tous les composants enfants d'accéder aux valeurs du theme, graçe à la prop `theme`.

## Theme Object

**Theme Object** est un objet JS qui contient les valeurs de votre theme. 

Le **Theme Object** de `vactory-ui`, appelé `vactoryTheme`, contient des valeurs par défaut utilisées par les composants de `vactory-ui`

On peut classer les valeurs de `vactoryTheme` en deux catégories:
 - Les valeurs constantes: définissent les **Design Tokens**, `colors`, `fonts`, `sizes`, `borders` ... 
 - Les valeurs composants: définissent les règles css des composants, `Accordion`, `Button`, `Grid` ...

### Custom Theme Object

Vous pouvez surcharger les valeurs de `vactoryTheme`, ou définir vos propres valeurs.

```
import { vactoryTheme } from 'vactory-ui';

const myTheme = {
    colors: {
        primary500: '#1EA7FD',
        customRedColor: '#dd4b39'
    }
};

const theme = deepmerge.all([vactoryTheme, myTheme]);

```

## Box

Les composants UI de `vactory-ui` sont construits et composés par le composant générique `Box`.

`Box` offre plusieurs options pour styler vos composants UI, via:
 - 1. La propriété `variant`
 - 2. La propriété `__css`
 - 3. La propriété `sx`
 - 4. Les propriétés de `styled-system`

## Styler vos composants

### 1. La propriété `variant`

La propriété `variant` du composant permet de définir une variante et de l'associer avec les règles de styles définies dans le theme.

```
// MyComponant.js
const MyComponant = ({children, ...rest}) => <Box variant="mycomponant">{children}</Box>
```
```
// theme.js
const customTheme = {
    ...
    mycomponant: {
        color: 'primary500',
        padding: '8px',

        'css selector' : {

        }
    }
}
```

### 2. La propriété `__css` et `sx`

Les propriété `__css` et `sx` prennent un objet js, les règles de style sont définies par key-value, `key` est le nom de la propriète css en camel-case (`background-color` devient `backgroundColor`), et `value` est la valeur de la propriété.


```
// MyComponant.js

const customStyle = {
    color: 'primary500',
    paddingTop: '8px',
    paddingBottom: '8px',
    ...

}

const MyComponant = ({children, ...rest}) => <Box sx={customStyle}>{children}</Box>
```

### 3. Les propriétés de `styled-system`
Le composant `Box` offre aussi la possibilité de changer des propriétés css via des props de `styled-system`.


```
// MyComponant.js

const MyComponant = ({children, ...rest}) => <Box color="primary500" pt="8px" pb="8px">{children}</Box>
```

Les props :

| api          | Description   |
|---------------|---|
|  space        |  The space utility converts shorthand margin and padding props to margin and padding CSS declarations |
|  color        |  The color utility parses a component's `color` and `bg` props and converts them into CSS declarations |
|  layout       |  Les props de flexbox incluent des prop de style pour `width`, `height`, `display`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`, `size`, `verticalAlign`, `overflow`, `overflowX`, and `overflowY`.|
|  flexbox      | Les props de flexbox incluent des prop de style pour `alignItems`, `alignContent`, `justifyItems`, `justifyContent`, `flexWrap`, `flexDirection`, `flex`, `flexGrow`, `flexShrink`, `flexBasis`, `justifySelf`, `alignSelf`, and order.  |
|  border       |  Les props de border incluent des prop de style pour `border`, `borderWidth`, `borderStyle`, `borderColor`, `borderRadius`, `borderTop`, `borderTopWidth`, `borderTopStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderRight`, `borderRightWidth`, `borderRightStyle`, `borderRightColor`, `borderBottom`, `borderBottomWidth`, `borderBottomStyle`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderLeft`, `borderLeftWidth`, `borderLeftStyle`, `borderLeftColor`, `borderX`, and `borderY`.  |
|  typography   | les props de typography incluent `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `textAlign`, and `fontStyle`.   |
|  boxShadow    |  Les props de boxShadow incluent des prop de style pour `textShadow` and `boxShadow`. |


Documentation officielle [styled-system](https://styled-system.com)