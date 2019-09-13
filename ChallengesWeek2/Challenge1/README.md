# WEEK 2 CHALLENGE 1
**By David Eduardo Cermeño Pinzón**
*Student of the school*
  
### Description
Challenge that uses JSON to retrieve information from Marvel.com's API, documentation in: https://developer.marvel.com/docs

####Steps made
1. First looked for the stories and comics api since it was related to the first query we had to make, all with the objective to get familiarized with the JSON's structure.

2. Then started making queries filtered by title and author in order to try and get relevant information

3. Then once I found the id to which the comic was related looked for the characters section that was on the API in the comics URI, time at which I got the first query.

4. The second one was much more easy, since I already applied the knowledge of filtering, so just went straight to the characters section and started looking for the character I wanted adding at the end of the query the /stories (the id of the specific character was found in last step, since it was part of the comic "Cable and Deadpool...)

#### Structure of the json file
You fill find and object which contains the entire lookups required by the challenge

 1. List of characters of Cable & Deadpool (2004) #46 (Zombie Variant)
 2. List of all stories when Agent X (Nijo) appears

#### How the JSON payload is structured

The general object is organized by lookups (the lists wanted)
