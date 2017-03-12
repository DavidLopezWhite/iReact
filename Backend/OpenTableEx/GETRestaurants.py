import urllib2
import json

def returnData(url, header):
    req=urllib2.Request(url,None,header)
    response=urllib2.urlopen(req)
    html=response.read()
    json_obj=json.loads(html)
    return json_obj

# Header
headerOT={'Content-Type':'application/json','Authorization':'bearer 27037c67-f394-4cfd-ab51-069ac71132fb'}

# GET Geolocation
address='San Francisco, CA'
address = address.replace(' ', '+')
geolocationURL='https://maps.googleapis.com/maps/api/geocode/json?address=%s'%(address)
getLatLong = returnData(geolocationURL,{})
setLat=getLatLong["results"][0]["geometry"]["location"]["lat"]
setLng=getLatLong["results"][0]["geometry"]["location"]["lng"]

# Availabilities
urlOTAvail='https://platform.otqa.com/availability?latitude='+str(setLat)+'&longitude='+str(setLng)+'&party_size=2&radius=5000&forward_minutes=180&backward_minutes=30&start_date_time=2017-03-17T18%3A00&include_unavailable=false' 

#get availabilities
getAvailabilities=returnData(urlOTAvail, headerOT)
listOfAvail=getAvailabilities['availabilities']
restaurantList=[]

for rest in listOfAvail:
    getRestURL=rest['href'] 
    getRestInfo=returnData(getRestURL, headerOT)
    print getRestInfo['items']
    if len(getRestInfo['items']) > 0:
        restaurantList.append(getRestInfo['items'][0])
