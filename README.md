# Work-Day-Scheduler

To start off this project, in my script.js file I included the current date at the top of the page using moment.js in the format that was specified in the instructions. I used the starter code id that was giving to append it to the page.

I then created 3 columns using the grid layout from bootstrap, 1 column for the hours, 1 for the tasks, and 1 for the save button.

After I styled them using css classes and placing the save icon which I got from fontawesome.com, I proceeded to place a textarea inside my timeblocks. 

In my script.js file I created a .click function and a loadTask function for each hour and using localStorage.setitem and .getItem I was able to keep my tasks on my page, even if we refresh. 

Then, I created a variable with moment.js to get the current hour of the day, then I created a timeChange function for each hour to include my if statements to see if the hour was either in the past, present or future. I got their color to change accordingly using the .addClass method, which I then created 3 classes to give the appropriate color.
