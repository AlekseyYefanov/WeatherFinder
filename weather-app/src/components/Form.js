import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.getWeather}>
            <h3 className="weather__value">Введите название города и страны на английском</h3>
            <br />
            <input type="text" name="city" placeholder="Город..." />
            <input type="text" name="country" placeholder="Страна..."/>
            <button>Узнать погоду</button>
        </form>
    );
}

export default Form;