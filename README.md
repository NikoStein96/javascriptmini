# Explain and demonstrate basic Geo-JSON, involving as a minimum, Points and Polygons
> GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on JSON, the JavaScript Object Notation. The features include points therefore addresses and locations

```javascript
{
"type": "Point",
    "coordinates": [125.6, 10.1]
}
```

+ A point refers to only one location.

```javascript
{
'type': 'Polygon',
'coordinates': [[[-67.13734351262877, 45.137451890638886],
[-66.96466, 44.8097],
[-68.03252, 44.3252],
[-69.06, 43.98],
[-70.11617, 43.68405],
[-70.64573401557249, 43.090083319667144],
[-70.75102474636725, 43.08003225358635],
[-70.79761105007827, 43.21973948828747],
[-70.98176001655037, 43.36789581966826],
[-70.94416541205806, 43.46633942318431],
[-71.08482, 45.3052400000002],
[-70.6600225491012, 45.46022288673396],
[-70.30495378282376, 45.914794623389355],
[-70.00014034695016, 46.69317088478567],
[-69.23708614772835, 47.44777598732787],
[-68.90478084987546, 47.184794623394396],
[-68.23430497910454, 47.35462921812177],
[-67.79035274928509, 47.066248887716995],
[-67.79141211614706, 45.702585354182816],
[-67.13734351262877, 45.137451890638886]]]
}
```

+ A polygon defines a "zone" on a map e.g

# Explain and demonstrate ways to create Geo-JSON test data

+ There are tools for this such as http://geojson.io which comes in really handy for test data. You can simply press around on the map creating different points or polygons depending on what you want.

# Explain the typical order of longitude and latitude used by Server Side API’s and Client Side API’s

+ Usually the order latitude and longitude e.g. Google Maps api uses it in the given order. But GeoJson uses it longitude and latitude.
