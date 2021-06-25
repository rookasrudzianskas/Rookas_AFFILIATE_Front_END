module.exports = {
    images:{
        domains:["links.papareact.com","fakestoreapi.com","dl.airtable.com", "openthread.google.cn", "kfinancial.com"]
    },
    // extreemely important,we are using variable to make the en.local variable pass to next js
    env:{
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
};