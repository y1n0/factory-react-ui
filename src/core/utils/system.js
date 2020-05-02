
import { props as systemProps } from '@styled-system/should-forward-prop';
import { size } from 'styled-system';



const PRE = new RegExp(`^(${systemProps.join('|')})$`);

const getProps = (test) => (props) => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}

export const getSystemProps = getProps(k => PRE.test(k));

const SizePropsRegExp = new RegExp(`^(${size.propNames.join('|')})$`);
export const omitSizeProps = getProps(k => !SizePropsRegExp.test(k));


export const omitProps = (propsToOmit) => getProps(k => {
    const exp = new RegExp(`^(${propsToOmit.join('|')})$`);
    return !exp.test(k)
});