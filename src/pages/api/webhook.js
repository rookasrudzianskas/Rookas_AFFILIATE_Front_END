import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// getting permissions json or we can do import
const serviceAccount = require('../../../permissions.json');

// if there is no app already initialized
// secure connection to the firebase from backend
const app = !admin.apps.length ? admin.initializeApp({
    // if there is no app, so we initialize the app
    // for certificates we use this one from permissions.json
    credential: admin.credential.cert(serviceAccount),
}) : admin.app();
// or we just use the app which is already configured

// establish the connection to stripe
// as the key, key from env variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// endpoint key goes in here
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// after everything is done, the order fulfill function fires to upload the order to the database
const fulfilOrder = async (session) => {
    console.log("Fulfilling order ");

    // here we push it into the firebase firestore to make access from the db
    // stripe session id of customer
    return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
        // divide by 100 because we pushed to the normal currecy understanding
        // we just add all these things to the firebase database
        amount: session.amount_total / 100,
        amount_shipped: session.total_details.amount_shipping / 100,
        // this will give the images back
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
        .then(() => {
            console.log(`SUCCESS: Order ${session.id} had been added to the DB in firebase`);
        });
};

export default async (req, res) => {
    if(req.method === 'POST') {
        // here we check if the method is post request
        // this is funky stuff
        // verifying, then the webhook is triggered on, after the webhook is pushed after the payment, verify that the event is genue event
        // consume request as the buffer shit, to generate the certificate to make the webhook fire on
        const requestBuffer = await buffer(req);

        const payload = requestBuffer.toString();
        // representing the signature
        const sig = req.headers["stripe-signature"];
        // this will change
        let event;
        // verify that the posted event came from the stripe
        try {
            //here we verify that the event came from stripe with these generated signatures and certificates, in all shitty products, just copy
            // this code and especially the comments
            // this line verifies that event came from stripe and not from somewhere else
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } catch (err) {
            // this is showing then the error occured
            console.log("Error ", err.message);
            return res.status(400).send(`Webhook error: ${err.message}`);
        }

        // handle the special checkout session completed event
        // then the checkout happens, the payment is done, the completed event fires on
        if(event.type === 'checkout.session.completed') {
            // this checks if it is  completd event
            // if yes, we just store the event data object in the session object in here
            const session = event.data.object;

            // Fullfill the order at this time
            // put it into the database, to show the user, that it is in the database, to send for company to ship it and so on
            // we want to store it in the firebase

            // here we pass the session data from the successful order in the stripe, then returns the success status, if note, so the error returns
            return fulfilOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook error ${err.message}`));
        }
    }
};

export const config = {
    api: {
        // we just want it as the stream
        bodyParser: false,
        // this means that is resolved by stripe, not by us
        externalResolver: true,
    }
}