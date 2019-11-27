import React from 'react'
import { Menu } from 'semantic-ui-react';

export default () => {
    return (
        <Menu style = {{ marginTop :'10px'}}>
            <a className="item">
                DEPA
            </a>

            <Menu.Menu position = "right">
                <a className="item">
                    Accounts
                </a>
                <a className="item">
                    Sign up
                </a>
            </Menu.Menu>
        </Menu>
    );
}