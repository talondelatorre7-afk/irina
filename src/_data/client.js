module.exports = {
    name: "Irina Stoyan Real Estate",
    email: "realtorstoyan@gmail.com",
    phoneForTel: "253-224-4350",
    phoneFormatted: "(253) 224-4350",
    address: {
        lineOne: "2930 S Meridian Suite 340",
        city: "Puyallup",
        state: "WA",
        zip: "98373",
        country: "US",
        mapLink: "https://maps.app.goo.gl/487EyYQKkVSyXL2MA",
    },
    socials: {
        facebook: "https://www.facebook.com/realtorstoyan/",
        instagram: "https://www.instagram.com/realtorstoyan/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
