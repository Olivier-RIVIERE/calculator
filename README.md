
![Logo](./assets/img/1716296373896.jpg)


# Calculator project

I continue to learn web development with this project. 💪 .


## Screenshots

![App Screenshot](./assets/img/Capture%20d'écran%202024-10-25%20180725.png)


## Code Exemple
```javascript
const appendToDisplay = (input) => {
  if (input === "C") {
    display.value = ""; 
  } else if (input === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Erreur";
    }
  } else {
    display.value += input; 
  }
};
```
## Languages

HTML
CSS
Javascript
## License

[MIT](https://choosealicense.com/licenses/mit/)

