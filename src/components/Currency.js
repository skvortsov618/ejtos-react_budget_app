import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    let currname = ""
    switch (currency) {
        case "$":
            currname = "Dollar";
            break;
        case "£":
            currname = "Pound";
            break;
        case "€":
            currname = "Euro";
            break;
        case "₹":
            currname = "Ruppee";
            break;
        default:
            currname = "";
    }
    const handleCurrencyChange = (curr) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        });
    }
    return (  
<div className="dropdown">
    <button className="btn btn-success dropdown-toggle" type="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Currency ({currency} {currname})
    </button>
    <div className="dropdown-menu" aria-labelledby="currencyDropdown">
        <button className={`dropdown-item ${currency === "$" ? "selected" : ""}`} type="button" onClick={() => handleCurrencyChange("$")}>$ Dollar</button>
        <button className={`dropdown-item ${currency === "£" ? "selected" : ""}`} type="button" onClick={() => handleCurrencyChange("£")}>£ Pound</button>
        <button className={`dropdown-item ${currency === "€" ? "selected" : ""}`} type="button" onClick={() => handleCurrencyChange("€")}>€ Euro</button>
        <button className={`dropdown-item ${currency === "₹" ? "selected" : ""}`} type="button" onClick={() => handleCurrencyChange("₹")}>₹ Ruppee</button>
    </div>
</div>
    );
};
export default Currency;
