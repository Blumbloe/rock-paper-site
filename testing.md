## Testing

### Testing User Stories
#### Testing User Goals
| Goal                                                | Result  | Comment                                                                                                              |
|-----------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------|
| User friendly navigation and responsive design      | Success | The site is fully responsive across various devices and screen sizes                                                 |
| Help button       | Success | The site has a button that gives the user information on how to play. |
| Current and high score tally's | Success | The site contains a tally that tracks the current and high scores of the user.               |
| Reset button                  | Success | The site contains a button that resets the current score of the user.                             |

### Bugs

Throughout the development of the site I have been consistently checking for bugs or issues in the code some of those issues are as followed:

- The result of the rock paper scissor buttons being clicked returns "null" when the mouse is over the awesome font icon. To fix this I set pointer events to none for "button > i" in the css style sheet.

- The result function returnsed draw but not the win or lose situations. This was fixed by having the computed value equal the value of the data attribute's string value instead of the case number when comparing the players value against the computers value.

- The high score was not updating on the page until the game was over. I solved this bug by changing the structure of the code to take the if statement that updates the page out of the parent if so that it can run independantly.

### Manual Testing

#### Funcitonality testing

- The testing was completed on the following devices:

- Personal Computer
- Iphone 16e

The browsers used to test the site include:

- Google Chrome
- Safari
- Microsoft Edge

### Lighthouse
I have used the "lighthouse" feature within Chrome dev tools to test the sites performance, accessibility and best practices. I have checked both mobile and desktop device types.
![image of Lighthouse performance for desktop](/assets/documentation/lightouse-pc-1.png)
![image of Lighthouse performance for mobile](/assets/documentation/lighthouse-mobile-1.png)

I noticed that the performance and accessibility were lower than I would like for the site so to correct this I added a main tag to the html and removed a parseInt from a "let" in my script.js which resulted in both scores being improved to a more acceptable level. 

![image of lighthouse performance for desktop after changes](/assets/documentation/lighthouse-pc-2.png)
![image of lighthouse performance for mobile after changes](/assets/documentation/lighthouse-mobile-2.png)