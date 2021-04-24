const axios = require('axios');

link = "https://shoepalace.com/cart/39428313120974:1"

cookieJar = "_y=95db8f1c-3d0c-4d01-b636-b7c2da286eea; _shopify_y=95db8f1c-3d0c-4d01-b636-b7c2da286eea; _shopify_fs=2021-04-07T14%3A40%3A39Z; secure_customer_sig=; _orig_referrer=; _landing_page=%2F; _ga=GA1.2.330295646.1617806444; _shg_user_id=46480abd-4d15-4df0-b4ab-8f9e73c7cb66; shopify_recently_viewed=jordan-dd0587-600-air-jordan-5-retro-raging-bull-mens-lifestyle-shoe-red-black-limit-one-per-customer; cart_sig=8f1a06d08427a5890947d3f496a88c56; stc112272=env:1617811969%7C20210508161249%7C20210407164249%7C1%7C1024394:20220407161249|uid:1617806447803.228178208.7622633.112272.648591851.8:20220407161249|srchist:1024394%3A1617811969%3A20210508161249:20220407161249|tsa:1617811969920.1889363785.716693.8687215430631907.2:20210407164249; _s=9bec0224-aa29-4a72-af86-3523d25e6d64; _shopify_s=9bec0224-aa29-4a72-af86-3523d25e6d64"

axios.post(`https://shoepalace.com/cart/add.js`, {
    headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "identity",
        "Accept-Language": "en-us",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        origin: `https://shoepalace.coms.com`,
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "x-requested-with": "XMLHttpRequest"
    },
    jar: cookieJar,
    withCredentials: true,
    body: JSON.stringify({
        form_type: "utf8",
        utf8: '✓',
        id: 39428313120974,
        quantity: 1
    })
}).then(r => {
    console.log(r.data)
})

