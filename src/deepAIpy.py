# for comparing local pictures
import requests
r = requests.post(
    "https://api.deepai.org/api/image-similarity",
    files={
        'image1': open('./j1.jpg', 'rb'),
        'image2': open('./j2.jpg', 'rb'),
    },
    headers={'api-key': 'db75faa2-c245-49bb-81fd-8cc1a61517bf'}
)
print(r.json())

# Example posting a image URL:

# import requests
# r = requests.post(
#     "https://api.deepai.org/api/image-similarity",
#     data={
#         'image1': 'YOUR_IMAGE_URL',
#         'image2': 'YOUR_IMAGE_URL',
#     },
#     headers={'api-key': 'db75faa2-c245-49bb-81fd-8cc1a61517bf'}
# )
# print(r.json())