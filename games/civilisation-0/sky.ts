export interface SunPosition {
    azimuth: number;
    elevation: number;
}

export function calculateSunPosition(normalizedTime: number, latitude: number, dayOfYear: number): SunPosition {
    // Constants
    const rad = Math.PI / 180;
    const deg = 180 / Math.PI;

    // Convert day of year to solar declination
    const solarDeclination = 23.45 * Math.sin((360 * (284 + dayOfYear) / 365) * rad);

    // Convert latitude to radians
    const latRad = latitude * rad;

    // Calculate the hour angle (0 to 24)
    const hour = normalizedTime * 24;
    const solarNoon = 12; // Assume solar noon is at 12:00
    const hourAngle = 15 * (hour - solarNoon);

    // Calculate elevation angle
    const elevationAngle = Math.asin(
        Math.sin(latRad) * Math.sin(solarDeclination * rad) +
        Math.cos(latRad) * Math.cos(solarDeclination * rad) * Math.cos(hourAngle * rad)
    ) * deg;

    // Calculate azimuth angle
    const azimuthAngle = Math.acos(
        (Math.sin(solarDeclination * rad) - Math.sin(elevationAngle * rad) * Math.sin(latRad)) /
        (Math.cos(elevationAngle * rad) * Math.cos(latRad))
    ) * deg;

    // Adjust azimuth angle based on time of day
    const finalAzimuthAngle = hourAngle >= 0 ? 360 - azimuthAngle : azimuthAngle;

    return {
        azimuth: finalAzimuthAngle,
        elevation: elevationAngle
    };
}


