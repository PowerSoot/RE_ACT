export function handleButtonClick() {
    const promise = fetch('https://api.spacexdata.com/v3/launches/latest');
    promise.then(parseResponse);
}
