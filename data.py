# -*- coding: utf-8 -*-

#import libraries
import requests
import json
import csv

#enquiry from yelp and authentication by using API
endpoint = 'https://api.yelp.com/v3/businesses/search'
headers = {'Authorization':'Bearer ueTFqlkb7csf-VWdbXKbAcplUsO064Lh_HKMK7BM3u-cak8NZ2geUZ07FOkYoTdV4uh9n3tblZu5v-IVLuQNBBZA08dBQOftpUQWrHBpuYYU-DOnWAm3RzQLIxTBXnYx'}

#get certain area we want, I choose the KFC in Balmoral Rd, Mt Eden (but later I discover that KFC is not included in yelp)
params = {'latitude':'-36.886629', 'longitude':'174.747294' ,'limit':'30' ,'radius':'500'}  

#request to get a json file
payload = requests.get(endpoint,params=params,headers=headers).json()

with open('H:\\Favorites\\GIS 242\\Lab 4\\lab4yelp.json','w') as f:  
    json.dump(payload, f) 
 
#create an array(list in python), it cantains what's in the file
payload_good = [ ['name','rating','url','price','lat','long','category']]

#by using for loop, go through all informations in string format, then print and append to the payload_good list
for business in payload['businesses']:  
    lat = str(business['coordinates']['latitude'])  
    lon = str(business['coordinates']['longitude'])  
    name = str(business['name'])  
    url = str(business['url'])  
    price = business['price'] if 'price' in business else "null"  
    rating = str(business['rating'])  
    category = str(business['categories'][0]['title'])  
    l = [name,rating,url,price,lat,lon,category]  
    print(l)  
    payload_good.append(l)  

#modify .csv file and close
with open('yelp.csv','w') as csv_file:  
    writer = csv.writer(csv_file)  
    writer.writerows(payload_good)  
csv_file.close()  
