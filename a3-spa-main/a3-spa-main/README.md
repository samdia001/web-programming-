# A3 SPA

### Author
* **Name:** Samah Diab
* **Student ID:** sd222ti
* **Course:** 1DV528
* **Assignment:** A3 SPA
* **Date:** 2024-08-08
* **Version:** 1.0.0

<hr>

## Introduction
<p> The assignment was to build a single web page applcation using javascript.
<p> the application functions as desktop and it's simmilair to the windows desktop.

## Features

* The application has a list bar at the buttom of the page.
* The list bar has 3 applications.
* The application has a taskbar in the buttom bar.
* The taskbar has a list of open applications. fix this 
* by clicking on the application in the menu bar it will open and show on the desktop, and it will also show in the taskbar.
* by clicking on the application in the taskbar it will bring it in front of all other opened windows.
* by clicking on the close button on the application it will close the application and remove it from the taskbar.
* the desktop has a background image.

## Desktop has 3 applications 
* Memory Game
* Chat App
* Notebook


### Memory Game 
The Memory game is an engaging and interactive component of the application with the following features:

![img](src/img/memorypic.png)

* Players must find all matching pairs of cards
Three difficulty levels are available for varied gameplay
* An attempt counter tracks the player's progress
* A reset button appears upon winning for quick replay
* Smooth animations enhance the card flipping experience
* Matched and unmatched cards have distinct visual feedback
* A hint button reveals a random card briefly to assist players
* Full support for both mouse and keyboard controls
* Keyboard navigation uses arrow keys, with Enter/Space to flip cards
* A victory message celebrates the player's success upon completion


### Chat App

Chat App Features:

![img](src/img/chatLOG.png)

![img](src/img/chatpic.png)

* User-friendly onboarding with initial username prompt
* Seamless server connection and chat display upon login
* Full messaging capabilities, including text and emoji support
* Real-time message reception for interactive conversations
* Flexible username modification option for personalization
* Multi-channel support with easy switching between topics
* Efficient message caching system, storing up to 30 recent messages
* Convenient scroll button for navigating chat history
* Smooth channel transitions, displaying last 30 messages per channel
* Chat management with a clear function, resetting both display and cache.

### Notebook 

![img](src/img/notebookpic.png)

* Adding new notes with a title and content
* Saving notes to local storage
* Loading and displaying existing notes from local storage
* Selecting individual notes by clicking on them
* Removing selected notes
* A user interface with input fields for note title and content
* A save button to create new notes
* A remove button to delete selected notes
* A list view of all saved notes
* Unique identification for each note using timestamps


### Technologies used 

* JavaScript
* CSS
* HTML 

## How to install and run 

* Run the command "npm install" in the terminal in order to install all the nessecery resourses for the application.

```
npm install
```

* When the installation is done run the command "npm run serve" in the terminal to run the application.

```
npm run serve
```

* Now go to the link "http://localhost:5173/"

* Enjoy the app

### The linters

* **Eslint**  run "npm run eslint" or run  run command "npm run eslint:fix" to fix the errors. 
* **Stylelint** run command "npm run stylelint" or run command "npm run stylelint:fix" to fix the style.
* **JsDoc** run command "npm run jsdoc" 
* **Htmlhint** run command "npm run htmlhint"
* **Lint** run command "npm run lint" to run all the linters together.

## The structure of my code 
* The A3 SPA application is structured with the desktop being the main component, which serves as the parent component for all other components. The desktop is set up in the "index.html" file, and the main JavaScript file for the application, "index.js", imports and renders the application.

* When a user clicks on an application in the menu bar, the application is opened and rendered in the desktop by creating a new instance of the Window component and passing the application as a prop. The Window component is the parent component for the application and is structured in the "window.js" file. It is divided into two main parts: the top bar and the container for the application.

* The top bar is structured in the "topbar.js" file and is divided into two divs, one for the title and one for the close, minimize, and maximize buttons. The top bar has functions for closing, minimizing, and maximizing the application, as well as event listeners that allow the user to drag the application.

* The Window component uses the "app" parameter to render the correct application, and each application is structured in its own file. The Window container adds new instances of the application and uses the function "getDiv()" to add the application to the container. All applications added to the desktop are stored in the "apps" array in the "index.js" file and are removed when the application is closed.

## youtube link

https://youtu.be/TusbpAkONtw

## Requirements/ Features

