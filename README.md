# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   >If a child's name inside of the "Kids" box on the webpage is clicked on, the addEventListener on the module Kids.js will be executed. This addEventListener has been set up to listen for a mouses "click" (kids.js line 7), specifically when a target with a data attribute of data-type"kids" is clicked (kids.js line 9-10).
   
    The dataset (type="kids") and its attributes have been established for use within the HTML function Kids (kids.js line 18).This target assignment helps to focus the eventListener on only these kids names, therefore only populating the window.alert when the names are clicked on. When a kid is clicked on, a window.alert with a message pops up (kids.js line 12). Through targeting the dataset the message is able to grab the correct child's name and child's wish from the function Kids because the data attributes have been set up (kids.js line 22).


2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The function findCelebrityMatch() must be invoked inside of the for...of loop (pairings.js line 10) in order for Pairings() to have access to the array of pairs created by findCelebrityMatch(). This is because of local scope rules that apply to functions and their returns. Without the "return" of objects (pairings.js line 10) we would not be able to call on this function within another. So the return inside of findCelebrityMatch() and the invocation of it inside the for...of loop in pairings() are essential for the iteration over each correct pairing in the loop.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > The celebritylist.js module is displaying the name of the sport for each celebrity in the window.alert pop up. The window alert (celebritylist.js line 10) is able to access the name of each sport assigned to the individual celebrity through "${celebrityTarget.dataset.sport}". Lets break this code down. Here, celebrityTarget is the variable I have assigned to the event celebrityClick.target (celebritylist.js line 8). This event locates a specific html element. So, celebrityTarget is located (when clicked) and then .dataset allows access to the attribute .sport.

   The sport attribute is assigned to the html element (celebritylist.js line 22). This line is a part of the for...of loop that iterates each celebrity, and line 22 specifically grabs the sport property of each celebrity object so that it can be used within the HTML. 


4. Can you describe, in detail, the algorithm that is in the `main` module?

   > Inside of the Main.js module the necessary functions are being imported from their respective modules where they have been exported. Then a constant variable "mainContainer" has been assigned to the the html documents id of "container" via the query selector method. Following this, another constant variable "applicationHTML" is declared. This variable structures the HTML for the body of the application using data from other modules by invoking their functionality. Finally, the innerHTML of the mainContainer is replaced with the value of applicationHTML(main.js line 26). 