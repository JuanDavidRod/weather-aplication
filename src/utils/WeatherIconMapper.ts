type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'storm';

export const sunnyIconCode = 1000

export default class WeatherIconMapper {
  private static weatherMap: Record<WeatherType, WeatherType> = {
    sunny: 'sunny',
    cloudy: 'cloudy',
    rainy: 'rainy',
    storm: 'storm'
  }

  public static mapIconCodeToImage (iconCode: number) {
    if (iconCode === sunnyIconCode) return WeatherIconMapper.weatherMap.sunny

    if (iconCode < 1200) return WeatherIconMapper.weatherMap.cloudy

    if (iconCode < 1265) return WeatherIconMapper.weatherMap.rainy

    return WeatherIconMapper.weatherMap.storm
  }
}
