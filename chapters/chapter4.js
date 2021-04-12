/*ARRAYS

HIGHER ORDER FUNCTIONS
 Functions that take in a function are 
     object.functionName(performedFunction(passedObject) or function(passedObject){ function logic })


FOREACH

MAP
A way to copy arrays, adjust elements for new elements 
Returns itterative change to each element within an array by the function 
We can do checks in returns like this:       return objectName.(function) (logic statment) ?(this is a logical opperator)   object: 'desiredValue'; 


FIND

FILTER 
 Find, but returns multiple values 

SOME and EVERY
 Returns true or false depending on values 
 Every looks to all items in the array, some checks if any item in the array cause logic to be true 

ARROW FUNCTIONS 
        Functions are objects; we can create them like other objects   ex: const functionName = functio(passed stuff){logic};
    Arrow functions look different, added because callback functions are used constantly 

    There is a simpler way to write callback functions 

    object.callbackFunction(function(passedObject){logic; return object;}); 
        can be written as
    ARROW  EXAMPLES
    object.callbackFunction((passedObjects) => {logic; return object;});
        if only one object is being passed, can be written as 
    object.callbackFunction(passedObject => {logic; return object;});
        if you're logic is just a return statement,
    object.callBackFunction(passedObject => logic objectBeingReturned);

    FULL EXAMPLE

        const videos = ['video1', 'video2', 'video3'];

        const newVideos = videos.map(function(video)){
            return video.length < 10 ? video:'nope';
        });


        would be written as 

        const newVideos = videos.map(video => video.length<10? video: 'nope');
    SIMPLE EXAMPLE

        const arrowVideos = videos.map(video => video.toUpperCase);
    
    The => is another way to write a function basically in a callback function specifically


SORTING 
        Sort itterates through an array and compares each value, returning a +.-. or 0
        Will continue itterating until all results are - or 0. 

        items.sort();
            Sort transforms all elements of array into a string and sorts alphabetically by default, comparing letters for +, -, and 0s
        ASCENDING NUMERIC SORT
        items.sort((a,b)=> a-b );
            This is a sort comparison function; if a returned value is negative, a is sorted before b
                This occurs when b is larger than a
            If its positive, b is sorted before a

            Basically the smaller value is sorted first; if 0, nothing changes 
            Will itterate comparing each until all results are even or negative
        DESCENDING NUMERIC SORT
            items.sort((a,b) => b-a);
            Reverses checks, but this still cares abotu +, -, and 0 results 
        REMEMBER: the original array is going to be altered if we don't map over or duplicate the array and do sorting on the copy 
            This happens because arrays are RELATIVE data types 


        OBJECT SORTING 

        games.sort((a,b) => a.rating - b.rating); 
            We can grab values from passed objects like normal

SIMPLE WAY TO COPY ARRAYS: SPREAD OPPERATOR 

        SPREAD 
        ... is the Spread Opperator 
        const newArray = [...oldArray];
        This functionally breaks the relative nature of the new and old array 

        Can combine arrays as well, or create new arrays 
        EX: 
            const name ='developedbysam';
            name.split(); and [...name]; returns array of each letter
            .concat can combine arrays without changing oringals, but can also use spread to do it
        const allArrays = [...array1, ...array2, ...arrayX, 'additionalArrayOption'];




 */