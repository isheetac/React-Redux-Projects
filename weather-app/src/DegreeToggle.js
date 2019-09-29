import React, { Fragment } from 'react';

const DegreeToggle = ({ degreeType, updateForecastDegree }) => {
    return (
        <Fragment>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="degree-type"
                    id="celcius"
                    value="celcius"
                    checked = {degreeType === "celcius"}
                    onChange = {updateForecastDegree}
                />
                <label
                    className="form-check-label"
                    htmlFor="celcius">
                    Celcius
                </label>
            </div>
            <div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="degree-type"
                        id="fahrenheit"
                        value="fahrenheit"
                        checked={degreeType === "celcius"}
                        onChange={updateForecastDegree} />
                    <label
                        className="form-check-label"
                        htmlFor="fahrenheit">
                        Fahrenheit
                </label>
                </div>
            </div>
        </Fragment>
    )
}

export default DegreeToggle;