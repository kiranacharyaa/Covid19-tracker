import React from 'react';
import {formatNumbers} from './util';

function InfoBox({classname, title, cases, total}) {

    let casesFormated = (cases >= 0)? `+${cases}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Loading..";
    let totalCasesFormated = (total >= 0)? `+${total}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Loading..";

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
