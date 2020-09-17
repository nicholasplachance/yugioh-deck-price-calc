import React from 'react';

import './toggle-switch.styles.css'


const ToggleSwitch = () => {
    return(
        <div>
            <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch"/>
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
                <span className="toggle-switch-inner"/>
                <span className="toggle-switch-switch"/>
            </label>
        </div>
    )
}

export default ToggleSwitch