Links

- back-end side of repository:
  https://github.com/KeikoWada/FridgeTracker-api
- front-end deployed site;
  https://keikowada.github.io/FridgeTracker-front-end/
- back-end deployed site;
  https://fridgetracker-kw.herokuapp.com/


instruction for FridgeTracker App;
  This is the App that you can track the expiration dates of each food in your fridge.
  1) create the list
    - insert the expiration date, item name, and category
  2) check the list
    - you can track which food is expiring
  3) edit the list
    - you can edit the list in case you type wrong date or wrong item name etc.
  4) search the list
    - you can search certain list by ID


List technologies used.
  -Jquery
  -javascript
  -Ajax
  -grunt serve, grunt deploy
  -node
  -Gith, Github
  -boostrap
  -handlebars


The plan for this project
  1) make user story
     - to see what user is expecting for brower to do
  2) make lists of each required action according to the user stories.
    - make a logic step by step
  3) writing the code


The story about development process and problem-solving strategy.
   my process was
   1) back-end side
   2) front-end side
   tried to check if all function is working in each steps before move on to the next steps.
   for example, in front-end side, if I make shell file, i checked curl request, then move on to the html, event, ajax, and ui file.
   when I had issue, I tried to think step by step and use console log a lot to see which function is working, and what is passing from which paramiter.

List unsolved problems which would be fixed in future iterations.
  - make code DRY
  - styling
  - update function from handlebars
  - retrive the former data in modal when click the edit(update) button


Link to wireframes
  https://i.imgur.com/vH1T6lx.jpg

user story
  if I am a user
  - I want to be able to save my email address and password
  - I want to be able to sign-in with the email and password that I registered before
  - I want to be able to change my password
  - I want to be able to sign-out
  - I want to be able to create the list
  - I want to be able to check the list I once created
  - I want to be able to edit (add/delete items/ or edit dates)
  - I want to be able to create a list when I'm looking at the existed list
  - I want the list to be in order by dates
  - (i want to be able to see the items and experation date in each categories)
