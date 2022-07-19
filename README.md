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
-Method 2 worked for me 

## Method 1
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

-Notice that the /blahblah is not added to the end of our proxy, just the front prefix is good enough for our calls. 
-In case you tried this step and the browser is still bugging you out with the problem, let's move to method 2!

## Method 2 
-Another reason CORS error might happen is that our browser actually prevented this due to security considerartions of how outside source API talk to the front-end clients.
-We can try add a google chrome extension to check if problem still exists!
https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
-Follow the installation instruction under this link below :
https://www.youtube.com/watch?v=8berLeTjKDM&t=94s
-Now, you can right click the bug icon and click "test CORS"
-Adjust the preference as needed and if you see the image below, you can start testing your API!

![get](https://user-images.githubusercontent.com/58338071/179833272-2cd48470-b634-4477-8eb0-456fd174e5fe.JPG)




### Reference
Guide for Method 1 :
https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
Links for CORS extension :
https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en



