# Sample-Button-Click-API

# How to test

-go to project directory

-command line type 

```
npm start
```
After the code start running and you see a QR code or options to pick either open the app in a web app or andoird 

-press W to choose web app

-Open your browser console and click buttons to test

# What to do if you ever entounter the notorious CORS error?

-When you make a API request from outside servers or even from your local express server, There is a chance that the back-end server API did not properly set up the CORS setting and you can not access the content. The errors usually will be shown on the browser's console. The following might be observed.

![eorr](https://user-images.githubusercontent.com/58338071/179830835-2f287ed5-2fc8-47c2-bbb5-24d955fd4097.JPG)

# What should we do now?

-If you are using react or react native, you can dodge this problem by adding the perfix of the website at package.json as a proxy.

![proxy1](https://user-images.githubusercontent.com/58338071/179831227-0459eb3f-3756-4429-98ab-bef654f8bd81.JPG)

-For exmaple, if you hosted a express server using node and you want to access this sample url
http://localhost:8080/blahblah
-All you need to do it's add the things below to bypass the CORS error

```
{
...
"proxy":"http://localhost:8080"
...
}
```

