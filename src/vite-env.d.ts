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

export type Properties = {
    uv:number;
    vis_km:number;
    precip_mm:number;
    pressure_mb:number;
    cloud:number;
    gust_kph:number;
}

export type WeatherCurrent = {
    name:string;
    time:string;
    temp:number;
    conditionText:string;
    wind:number;
    humidity:number;
    feelslike:number;
    days: Days[];
    properties :Properties,
    iconCode: number
}
