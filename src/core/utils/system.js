
import { props as systemProps } from '@styled-system/should-forward-prop';
import { size, space, margin, layout } from 'styled-system';

import css, { get } from '@styled-system/css';


const PRE = new RegExp(`^(${systemProps.join('|')})$`);

const _getProps = (test) => (props) => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}

const MRE = new RegExp(`^(${margin.propNames.join('|')})$`);
export const getMarginProps = _getProps(k => MRE.test(k));
export const omitMarginProps = _getProps(k => !MRE.test(k));

export const getSystemProps = _getProps(k => PRE.test(k));

const SizePropsRegExp = new RegExp(`^(${size.propNames.join('|')})$`);
export const omitSizeProps = _getProps(k => !SizePropsRegExp.test(k));
export const getSizeProps = _getProps(k => SizePropsRegExp.test(k));

const LayoutPropsRegExp = new RegExp(`^(${layout.propNames.join('|')})$`);
export const omitLayoutProps = _getProps(k => !LayoutPropsRegExp.test(k));
export const getLayoutProps = _getProps(k => LayoutPropsRegExp.test(k));

const SpacePRopsRegExp = new RegExp(`^(${space.propNames.join('|')})$`);
export const omitSpaceProps = _getProps(k => !SpacePRopsRegExp.test(k));
export const getSpaceProps = _getProps(k => SpacePRopsRegExp.test(k));

export const omitProps = (propsToOmit) => _getProps(k => {
    const exp = new RegExp(`^(${propsToOmit.join('|')})$`);
    return !exp.test(k)
});

export const getProps = (propsToGet) => _getProps(k => {
    const exp = new RegExp(`^(${propsToGet.join('|')})$`);
    return !exp.test(k)
});


export const sx = props => css(props.sx)(props.theme);
export const base = props => css(props.__css)(props.theme);

export const variant = ({
    theme,
    variant,
}) => css(get(theme, variant))(theme);

export const variantReducer = (accumulator, currentValue) => currentValue ? accumulator + '.' + currentValue : accumulator;
export const getVariant = (variant = []) => {
    console.log(variant);
    if (typeof variant === 'string') {
        return variant
    }
    return variant.reduce(variantReducer)
}
