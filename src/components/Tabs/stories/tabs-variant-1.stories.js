import React from 'react';
import { Box } from '../../Box';


import {Tabs} from '../Tabs';
import {Tab} from '../Tab';
import { DirectionManager } from '../../../core';



const TabsVariant1 = props => {
    let {
        showBar,
        children,
        ...rest} = props;

    
    return <Tabs showBar={true} {...rest} sx={{
        border: 0,
        margin: '1rem',
        '.vf-tabs__header-container' :{
            backgroundColor: 'transparent',
            borderBottom:'1px solid',
            borderBottomColor: 'gray400'
        },
        '.vf-tabs__ink-bar': {
            height: '3px',
            bottom: '-2px',
            borderRadius: '1rem',
            backgroundColor: 'primary500'
        },
        '.vf-tabs__tab' : {
            backgroundColor: 'transparent',
            fontSize: '16px',
            fontFamily: 'sans',
            fontWeight: 300,
            color: 'black500',
        },
        '.vf-tabs__tab--active' : {
            color: 'primary500',
        },
        '.vf-tabs__content-container' : {
            paddingY: 'medium',
            fontSize: '16px',
            fontFamily: 'sans',
            fontWeight: 300,
            lineHeight: '30px'
        }
    }}>
        {children}
    </Tabs>
}

export const Variant1= () => {
    
    return (
        <DirectionManager>
            <Box>
                <TabsVariant1>
                    <Tab title="A chaque moment de la vie">
                        Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi.
                        Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad.
                        Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis.
                        Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                    </Tab>
                    <Tab title="Qui que vous soyer">
                        Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex.
                        Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do.
                        Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt.
                        Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt.
                        Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.
                    </Tab>
                    <Tab title="Partout dans le monde">
                        Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex.
                        Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam.
                        Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud.
                    </Tab>
                    <Tab title="Nous Filiales à votre service">
                        Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem.
                        Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt.
                        Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit.
                        Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate.
                        Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.
                    </Tab>
                </TabsVariant1>
        </Box>
            </DirectionManager>

    )
}


export default {
    title: 'Components/Tabs',
};