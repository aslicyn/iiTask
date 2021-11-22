

const Page = require('./page');


class Services extends Page {

    // async setAcceptCookies() {

    // const acceptcookie = await $('button.chakra-button.css-1ux3cye');
    
    //     if(acceptcookie.isDisplayed()){
    //       acceptcookie.click();

    //     }
    // }

    get accept(){
        return $('button.chakra-button.css-1ux3cye');
    }
   
    get service() {
        return $('//span[@title="Services"]');
    }
    async serviceModule () {
        await this.service.click();
        
    }

    get tradingAccountBtn() {
        return $('//a[text()="Trading Account"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get benefitLink(){
        return $('//a[@href="#benefits"]');
    }

  
}

module.exports = new Services();
