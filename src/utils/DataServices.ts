const apiKey = '&appid=' + process.env.NEXT_PUBLIC_API_KEY

console.log(process.env)
export async function WeekWeatherApiCall(city: string) {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey + "&units=imperial");
    const data = await promise.json();
    return data;
}

export async function TodaysWeatherApiCall(city: string) {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + apiKey + "&units=imperial");
    const data = await promise.json();
    return data;
}

export async function CityCall(city: string) {
    const promise = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + apiKey);
    const data = await promise.json();
    return data;
}

export async function ZipStateFinderCall(zip: string) {
    const promise = await fetch("https://api.openweathermap.org/geo/1.0/zip?zip=" + zip + apiKey);
    const data = await promise.json();
    return data.name;
}