import React from 'react';
import {formatNumbers} from './util';

function InfoBox({classname, title, cases, total}) {
    return (
        <div className="col-sm-4">
            <div className={classname}>
                <p>{title}</p>
                <h3>+{formatNumbers(cases)}</h3>
                <p>Total: {formatNumbers(total)}</p>
            </div>
        </div>
    )
}

export default InfoBox
