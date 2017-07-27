/*                                                                       
This routine calculates the distance between two points (given the    
latitude/longitude of those points). It is being used to calculate     

Definitions:  
South latitudes are negative, east longitudes are positive
                                                                       
Passed to function:                                                    
lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees) 
lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  
    unit = the unit you desire for results                          
         where: 'M' is statute miles (default)                     
                'K' is kilometers                                
                'N' is nautical miles                            
*/

function calcGeoDistance(startLocation, destLocation, unit) {

	if (!startLocation || !destLocation) return 0;

	const radlat1 = Math.PI * startLocation.latitude / 180;
	const radlat2 = Math.PI * destLocation.latitude / 180;
	const theta = startLocation.longitude - destLocation.longitude;
	const radtheta = Math.PI * theta / 180;

	let distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

	distance = Math.acos(distance);
	distance = distance * 180 / Math.PI;
	distance = distance * 60 * 1.1515;

	if (unit === 'K') distance *= 1.609344;
	if (unit === 'N') distance *= 0.8684;

	return distance;
}

module.exports = calcGeoDistance;
