//everything in api, is backend code
// the secret key is have to be kept secret
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// then we get request, we access the items

export default async (req, res) => {
    // this is going to be called then we his this endpoint  .../api-create-checkout-session
    // this will pull out this data from the request body
    const {items, email} = req.body;
    console.log(items);
    console.log(email);
    // now we need to transform this array to the data format, which stripe could make a product from
    // for every single item we make the return
    const transformedItems = items.map(item => ({
        // taking each item, and shaping it to make it to be accepted by stripe, to create the products
        description: item.description,
        // now it is the flat one, but if we add something like groups, we have to make something differetn
        quantity: 1,
        price_data: {
            currency: "USD",
            // they take currency in subunits in cents meaning
            unit_amount:  item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        },
    }));

    //creates the checkout page in here
    const session = await stripe.checkout.sessions.create({
      // checkout page initializes in here
        // defining the whole page
        payment_method_types: ["card"],
        // shipping rates in here
        shipping_rates: ['shr_1IwLJLGdDXxRlQhYTmFcIKcE'],
        shipping_address_collection: {
            // shipping location
            // to this countries we are going to ship too!
            allowed_countries: ['GB', 'US', 'CA'],
        },
        // all the items, we are going to have in that page
        line_items: transformedItems,
        // the mode is payment
        mode: 'payment',
        // success and cancel urls goes in here
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        // metadata could be anything, in this case, eamil and images
        metadata: {
            email,
            // we send in json, because it is much easier to send the complicated object in text, than in some kind of any other format
            // makes the array of strings
            images: JSON.stringify(items.map((item) => item.image)),
        },
    });

    // 200 is ok
    /// we create a checkoupage with a session id, then we get back the session id in json
    res.status(200).json({ id: session.id })
};


