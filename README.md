# accedo-server

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Reminder

To allow the access from the outside, you have to set the ip as '0.0.0.0' from server/config/environment/index.js line No. 25 ip

## Demo url

http://accedotv-client.eastasia.cloudapp.azure.com:9000/v1/history GET <-- Fetch all the history data 


http://accedotv-client.eastasia.cloudapp.azure.com:9000/v1/history POST   <-- Insert History data into history db
