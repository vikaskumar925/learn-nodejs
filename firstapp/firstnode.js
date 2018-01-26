//problem : we need a simple way to look in the user's badges count
//Solution : Use Node.js to connect to tree house api to get profile information to print out

const profile = require('./profile.js')
 const users = process.argv.slice(2);
 users.forEach(profile.get);
