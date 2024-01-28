class Customer {
    account = null;
    constructor(id,address,phone,email){
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    setAccount(account){
        this.account = account;
    }
}

class Account{
    shoppingCart = null;
    orders = [];
    payments = [];
    constructor(id,billing_address,is_closed,open,closed){
        this.id = id;
        this.billing_address =billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    setShoppingCart(shoppingCart){
        this.shoppingCart = shoppingCart;
    }
    addPayment(payment){
        this.payments.push(payment)
    }
    addOrder(order){
        this.orders.push(order);
    }
}

class Payment{
    constructor(id,paid,total,details){
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
}

class Order {
    payment = null;
    lineItems = [];
    total = 0;
    shipped = "";
    constructor(number, ordered, status, ship_to) {
      this.number = number;
      this.ordered = ordered;
      this.status = status;
      this.ship_to = ship_to;
    }
    setPayment(payment) {
      this.payment = payment;
    }
    addLineItem(lineItem) {
      this.lineItems.push(lineItem);
    }
    setTotal() {
      let total = 0;
      for (let i = 0; i < this.lineItems.length; i++) {
        total += this.lineItems[i].quantity * this.lineItems[i].price;
      }
      this.total = total;
    }
    setShippedDate(date) {
      this.shipped = date;
    }
  }

//Enum
class OrderStatus{
    static NEW = new OrderStatus("new");
    static HOLD = new OrderStatus("hold");
    static SHIPPING = new OrderStatus("shipping");
    static DELIVERED = new OrderStatus("delivered");
    static CLOSED = new OrderStatus("closed");
    
}

class WebUser {
    customer = null ;
    shoppingCart = null;
    constructor(login_id,password,state){
        this.login_id = login_id;
        this.password = password;
        this.state = state;

    }
    setCustomer(customer){
        this.customer = customer;
    }
    setShoppingCart(shoppingCart){
        this.shoppingCart = shoppingCart;
    }
}

//Enum
class UserState{
    static NEW = new UserState("new");
    static ACTIVE = new UserState("active");
    static BLOCKED = new UserState("blocked");
    static BANNED = new UserState("banned");
    constructor(name){
        this.name = name;  
    }
}

class ShoppingCart{
    lineItems = []; 
    constructor(created){
        this.created = created;
    }
    addLineItem(lineItem){
        this.lineItems.push(lineItem);
    }

}

class LineItem{
    product = null;
    constructor(quantity,price){
        this.quantity = quantity;
        this.price = price;
    }
    setProduct(product){
       this.product = product; 
    }
}

class Product {
    constructor(id,name,supplier){
        this.id = id ;
        this.name = name;
        this.supplier = supplier;
    }
}

const main = ()=>{
    //create User
    const user1 = new WebUser("user1","123456",UserState.NEW)
    const user2 = new WebUser("user2","789654",UserState.ACTIVE)
    console.log(user1);
    //create Product
    let pen = new Product("01","pen","Lencer");
    let pencil = new Product("02","pencil","Bank");
    let rubber = new Product("03","Rubber","Four");
    let backpack = new Product("04","Backpack","Plashon");
    let blackPen = new Product("05","black-pen","Lencer");

    //create LineItem 
    let lineItem1 = new LineItem(5,15);
    lineItem1.setProduct(pen);
    let lineItem2 = new LineItem(1,300);
    lineItem2.setProduct(backpack);

    //create Order
    const order1 = new Order("01", "08/01/2024","London",OrderStatus.SHIPPING);
    const order2 = new Order("02", "25/10/2024","Thai",OrderStatus.DELIVERED);
    const order3 = new Order("03", "01/05/2024","HongKong",OrderStatus.CLOSED);

    //add lineItem to order
    order1.addLineItem(lineItem1);
    order1.addLineItem(lineItem2);
    
    order1.setTotal();
    order1.setShippedDate("09/01/2024");

    const payment1 = new Payment("p01","08/01/2024",order1.total,"London")


    console.log(order1);



    //add to User

}
//main();

const cart  = ()=>{
    let pen = new Product("01","pen","Lencer");
    let pencil = new Product("02","pencil","Bank");
    let rubber = new Product("03","Rubber","Four");
    let backpack = new Product("04","Backpack","Plashon");
    let blackPen = new Product("05","black-pen","Lencer");

    let lineItem1 = new LineItem(5,15);
    lineItem1.setProduct(pen);
    let lineItem2 = new LineItem(1,300);
    lineItem2.setProduct(backpack);
    let lineItem3 = new LineItem(40,2);
    lineItem2.setProduct(rubber);
    let lineItem4 = new LineItem(2,15);
    lineItem2.setProduct(pencil);



    let cart1 = new ShoppingCart("28/01/2567");
    cart1.addLineItem(lineItem1);
    cart1.addLineItem(lineItem2);

    let cart2 = new ShoppingCart("28/01/2567");
    cart2.addLineItem(lineItem3);
    cart2.addLineItem(lineItem4);
    
    console.log(cart1);
    console.log(cart2);

}
cart();