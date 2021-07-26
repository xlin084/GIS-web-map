
let mymap = L.map('mapid').setView([-36.848, 174.76], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; \<a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mymap);

let yelp_json = {
		"type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.74364,
          -36.872086
        ]
      },
      "properties": {
        "name": "Mondays Wholefoods",
        "rating": 4.5,
        "url": "https://www.yelp.com/biz/mondays-wholefoods-kingsland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$$",
        "lat": -36.872086,
        "long": 174.74364,
        "category": "Cafes\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7362599,
          -36.8753699
        ]
      },
      "properties": {
        "name": "Crave Cafe",
        "rating": 4.5,
        "url": "https://www.yelp.com/biz/crave-cafe-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8753699,
        "long": 174.7362599,
        "category": "Cafes\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7434082,
          -36.872261
        ]
      },
      "properties": {
        "name": "The Fridge",
        "rating": 4,
        "url": "https://www.yelp.com/biz/the-fridge-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.872261,
        "long": 174.7434082,
        "category": "Coffee & Tea\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7435993,
          -36.8722416
        ]
      },
      "properties": {
        "name": "Jaan Turkish Cafe",
        "rating": 3.5,
        "url": "https://www.yelp.com/biz/jaan-turkish-cafe-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8722416,
        "long": 174.7435993,
        "category": "Turkish\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7433167,
          -36.8726196
        ]
      },
      "properties": {
        "name": "Neighbourhood Brewbar",
        "rating": 3.5,
        "url": "https://www.yelp.com/biz/neighbourhood-brewbar-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8726196,
        "long": 174.7433167,
        "category": "Hookah Bars\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.743784964085,
          -36.8724789940839
        ]
      },
      "properties": {
        "name": "Petra Shawarma",
        "rating": 3.5,
        "url": "https://www.yelp.com/biz/petra-shawarma-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8724789940839,
        "long": 174.743784964085,
        "category": "Middle Eastern\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7416077,
          -36.8747482
        ]
      },
      "properties": {
        "name": "Papa's Italian Eatery",
        "rating": 4,
        "url": "https://www.yelp.com/biz/papas-italian-eatery-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8747482,
        "long": 174.7416077,
        "category": "Italian\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7420031,
          -36.86657
        ]
      },
      "properties": {
        "name": "Grey Lynn Festival",
        "rating": 5,
        "url": "https://www.yelp.com/biz/grey-lynn-festival-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.86657,
        "long": 174.7420031,
        "category": "Festivals\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7444232,
          -36.8722633
        ]
      },
      "properties": {
        "name": "Nectar Bar",
        "rating": 4,
        "url": "https://www.yelp.com/biz/nectar-bar-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8722633,
        "long": 174.7444232,
        "category": "Lounges\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7432796,
          -36.8726115
        ]
      },
      "properties": {
        "name": "Barcelona Bar Tapas & Wines",
        "rating": 5,
        "url": "https://www.yelp.com/biz/barcelona-bar-tapas-and-wines-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8726115,
        "long": 174.7432796,
        "category": "Tapas/Small Plates\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7438812,
          -36.8721428
        ]
      },
      "properties": {
        "name": "Mekong Neua Thai Restaurant",
        "rating": 3.5,
        "url": "https://www.yelp.com/biz/mekong-neua-thai-restaurant-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$$",
        "lat": -36.8721428,
        "long": 174.7438812,
        "category": "Thai\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7406769,
          -36.8776283
        ]
      },
      "properties": {
        "name": "Okra Espresso Lounge",
        "rating": 3.5,
        "url": "https://www.yelp.com/biz/okra-espresso-lounge-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8776283,
        "long": 174.7406769,
        "category": "Coffee & Tea\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7367859,
          -36.8736305
        ]
      },
      "properties": {
        "name": "Flight 605",
        "rating": 4,
        "url": "https://www.yelp.com/biz/flight-605-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8736305,
        "long": 174.7367859,
        "category": "Wine Bars\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7438965,
          -36.8724251
        ]
      },
      "properties": {
        "name": "The Kingslander",
        "rating": 3,
        "url": "https://www.yelp.com/biz/the-kingslander-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8724251,
        "long": 174.7438965,
        "category": "Bars\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.74379,
          -36.8724599
        ]
      },
      "properties": {
        "name": "Venosa",
        "rating": 5,
        "url": "https://www.yelp.com/biz/venosa-kingsland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8724599,
        "long": 174.74379,
        "category": "Italian\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7368143,
          -36.8738715
        ]
      },
      "properties": {
        "name": "Tiffin Indian Cuisine",
        "rating": 4.5,
        "url": "https://www.yelp.com/biz/tiffin-indian-cuisine-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8738715,
        "long": 174.7368143,
        "category": "Indian\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.74368,
          -36.87218
        ]
      },
      "properties": {
        "name": "Farang",
        "rating": 4,
        "url": "https://www.yelp.com/biz/farang-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.87218,
        "long": 174.74368,
        "category": "Thai\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7437957,
          -36.8724527
        ]
      },
      "properties": {
        "name": "Toro Bar",
        "rating": 4.5,
        "url": "https://www.yelp.com/biz/toro-bar-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8724527,
        "long": 174.7437957,
        "category": "Bars\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7436981,
          -36.8721962
        ]
      },
      "properties": {
        "name": "Roasted Addiqtion",
        "rating": 2.5,
        "url": "https://www.yelp.com/biz/roasted-addiqtion-auckland-2?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8721962,
        "long": 174.7436981,
        "category": "Coffee & Tea\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.736096406067,
          -36.873720241951
        ]
      },
      "properties": {
        "name": "Peel To Pip",
        "rating": 4,
        "url": "https://www.yelp.com/biz/peel-to-pip-morningside?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.873720241951,
        "long": 174.736096406067,
        "category": "Cafes\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7356346,
          -36.8761331
        ]
      },
      "properties": {
        "name": "The Mustard Kitchen",
        "rating": 4,
        "url": "https://www.yelp.com/biz/the-mustard-kitchen-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$",
        "lat": -36.8761331,
        "long": 174.7356346,
        "category": "Cafes\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7437897,
          -36.8721504
        ]
      },
      "properties": {
        "name": "Little India Bistro & Tandoor",
        "rating": 3.5,
        "url": "https://www.yelp.com/biz/little-india-bistro-and-tandoor-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8721504,
        "long": 174.7437897,
        "category": "Indian\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.592,
          -36.7544899
        ]
      },
      "properties": {
        "name": "Kauri Gum Country Store & Cafe",
        "rating": 3,
        "url": "https://www.yelp.com/biz/kauri-gum-country-store-and-cafe-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.7544899,
        "long": 174.592,
        "category": "Coffee & Tea\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.736742,
          -36.872504
        ]
      },
      "properties": {
        "name": "Sake Bar Icco",
        "rating": 5,
        "url": "https://www.yelp.com/biz/sake-bar-icco-morningside?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.872504,
        "long": 174.736742,
        "category": "Sushi Bars\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.74158,
          -36.87486
        ]
      },
      "properties": {
        "name": "Mangal Indian Restaurant",
        "rating": 5,
        "url": "https://www.yelp.com/biz/mangal-indian-restaurant-kingsland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.87486,
        "long": 174.74158,
        "category": "Indian\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7437368,
          -36.8722515
        ]
      },
      "properties": {
        "name": "Kiwiana Fish & Chips",
        "rating": 2.5,
        "url": "https://www.yelp.com/biz/kiwiana-fish-and-chips-auckland-3?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8722515,
        "long": 174.7437368,
        "category": "Fish & Chips\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7436998,
          -36.8721629
        ]
      },
      "properties": {
        "name": "La Bottega Bakery Cafe",
        "rating": 4,
        "url": "https://www.yelp.com/biz/la-bottega-bakery-cafe-kingsland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$$",
        "lat": -36.8721629,
        "long": 174.7436998,
        "category": "Bakeries\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7415771,
          -36.8748589
        ]
      },
      "properties": {
        "name": "Rugby Buildings",
        "rating": 4,
        "url": "https://www.yelp.com/biz/rugby-buildings-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8748589,
        "long": 174.7415771,
        "category": "Breakfast & Brunch\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7425204,
          -36.8725047
        ]
      },
      "properties": {
        "name": "Grey Lynn Tavern",
        "rating": 3,
        "url": "https://www.yelp.com/biz/grey-lynn-tavern-auckland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "$",
        "lat": -36.8725047,
        "long": 174.7425204,
        "category": "Sports Bars\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7442322,
          -36.8723183
        ]
      },
      "properties": {
        "name": "Arthur Avenue",
        "rating": 1,
        "url": "https://www.yelp.com/biz/arthur-avenue-kingsland?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8723183,
        "long": 174.7442322,
        "category": "Tapas/Small Plates\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.7433408,
          -36.8722959
        ]
      },
      "properties": {
        "name": "Al's Deli",
        "rating": 1,
        "url": "https://www.yelp.com/biz/als-deli-auckland-4?adjust_creative=wwF0xmAmk6ZmxYuaGEHDag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wwF0xmAmk6ZmxYuaGEHDag",
        "price": "null",
        "lat": -36.8722959,
        "long": 174.7433408,
        "category": "Cafes\n"
      }
    }
  ]
} 

	L.geoJson(yelp_json).addTo(mymap); 
	//}

	var popup = L.popup();

  L.geoJSON(yelp_json, {  
  }).bindPopup(function (layer) {  // the text now is 'name + price + rating' which now can be more detailed
  return layer.feature.properties.name + " Price:" + layer.feature.properties.price + " Rating:" + layer.feature.properties.rating;  
}).addTo(mymap);  

	// L.geoJSON(yelp_json, {  
  //   	}).bindPopup(function (layer) {  
  //   	return layer.feature.properties.price;  
  //   }).addTo(mymap);  

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);