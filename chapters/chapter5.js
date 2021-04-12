/* OBJECTS 

    objects are automatically generated whenever a webpage is loaded, before any code is run

    GLOBAL EXECUTION CONTEXT 
        CREATION PHASE
        This is where a few objects are automatically made 
        Creates a GLOBAL OBJECT and THIS  
        In a browser, the Global Object is the Window 

            HOISTING
                JS allocates memory for functions and vars on the Global Object, detects all objects on page
                Basically, all functions and vars are known before any code is run, can be invoked wherever in the code 
                    A reason not to use var; it is seen and allocated in memory, not assigned to anything; defaults to undefined. 
                    Use let and cosnt variable declarations instead, aren't preset in memory 
                If we assign a function to a variable as a means of creating it, won't be assigned in memory as its a const or let 

            SCOPE CHAIN
                Functions look for variables inside themselves first, then go laired out until they find the variable theyre looking for 
                The scope chain is determined 
        SINGLE TREADED
            Code is run line by line 
        SYNCHRONOS 
            Runs line by line through loops, doesn't run anything past until loops are finished 
        ASYNCHRONOS 
            Runs while loop continues to run 


        EXECUTION PHASE 
         Where code begins running  line by line
         
         CALLSTACK
            How JS keeps track of execution contexts, top to bottom 
            When you run a function a NEW execution context gets created on top of running until the new instances finish  

            EXECUTION CONTEXT
                Has its own keyword this, own Global Object 
                Will run everything in a new execution context before resuming original 
                This happens nested; functions calling functions calling functions nest stack up 
        
    THIS
        Gets created in Global Execution Function or when we call a function 
        A pointer that refers to an object
        If we have an object EX:
            const user = {name: 'developedbyed', sayHi(){console.log(this.name)}};
            user.sayHi();
        This will return this, which is pointing to the object that its a part of 
        In this instance, its pointing to the object with the name "developedbyed" and the sayHi function 

        This returns whatever object you are in, wherever the function is evoked 
            If its in an object, returns the object
            If your just in the window, returns the window 
        
        Basically its a tool to make coding easier; it allows us to create a function outside of objects and assign them functions to objects to perform the function instead of rewriting the function in the object

        NO NEW THIS IS CREATED WHEN YOU INVOKE AN ARROW FUNCTION
            THE PRIOR THIS IS MAINTAINED 
        
        FUNCTIONS are Special Objects 
            They have three special methods:       
            BIND    CALL    APPLY
    
    BIND
        Allows you to call a method on a function with the object as this 
        functionName.bind(bondObject);      bondObject is the refered ot this 
        Change the value of THIS to a specific object

    CALL
        functionName.call(calledObject, functionParameter, functionParameter);
            Binds this to called object AND passes in parameters 
    APPLY
        functionName.apply(appliedObject, ['functionParameter','functionParameter']); 
            Call but with an array 

OOP: Object Oriented Programming 
    CONSTRUCTOR FUNCTION
        A function that generates an object 

        function ObjectConstructor(property1, property2){
            this.property1= property1; 
            this.property2= property2;
            this.getProperty1 = () => console.log(this.property1); 
        }
            // We use upper cases styling to typically make constructor function 
        const object1 = new ObjectConstructor('first property', 'second property');

        NEW Keyword
            Creates empty object named whatever we named it 
            Sets keyword this to object created empty object 
    PROTOTYPE 
        Every object has the property prototype
        A reference to an object that contains common properties and attributes across all instances 
        We want to create one function per object group, not one per object to save memory 

        ObjectConstructor.prototype.functionName = function(){fucntion logic}; 

        This means we don't need to include the method in the constructor, but objects can call that method 
        Constructed Objects inherit prototype properties 

        INHERITANCE 

            function ObjectName (parameters ){
                InheritatedObjectConstructor.call(this, paramtersOfInhertitatedConstructor); 
                    Inherts the PARAMETERS of the intertited object 
                this.parameter = paramter; 
                    Set new parameters 
            }
            ObjectName.prototype = Object.create(InheritatedObjectConstructor.prototype); 
                //This assings all the prototype methods to the inherting object 
    CLASSES
            A great replacement for constructor functions 

            class ClassName {
                constructor(parameter, parameter, ...parameter ){
                    this.parameter= parameter;
                }

                methidName(){
                    methodLogic
                }
            }
                Now we don't need to add shit to the prototype; automatically adds it 
            const objectWithClass = new ClassName(paraameter, parameter, parameter);

            class InhertingClass extends InheritedClass{
                constructor (parameter, parameter, ...parameter){
                    super(passedParameter, passedParameter);

                }
            }
            SUPER keyword is going to run extended objects constructor
            EXTENDS basically inherits the methods and links the inherited class to the new class

METHODS VS FUNCTIONS 
    Methods have a reciever (called on an object) while functions don't when called 
    Making a method is methodName(){};  making a function is function functionName () => {}; 




*/