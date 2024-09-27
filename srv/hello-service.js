const cds = require('@sap/cds');

/* class HelloService extends cds.ApplicationService {
    sayHello(name) { return "@Hello " + name; }
} */
 class HelloService extends cds.ApplicationService {
    sayHello(name, name2) { 
        console.log(this.sayHello2(name, name2));
        return this.sayHello2(name, name2);         
    }

    sayHello2(name, name2) {
        return "Hello " + name + ' ' + name2;
    }

}


class HelloService2 extends cds.ApplicationService {
    sayHelloA(name, name2) { 
        console.log(this.sayHelloB(name, name2));
        return this.sayHelloB(name, name2);         
    }

    sayHelloB(name, name2) {
        return "Hello " + name + ' ' + name2;
    }

}


/* class HelloService extends cds.ApplicationService {
    sayHello2(name) { this.sayHello2; }
} */

module.exports = HelloService;
module.exports = HelloService2;