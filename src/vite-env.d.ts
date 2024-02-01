/// <reference types="vite/client" />

export type City = {
    label:string;
    value:string;
}

export type WeatherCurrent = {
    name:string;
    time:string;
    temp:number;
    conditionText:string;
    wind:number;
    humidity:number;
    feelslike:number;
}
