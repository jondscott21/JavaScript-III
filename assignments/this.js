/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" refers to it's parent object so when it's not bound to something else it defaults to reference the Window
* 2. Implicit binding refers to dot notation being use to invoke a function. So it implies that the item bound to the right of of the dot inherits context from what's to the left
* 3. New lets you create a new instance of an object that allows for variation without altering the original
* 4. explicit binding is adding "this" through methods like .call() or .apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function blah() {
    console.log(this);
}
blah();


// Principle 2

// code example for Implicit Binding
function parent(name) {
    this.name = name;
}

// Principle 3

// code example for New Binding
let mary = new parent("Mary");
console.log(mary.name);

// Principle 4

// code example for Explicit Binding
let randomObj = {
    thingOne: "thing 1", 
    thingTwo: "thing 2", 
    thingThree: "thing 3"
};
let otherArr = ['index1', 'index2', 'index3']
function otherThings(param1, param2, param3) {
    return `${this.thingOne} ${param1} ${param2} ${this.thingTwo} ${param3} ${this.thingThree}`
}
console.log(otherThings.apply(randomObj, otherArr));