**F1**
<p> The HTML file provides the foundational structure for the application, including the desktop interface and the menu bar. This setup simplifies the process of adding new applications to the desktop environment.

<p> Clicking on any app logo in the taskbar will create an instanse of the Window component and inside of it in the container the application will be added by creating a new instance of the application and calling the getDiv() function that returns the div for the application. The user shall be able to open multiple windows of each app. 

<p> Drag-and-drop functionality is achieved by attaching event listeners to the window's top bar. These listeners monitor "mousedown," "mouseup," and "mousemove" events. When the user clicks on the top bar, the event listener begins tracking mouse movements. As the mouse is moved, the listener updates the window's position by adjusting the CSS properties for "top" and "left," allowing the application window to be dragged to a new location.

<p> In the taskbar, there are 3 icons, each icon represent an app. The user is able to open and app of them by clicking on its icon in the taskbar. 

<p> The top bar of the window includes buttons for closing, minimizing, and maximizing the application. These buttons are made functional by attaching event listeners to them, which trigger the appropriate functions when clicked.

<p> When the window is created, event listeners are added to detect when it is clicked or dragged, ensuring it moves to the front of other windows.

<p> on the desktop, there are three different applications, memory game, chat app, and notebook app.

**F2**
<p> I can run npm run lint without getting any errors.

<p> all other points are implemented.

**F3**
<p>Since the application is designed as a class, there are no restrictions on how many instances of it can be created. Each instance generates its own div element that can be returned.

<p> Users can play the game using the keyboard because the event listeners are set up within the game's creation process. Opening multiple instances won’t cause any issues with keyboard controls, as only the window in focus will respond to keyboard events.

<p> I decided to include a hint button that flips a random card for 0.5 seconds. This feature helps the user by making it easier to locate matching pairs.

**F4**

<p> It’s entirely possible to open multiple instances of the chat application because it’s built as a class-based object. Each instance generates its own div that can be returned.

<p> When the application is launched, it checks the local storage for a saved username. If none is found, the user is prompted to enter a username, which is then saved in local storage for future sessions.

<p> Since each message is appended to the chat body, there’s no issue with viewing the messages sent during the chat session, even if multiple chat windows are open.


**F5**
I wanted to add a useful application for ADHDers people, who need to take notes of everything in order to remember it.
The notebook app helps keep track of deadlines, exam dates, things these people need to do during the day.


**F6**
<p> The user has the option to switch between three different chat channels. They can select the desired channel by clicking on a dropdown menu and choosing from the available options.

<p> General: This channel is intended for general conversations.
Any: The Any channel is open for discussions on any topic.
Encrypted: This channel is designated for encrypted communications.
Messages are sent to the channel the user is currently tuned into, and the user can easily switch between channels as needed.

<p> Emoji support is also integrated into the chat. A button reveals a div containing emojis, and when the user clicks on an emoji, it is added to the message they’re composing. Emojis are dynamically generated by looping through a range of numbers and appending the corresponding hex code as buttons in the div.

<p> For the Encrypted channel, messages are encrypted using the TextEncoder and TextDecoder APIs. Users can send encrypted messages to this channel, and others listening on the same channel can decrypt the messages if they use the same encryption key and algorithm.

<p> Messages are stored in local storage, with a limit of 30 messages. When the application is opened, messages are retrieved from local storage and displayed in the chat window. As long as the application is running, it will continue to retrieve new messages from the server, add them to the chat, and store them locally.

<p> Switching channels will also load messages from local storage for that specific channel, ensuring each channel displays only its own messages.

<p> Additionally, users can send messages by pressing the Enter key or by clicking the send button.

<p> Finally, users have the option to clear the chat by clicking the clear button, which will also delete all related data from local storage.


**Conclusion**

<p> Honestly, I found the JvavScript to be the most challenging part of this project. That said, I’m very happy to be able to finish this project and with the overall appearance of the application.

<p> Considering this is my first project of this size using JavaScript, I recognize that the overall structure could be improved if there were more time. However, it’s functional for now, and I think it serves its purpose.

**TIl in this project**

I learnd how to code in JavaScript and also, Using CSS as much as I can, and finally I learnd how to be patient. 


**Overall TIL for this course (this far)**

<p> In this could I learnd HTML when I stared implementing my website, CSS to make it looks good, then i learned javaScript to implemet  the quiz. 
<p> I can say that it was one of the most difficult languages I learned during my studies, but at the same time it was fun and challenging.




