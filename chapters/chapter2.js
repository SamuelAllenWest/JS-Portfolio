/* The Dom 

Document Object Model
    Way to access HTML and CSS in JS 
    Document within window contains MODULES and NODES 
        Inside Document we have <head> and <body>, which have <h1>, <button>, etc, objects 
    NODE: HTML element object within JS DOM framework 
    Node Types
        ELEMENTS
   Object Oriented Representation of what we're doing in HTML 

DOCUMENT
    Huge object within window that contains lots of objects 

    GET ELEMENTS
        Returns a HTML Collection, can only hold node ELEMENTS, this is not an array but can be interacted with in some similar ways 
            Can do things like getElementsName[0] which returns the first node element in the collection 
        document. ->
        TAGS: getElementsByTagName(``) returns array-looking like container (NOT ARRAY) of elements of a specific tag (<h1>, <body>, etc)
        CLASSES: getElementsByClassName('') returns array-like list container of elements of a specific class 
        ID: getElementByID('') returns FIRST id it finds
            NOTE getElements vs getElement 

    QUERY SELECTOR (Slower than getElements, but doesn't really matter on small scales)
        Returns a node list, can hold node Texts, Comments, etc 
       TAG:     document.querySelector('') returns first instance of a tag it finds
       ALL:     document.querySelectorAll('') returns query selector list  (NODE LIST) of tags 
       CLASSES: document.querySelector('.className') returns first class instance 
       ID:      document.querySelector('#idName') returns first id instance
       Multiple Example:
        document.querySelector('tag.class') to select first of a tag with a specific class 
    
    NODE LIST
        Node Lists can hold any time of node; most of the time, it'll be text, comment, or element nodes. 
        .childNodes returns all nodes within a selected Node List
            Ex: Will return comments within a list 
        .children ruturns just the immediate children of a node element, creates an HTML Collection of the children (neat!)
        Can itterate with .forEach(function(object your are itterating  )), an array function
        STATIC; doesn't update as we add new elements
        Using .children can be used as a live updating node list as we add/remove elements 
        const collectionName 
    getElemetns returns HTML Collection
    querySelector returns Node List
        HTMLC can only hold node elements
        QS can hold any form of node; node comment, node ellement, node text, etc

    CREATING NEW ELEMENTS 
    const variableName= document.createElement('tag');
    variableName.classList.add('nameOfClass') adds a class
    variableName.innerText= 'textName and stuff' adds inner text to an element

    APPENDING NEW ELEMENTS
       By ID
       create a cosnt with of the ID (document.getElementById)
       then 
       .appenChild('variableName');



EVENTS 
    Anytime something interacts with the website, we can call an event
        Examples: Scrolling, clicking, key press 
        First peramater of an event is reserved for what is occuring (often e or event)
        e.target returns the target of whatever event just occured (what is calling the event)

    EVENT LISTENER  =>      variableName.addEventListneer('listenerType', function(){} or premadeFunction)      
        If we have () on a premade, it'll automatically invoke the function; with no (), just a reference
            WIll only run when user performs the action to trigger the listener
        Listens for a specific input, such as click 

    EVENT BUBBLING 
        What happens when you have multiple elements that have events
        You want an event to be on a specific an elements (node) as possible
        Otherwise, we can stop it from happening by adding an event effect event.stopPropigation;


SESSION AND LOCAL STORAGE

    LOCAL
        localStorage.setItem('key', 'value');
        We can ONLY save strings in local
        Local stays when browser is closed
        can clear with localStorage.clear(); 
        We can create any number of keys; each key holds a single value (string)
        
        STORING ARRAYS
            We basically parse together a bunch of strings, then translate them back 
            It will automatically make arrays into strings of their contents 
            JSON.strigify(array) turns array into its code string form 
            to turn a string back into an array, we can use JSON.parse(string) to turn it back into an array
        GETTING STUFF 
            .getItem('key');

    SESSION
        sessionStorage.setItem('sessionKey','sessoin value');
        Session is cleared on browser close 
    JSON 
        Syntax for serializing stuff 
        

        */ 

    
    // a tag stands for anchor in html, makes sense for links and what not 


document.title = `changedName`;

// CSS in JS uses camalCase in place of -s 

// Submit Button on the document delcared as button
const button = document.querySelector('#submit');

// todoList is declared as the full object with the id todoList 
const todoList = document.querySelector('#todoList');
// items is declared as the children of that list
const items = todoList.children;

const todoNum = document.querySelector('.todoNum i');

const mainTitle = document.querySelector('.mainTitle');

const nameInput = document.querySelector('.name-text');

todoNum.innerText = items.length;

button.addEventListener("click", function(event){
   // WE can stop auto refreshing whenever a form is submitted 
    event.preventDefault();
    // First we create a variable of the tag we're looking to add
    const newItem = document.createElement('li');

    // Next we assign it a class via its class list, which returns all classes of the variable 
    newItem.classList.add('item');

    // We adjust it with foramtting such as inner text 
    newItem.innerText = nameInput.value;
    
    // Now that we've assigned hte value, we can reset the form's value to nothing
    nameInput.value='';

    // Delete item listener
    newItem.addEventListener('click',deleteItem);
    // Append to whatever object we want to be the parent 
    todoList.appendChild(newItem);

    todoNum.innerText = items.length;

    //We can add css classes to objects with event listeners! 
    //form.value returns value within form 
    
    //113 is the keycode for q
    // if(event.keyCode === 113){
    //     mainTitle.classList.toggle('color');
    // }

});

// For ofs are the for each instance (itteration) of an array, do something
for (itteration of items){
    itteration.addEventListener('click', deleteItem);   
}
// This isn't adding event listeners to new objects; its already run, it isn't constantly refreshing 
    //to solve, add the listener in the creator
function deleteItem(e){
    e.target.remove();
    todoNum.innerText = items.length;

    //Stops any parent events from triggering their event listners when child event listener fires 
    e.stopPropagation();

}

const storageListArray = ['item1', 'item2', 'item3'];

localStorage.setItem('todos', storageListArray);