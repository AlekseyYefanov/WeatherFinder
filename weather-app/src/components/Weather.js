import React from 'react';

const Weather = props => {
    return (
    <div className="weather__info">
    {
        props.city && props.country && <p className="weather__key">Местонахождение:
            <span className="weather__value"> {props.country}, {props.city}</span>
            </p>
    }
    {
        props.temperature && <p className="weather__key">Температура:
            <span className="weather__value"> {props.temperature}</span>
            </p>
    }
    {
        props.humidity && <p className="weather__key">Влажность:
            <span className="weather__value"> {props.humidity}</span>
            </p>
    }
    {
        props.description && <p className="weather__key">Условия:
            <span className="weather__value"> {props.description}</span>
            </p>
    }
    {
        props.error && <p className="weather__key"><span className="weather__error"> {props.error}</span></p>
    }
    </div>
    );
}

export default Weather;