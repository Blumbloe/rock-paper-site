## Testing

### Testing User Stories
#### Testing User Goals
| Goal                                                | Result  | Comment                                                                                                              |
|-----------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------|
| User friendly navigation and responsive design      | Success | The site is fully responsive across various devices and screen sizes                                                 |
| Help button       | Success | The site has a button that gives the user information on how to play. |
| Current and high score tally's | Success | The site contains a tally that tracks the current and high scores of the user.               |
|Reset button                  | Success | The site contains a button that resets the current score of the user.                             |

### Bugs

Throughout the development of the site I have been consistently checking for bugs or issues in the code some of those issues are as followed:

- The result of the rock paper scissor buttons being clicked returns "null" when the mouse is over the awesome font icon. To fix this I set pointer events to none for "button > i" in the css style sheet.

- The result function returnsed draw but not the win or lose situations. This was fixed by having the computed value equal the value of the data attribute's string value instead of the case number when comparing the players value against the computers value.

- The high score was not updating on the page until the game was over. I solved this bug by changing the structure of the code to take the if statement that updates the page out of the parent if so that it can run independantly.