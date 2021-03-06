# albioncharts
A chart tool for the game [Albion Online](http://albiononline.com)

## Idea
Albion Online is a game said to have a
'true player driven' economy. Almost
everything item, every service is crafted 
or provided by other players.
There are many tools out there for calculating
crafting profit or looking at all sorts of data
provided by the [Albion Online Data Project](http://albion-online-data.com)

The only thing I was missing was a price history
for items. When I was crafting, I wanted to know
what price the item had the last 30 days or so, so
I could sell it on the marketplace for an appropriate
price.

The AODP already collects and provides that data.
I just needed to make a frontend for it.

## Backend/API
To keep database size low (and hosting free), I use the
external APIs whenever possible. Some backend is required tho,
Which I develop in Express.js in typescript on [maxbethke/albionchartsapi](https://github.com/maxbethke/albionchartsapi).

The repo is set to private right now as it stores database credentials.

## Roadmap and Development Process
I track the things I want to implement on
[Trello](https://trello.com/b/5bNEsHen/albioncharts).
You are invited to view and review my thoughts and 
ideas.

## Bug reports and feature requests
Thank you for dedicating your time into this project.
Please use GitHubs [Issue Tracker](https://github.com/maxbethke/albioncharts/issues)
to get in touch.

## Supporting this project
The best way to support this project is to use the
Albion Online Data Client and share it with your friends,
as it lives from the market data they provide.

## Special Thanks to
* The creators of the AODP for creating and running that project.
* [Broderickhyman](https://github.com/broderickhyman) for providing and maintaining [a list of all items](https://github.com/broderickhyman/ao-bin-dumps) in albion online.
* [MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas) for hosting the database for this project for free.
* Sandbox Interactive for tolerating the use of their (internal) API.
* Engelbert Tristram (Ethan02) for giving his best on [documenting above mentioned API](https://www.tools4albion.com/api_info.php) out of trail and error and sharing his insights.
