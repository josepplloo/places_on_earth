# Places on Earth

A small app for marking our favourite places on a map.
Also this app bring to us an idea about [the Pusblisher/Subscribe Pattern](https://itnext.io/why-every-beginner-front-end-developer-should-know-publish-subscribe-pattern-72a12cd68d44).

## Technogies used

My experience with Google 🌏 API was so unpleasant... therefore, I use [TomTom](https://leafletjs.com/reference-1.4.0.html#marker)

You will find this project interesting if you are looking for a **JS** *Vanilla* project.


## Project Set Up

Create an account in [TomTom](https://developer.tomtom.com/user/me/apps), later create an `env.js` file in your project like the follow example:  


```javascript
//env.js

const env = {
  productName: '',
  version: '',
  APIKEY: ''
}
```
Fill the fields with the necessary info.

⚠️ Ensure your **KEY** it's for its for **Maps API & Search API products**