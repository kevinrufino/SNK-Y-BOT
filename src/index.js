const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: true,
        args: [ '--disable-web-security', '--disable-features=IsolateOrigins,site-per-process']
    });

    const page = await browser.newPage();
    // deadstock atc
    await page.goto('https://deadstock.ca/cart/add?id=32986540933205');
    let checkOut = 'button.btn.cart__checkout.giftbox-checkout.giftbox-checkout-cloned';

    // bodega atc
    let bodegaCheckOut = 'cart-form-checkout.button.primary';

    // darkside initiative atc
    let dsiCheckOut = '#update-cart.full-width';

    //burnrubber atc
    let burnrubberCheckOut = '.btn';

    await page.waitForSelector(checkOut);
    await page.click(checkOut);
    await page.waitForNavigation();

    console.log("Checking out");

    //checkout process
    const email = '#checkout_email.field__input'; // name="checkout[email]"
    const emailButton = '#checkout_buyer_accepts_marketing.input-checkbox';//'name="checkout[buyer_accepts_marketing]"';
    const firstName = '#checkout_shipping_address_first_name.field__input';//'input[name=checkout[shipping_address][first_name]]';
    const lastName = '#checkout_shipping_address_last_name.field__input';//'name="checkout[shipping_address][last_name]"';
    const address1 = '#checkout_shipping_address_address1.field__input';//'name="checkout[shipping_address][address1]"';
    const address2 = '#checkout_shipping_address_address2.field__input';//'name="checkout[shipping_address][address2]"';
    const city = '#checkout_shipping_address_city.field__input';//'name="checkout[shipping_address][city]"';
    const country = '#checkout_shipping_address_country.field__input.field__input--select';//'name="checkout[shipping_address][country]"';
    const province = '#checkout_shipping_address_province.field__input.field__input--select';//'name="checkout[shipping_address][province]"';
    const zip = '#checkout_shipping_address_zip.field__input';//'name="checkout[shipping_address][zip]"';
    const phone = '#checkout_shipping_address_phone.field__input.field__input--numeric';

    await page.waitForSelector(email);
    await page.$eval(email, el => el.value = 'fake@gmail.com');

    await page.waitForSelector(emailButton);
    await page.click(emailButton);

    await page.waitForSelector(firstName);
    await page.$eval(firstName, el => el.value = 'Kev');

    await page.waitForSelector(lastName);
    await page.$eval(lastName, el => el.value = 'Kev');

    await page.waitForSelector(address1);
    await page.$eval(address1, el => el.value = '2125 Francis Ave SE');

    await page.waitForSelector(address2);
    await page.$eval(address2, el => el.value = 'Kev');

    await page.waitForSelector(city);
    await page.$eval(city, el => el.value = 'Grand Rapids');

    //country selector

    //province selector

    await page.waitForSelector(zip);
    await page.$eval(zip, el => el.value = '49507');

    await page.waitForSelector(phone);
    await page.$eval(phone, el => el.value = '1234567890');

    console.log("Going to shipping page");
    

    const continueButton = '#continue_button.step__footer__continue-btn.btn';
    await page.waitForSelector(continueButton);
    await page.click(continueButton);
    //await page.waitForNavigation(); // is this necesary?

    console.log("Going to payment page");

    // shipping method page
    await page.waitForSelector(continueButton);
    await page.click(continueButton);
    await page.waitForNavigation(); // is this necesary?

    //payment page

    const cardNum = '#number';
    const cardName = '#name';
    const expDate = '#expiry';
    const secCode = '#verification_value';

    // switch to iframes
    const numHandle = await page.$('.card-fields-iframe');
    const frame1 = await numHandle.contentFrame();

    await frame1.type(cardNum, '12345689459612356');

    const nameHandle = await page.$('[title="Field container for: Name on card"]');
    const frame2 = await nameHandle.contentFrame();

    await frame2.type(cardName, "Bob Ross");

    const expHandle = await page.$('[title="Field container for: Expiration date (MM / YY)"]');
    const frame3 = await expHandle.contentFrame();

    await frame3.type(expDate, '12/14');

    const secHandle = await page.$('[title="Field container for: Security code"]');
    const frame4 = await secHandle.contentFrame();

    await frame4.type(secCode, '123', { delay: 100 });

    console.log("checking out!");

    //pay now
    await page.click(continueButton);
    await page.waitForNavigation(); // is this necesary?
    await page.screenshot({path: 'we-did-it.png'});
    await browser.close();
})();


