
const ServiceModule = require('../pageobjects/services');
const { expect } = require('chai');

describe('Navigation through Services module', () => {
   
    it('Open II home page and navigate to Services module', async () => {
        await ServiceModule.open();

    });

    it('Accept cookies', async() => {
        await ServiceModule.accept.click();  
    });

    it('click service tab', async() => {
        await ServiceModule.serviceModule();
        
    });

    it('Navigate to Trading Account page and assert you landed to the desired page', async() => {
       
        await ServiceModule.tradingAccountBtn.click();
        const url = await browser.getUrl();
         console.log(url);
         expect(url).to.equal('https://www.ii.co.uk/ii-accounts/trading-account'); 
    
        });

    it('Assert "Benefits of our trading account" is displayed', async() => {
      
         const benefitText = await ServiceModule.benefitLink.getText();

         expect(benefitText).to.equal('Benefits of our trading account'); 

    });



});


