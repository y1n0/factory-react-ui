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
 - - 1. La propriété `variant`
 - 2. La propriété `__css`
 - 3. La propriété `sx`
 - 4. Les propriétés de `styled-system`

## Styler vos composants

### 1. La propriété `variant`

La propriété `variant` du composant permet de définir une variante et de l'associer avec les règles de styles définies dans le theme.

```
const MyComponant = ({children, ...rest}) => <Box variant="mycomponant">{children}</Box>
```
```
const customTheme = {
    ...
    mycomponant: {
        color: 'primary500',
        padding: '8px',
        ...
        'css selector' : {

        }
    }
}
```



 
