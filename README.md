
Frontend-Project (Top Crypto Currencies)

APIs Used: Coinbase API (https://api.coinbase.com/v2/prices/:currency_pair/spot)
Library Used: Chart.js
Technology: JQuery, AJAX, Git, GitHub
Stack: N/A

The page I made is intended to be a overview of the top crypto currencies in the world as of March 2023. The research I refrenced was an article from Forbes, and utilizing a Coinbase Open API to fetch my data. I first focused on meeting the requirements of the project, in order to get a MVP(Minimum Viable Product) up and running. I started off with the framework, layout and functionality of the page itself. This is where I ran into the first issue of utlizing AJAX, and the  $.get() requests. It was to find the data I wanted to pull from, but it took hours of trouble shooting and navigating even with additonal help.  My luck with my first API was not the best, and I had to switch to coinbase at the end of the first day, but I was able to come back strong on day 2. After pulling crypto name data from one $.get request, I was then able to use that to filter through an additonal $.get request for the spot prices I wanted to be displyed. From there, I was able to sort the spot price data, and append it to my document creating the structure and layout I wanted. 

My second portion of strucutre and frame work was utlizing an event listener to choose between the different crypto currencies I had done research on from Forbes. Coinbase only had 8 out of the 10 Cryptocurrency data, so those options are what I went with. My intention was once a user clicks on the option of which Crypto Currency they wanted to learn about, a status of the current currency would appear above the selection drop down window. At the same time, in my code I incorporated another event listener to hide the other currencies not selected from the drop down menu. That way, one currency was shown with its Ticker ID, Spot Price, Market Value, and a brief summary of the currency from Forbes was given. Below this information, a graph, utlizing the Charts.js library would appear, plotting data back 30 days from the current day of the webpage. Unfortunately, I was having issues with the the way the data was being sorted from the $.get request. 

The first issue was the massive amount of data being The data was displaying backwards within the array. I was getting data displayed for every 10 mintues in each day. That helps for accuracy, but for the broad historical overview I wanted, I couldnt figure out, even with help how to filter through this data. Reflecting, more than likely I could take the date range within a function I create, iterate through that data within the object, find the average, and return it to another fucntion calling it. The second issue I had was I could not figure out how to reverse that data in order to make the graph move chronologically from a month prior, to the current present day. I was able to make the labels for the graph with a function, but the labels displayed backwards as well due to the historical price data I was pulling from the get request. 

Afterwards, I moved onto styling utlizing CSS to align images, text and titles to the center of the page. CSS is not my strong suit, but is fairly straight forward compared to utlizing the syntax of JQuery with the brief overview we had of it. I changed to font of the title, along with the color, adjusted image size, along with my graph positioning and size at the bottom of the page. With CSS, I wanted to keep this simple due to my inexperience, but also reduce being sidetracked, focusing on functionality of the application. 

Overall, I learned a ton on this project and enjoyed making this application work when it came together. Reflecting, the most amount of time wasted was in getting my API to work due to data coming back from my first attempted API, Wallstreet Bets, in a JSONP format. The second largest hurdle was trying to congfigure my graph, never using the chart.js library before, and pulling that data from the 3rd $.get request. There is some more polishing to do. There is a bug present.Not all crypto currencies reappear when the view all option is selected within the drop down window, but that can be fxed. I have a working product, minimum requirements were met, but its a learning process. Moving forward, in the future, I will do more research on a library I want to utilize before hand so I dont waste time learning how to configure it on the fly with limited time. The second thing I will do is reach out for help quicker if I spend too much time on my own struggling to solve an issue, especailly with the $.get requests. If I knew what to look for, I would have realized I couldnt use the JSONP format for the data retrival, and could have moved on faster to the API, Coinbase, I used for the project. I am looking forward to our backend project in the coming weeks.

