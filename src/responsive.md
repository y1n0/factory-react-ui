# Responsive

## Styled-system
La bibliothèque `styled-system` fournit son propre système pour définir un style responsive.
Ce système offre une syntaxe pratique pour ajouter des styles responsives en gardant à l'esprit l'approche mobile-first.

**Exemple :**

Etant donné la définition des breakpoints suivante :
```
theme.breakpoints = [
    '576px', 
    '768px', 
    '992px', 
    '1200px'
];
theme.breakpoints.xs = '0px';
theme.breakpoints.sm = '576px'; 
theme.breakpoints.md = '768px';
theme.breakpoints.lg = '992px'; 
theme.breakpoints.xl = '1200px';

thme.fontSize = ['12px', '16px', '24px']

```
 
```
<Box width={['100%', '80%', '50%']} bg={['primary200', 'parimary500']} fontSize={[1,2,3]}>
    I'm a regular box
</Box>
```

Le CSS généré est: 
```
.box-hash {
    width: 100%;
    background-color: #d9e4ff;
    font-size: 12px;
} 

@media screen add (min-with: 576px ) {
    .box-hash {
        width: 80%;
        background-color: #3366ff;
        font-size: 16px;
    } 
}

@media screen add (min-with: 768px) {
    .box-hash {
        width: 50%;
        font-size: 24px;
    } 
}
```
On peut également définir le style responsive en utilisant les alias : (Cet exemple est équivalent au précédent)
```
<Box width={{
    _: '100%', // valeur par défaut
    sm: '80%',
    md: '50%'
}}>
    I'm a regular box
</Box>
```

### La propriété `sx`:

La syntaxe pour créer un style responsive avec `sx` est:  
```
<Box sx={{
    fontSize: [1, 2, 3] ✅
    width: ['100%', '80%', '50%'] ✅
}}>
    I'm a regular box
</Box>
```


### Recap

- Vous pouvez définir des règles css responsives en utilisant:
    - Des tableaux : `['defaultValue', 'value1', 'value2']`
    - Des objets d'alais: `{_:'defaultValue', xs: 'value1', md: 'value2'}`
- Les propriétés de l'objet `sx` ne prennent que les tableaux:
```
sx={{
    fontSize: [1, 2, 3], ✅
    width: { _: '100%',sm: '80%',md: '50%'}, ❌
    backgroundColor: ['primary200', 'parimary500']✅
}}>
```
- 


## Styled-components

`styled-components` est un library `CSS-in-JS`, c'est à dire on peut écrire des règles css natives dans notre code js.

Donc cette déclaration est toujours valide avec `styled-components`:
```
const MyComponant = styled.div`
   @media screen add (min-with: 576px ) {
    .box-hash {
        width: 80%;
        background-color: #3366ff;
        font-size: 16px;
    } 
}
`
```

Pour éviter ce boilerplate code, `vactory-ui` offre des utilities pour générer des media queries:

```
import {lessThan, greaterThan, between} from 'vactory-ui';


const MyCompnent = styled(Box)`

    ${
        lessThan('md')`
            background-color: red;
        `
    }

    ${ greaterThan('md')`
            background-color: green;
        `
    }

    ${
        between('52rem', '60rem')`
            background-color: yellow
        `

    }
`;
```

Le CSS généré est:

```
@media (max-width:) {
    .box-hash {
        background-color: red;
    } 
}

@media (min-with:) {
    .box-hash {
        background-color: green;
    } 
}

@media (min-with: 52rem) and (max-width: 60rem){
    .box-hash {
        background-color: yellow;
    } 
}
```


## JS / JSX

`vactory-ui` expose des hooks pour gérer le responsive:
```
import {  useMediaBetween, useMediaGreaterThan, useMediaLessThan } from 'vactory-ui';

const MyComponant = (props) => {
    const isLassThan = useMediaLessThan('md'); // true at media(max-with: md)
    const isGreaterThan = useMediaGreaterThan('md'); // true at media(min-with: md)
    const isBetween = useMediaBetween('md', 'lg'); // true at media(min-with: md) and media(max-with: lg)
}

```
