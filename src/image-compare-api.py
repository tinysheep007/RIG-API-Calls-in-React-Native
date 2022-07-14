import requests
v1 = "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
v2 = "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
url_link = "https://image-compare.hcti.io/api?image_url={}&other_image_url={}".format(v1,v2)
r = requests.post(
    url_link
)
print(r.json())
