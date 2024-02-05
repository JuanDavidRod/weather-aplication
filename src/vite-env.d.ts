/// <reference types="vite/client" />

export type City = {
    label:string;
    value:string;
}
export type Days = {
    today:boolean;
    date: Date;
    avg_temp: number;
    conditionCode: number;
}

/**
 * @typedef {Object} WeatherCurrent
 * @property {string} name - Nombre de la ubicación.
 * @property {string} time - Fecha actual.
 * @property {number} temp - Temperatura actual en grados Celsius.
 * @property {string} conditionText - Descripción de las condiciones climáticas.
 * @property {number} wind - Velocidad del viento en kilómetros por hora.
 * @property {number} humidity - Humedad relativa en porcentaje.
 * @property {number} feelslike - Sensación térmica en grados Celsius.
 * @property {Days[]} days - Pronóstico para los próximos días.
 * @property {number} uv - Índice UV.
 * @property {number} vis_km - Visibilidad en kilómetros.
 * @property {number} precip_mm - Cantidad de precipitación en milímetros.
 * @property {number} pressure_mb - Presión atmosférica en milibares.
 * @property {number} cloud - Cobertura de nubes en porcentaje.
 * @property {number} gust_kph - Velocidad máxima de ráfagas de viento en kilómetros por hora.
 */
export type WeatherCurrent = {
    name:string;
    time:string;
    temp:number;
    conditionText:string;
    wind:number;
    humidity:number;
    feelslike:number;
    days: Days[];
    uv:number;
    vis_km:number;
    precip_mm:number;
    pressure_mb:number;
    cloud:number;
    gust_kph:number;
    iconCode: number
}
