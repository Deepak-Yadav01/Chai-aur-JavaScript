# JAVASCRIPT AND CLASSES
  
  Yes, JavaScript does have classes! Introduced in ECMAScript 2015 (ES6), classes in JavaScript are syntactical sugar over the existing prototype-based inheritance. You can define a class using the `class` keyword, and it allows for a more familiar structure for those coming from class-based languages like Java or C#. Here's a simple example:

```javascript

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.

```

In this example, `Animal` is a class with a constructor and a method. You can create instances of the class using the `new` keyword.


# OOP?

Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around data, or objects, rather than functions and logic. Here are some key concepts of OOP:

1. **Classes and Objects**: 
   - **Class**: A blueprint for creating objects (a particular data structure), defining properties (attributes) and methods (functions).
   - **Object**: An instance of a class. It contains data and can perform operations defined by its class.

2. **Encapsulation**: This principle restricts direct access to some of an object's components and can prevent the accidental modification of data. It helps in bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class.

3. **Inheritance**: This allows a class (called a child or subclass) to inherit properties and methods from another class (called a parent or superclass). This promotes code reuse and establishes a hierarchical relationship between classes.

4. **Polymorphism**: This allows methods to do different things based on the object it is acting upon, even if they share the same name. It can be achieved through method overriding and method overloading.

5. **Abstraction**: This principle involves hiding the complex reality while exposing only the necessary parts. It helps in reducing programming complexity and effort.

OOP is widely used because it helps manage larger codebases, encourages code reuse, and makes it easier to maintain and extend applications. Popular OOP languages include Java, C++, Python, and JavaScript.

# What is Object?

In programming, an **object** is a self-contained unit that combines both data and behavior. Objects are instances of classes and can represent real-world entities or abstract concepts. Here are some key characteristics of objects:

1. **State**: This refers to the data contained within the object, often represented by properties (or attributes). For example, an object representing a car might have properties like `color`, `make`, and `model`.

2. **Behavior**: This refers to the methods (or functions) that define what actions the object can perform. For instance, a car object might have methods like `start()`, `stop()`, and `accelerate()`.

3. **Identity**: Each object has a unique identity, which distinguishes it from other objects, even if they have the same state.

### Example in JavaScript:

Here’s a simple example of an object in JavaScript:

```javascript
const car = {
    make: 'Toyota',
    model: 'Camry',
    color: 'blue',
    start: function() {
        console.log('The car has started.');
    },
    stop: function() {
        console.log('The car has stopped.');
    }
};

// Accessing properties
console.log(car.make); // Output: Toyota

// Calling methods
car.start(); // Output: The car has started.
```

In this example, `car` is an object with properties (`make`, `model`, `color`) and methods (`start`, `stop`). This encapsulates both the data about the car and the actions that can be performed on it.

## Why uses OOP?
Object-Oriented Programming (OOP) offers several advantages that make it a popular choice for software development. Here are some key reasons to use OOP:

1. **Modularity**: OOP encourages breaking down complex systems into smaller, manageable pieces (objects). Each object can be developed, tested, and maintained independently, making it easier to manage large codebases.

2. **Code Reusability**: With OOP, classes can be reused across different programs. Through inheritance, new classes can be created based on existing ones, reducing redundancy and promoting the reuse of code.

3. **Encapsulation**: By bundling data and methods within objects, OOP helps to protect an object's internal state. This means that the implementation details can be hidden, exposing only the necessary parts to the outside world, which enhances data integrity and security.

4. **Polymorphism**: OOP allows for methods to be used in different contexts. This flexibility enables the same interface to be used for different underlying forms (data types), making it easier to extend and modify applications.

5. **Abstraction**: OOP simplifies complex systems by allowing developers to focus on high-level operations without needing to understand the intricate details. It helps in managing complexity by providing a clear model of the system.

6. **Easier Maintenance and Upgrades**: Since OOP promotes a structured approach, it often results in code that is easier to maintain and extend. Changes can be made to specific objects without affecting the entire system.

7. **Real-world Modeling**: OOP closely aligns with how we perceive the world, making it intuitive to model real-world entities as objects with attributes and behaviors. This can make the design process more straightforward.

Overall, OOP can lead to more organized, flexible, and scalable code, which is particularly beneficial in larger projects or systems requiring ongoing maintenance and updates.

# parts of OOP
Object-Oriented Programming (OOP) consists of several key components that work together to facilitate the design and structure of software. Here are the main parts of OOP:

1. **Classes**: 
   - A class is a blueprint for creating objects. It defines properties (attributes) and methods (functions) that the objects created from the class will have. Classes provide a way to encapsulate data and behavior together.

2. **Objects**: 
   - An object is an instance of a class. It contains actual data and can perform the methods defined in the class. Objects are created based on the class structure and can represent real-world entities or abstract concepts.

3. **Encapsulation**: 
   - This principle involves bundling the data (attributes) and the methods (functions) that operate on the data into a single unit (the class). It restricts direct access to some of an object's components, promoting data hiding and protecting the object's integrity.

4. **Inheritance**: 
   - Inheritance allows one class (the child or subclass) to inherit properties and methods from another class (the parent or superclass). This promotes code reuse and establishes a hierarchical relationship between classes.

5. **Polymorphism**: 
   - Polymorphism enables objects to be treated as instances of their parent class. It allows methods to have the same name but behave differently based on the object they are acting upon. This can be achieved through method overriding (in subclasses) and method overloading (with the same name but different parameters).

6. **Abstraction**: 
   - Abstraction involves simplifying complex systems by providing a clear interface and hiding unnecessary details. It allows developers to work with high-level concepts without needing to understand all the underlying complexity.

### Summary
These parts of OOP work together to create a powerful framework for designing software that is modular, maintainable, and adaptable. By leveraging classes and objects, developers can build systems that mirror real-world entities, making them easier to understand and manage.

## Important to know
Constructor function
Prototypes
Classes
Instances (new, this)