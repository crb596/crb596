# Money: The Movie
## 30MFF WEB SITE
## Site by Cole Beasley

For this site I wanted to go for a look sort of like how Netflix does their movie pages. I also decided to try and keep everything on one page with an animation and menu bar to help users know where they are at like a lot of sites are now doing. I have never tried this approach before but overall I am happy with the results and I think the site as a whole is very fitting for our film. 

The site is broken down into five main pages: the landing page where there is a short description and the title, as well as a background image of money I made. Second, there is the the film itself for users to watch on the site. Third, I have all the actor information with their profile pictures. Fourth, I have some reviews of our fantastic film, all of which are written by me. Finally, I have placed some information about the possible upcoming sequel to our film and a movie poster for it.

### Implementation

To start off I broke the site down into the five sections and created a container for each one. I made their heights all the screen height less the header bar so that as they were scrolled through, their content would fill the screen. It was then just a process of going through each section and filling it with the needed information.

For section one I went with a gradient much like Netflix does. I like how this helps the title and description stand out and puts emphasis on the films cover image. 

For the next section I continued the gradient but split the two sections with the header bar. Using sticky positioning I could hide the header bar from the landing page to make it look more clean but as a user scolls down they get access to it. In the next section I also placed the video. I used a trick I found on W3 schools to set a container with padding-top to have a defined aspect ratio. This means that my movie is always at 100% width and height within its 16x9 container.

For the rest of the sections I switch to a solid background as there is more text which would be hard to read with the money image. In the third section I have the actor bio and profile pictures. To get the profile pictures right I made sure they were all squares and then applied a border-radius attribute to them to make them round. I also made seperate sections for the actor name and bio so the information is easy to read.

For the fourth section I made three quote boxes, showcasing the reviews I wrote. I had one class for the quote box so they all look the same but applied a second class to change the positioning to top-left, middle-right, and bottom-left.

Finally in the last section I placed an image that is a potential sequels movie poster. I also placed a bit of text to leave users who finished going through the site excited and waiting for the next movie.

#### Mobile Implementation

Taking what I had already built, there were very few changes needed to make the site mobile friendly. 

* Most of the paragraphs had to be center aligned instead of left
* The profile picture for actors I placed above their information with width:100%
* The video was made slightly bigger
* I got rid of the navigation bar as it would have taken up a lot of mobile screen space

#### Interactive Bar

For the bar I had to use JS for two functionalities. I needed to be able to click one of the buttons and it snap to that spot on the page while updating the menu bar. I also needed the menu bar to update as a user scrolled the page.

Using document.body.scrollTop and window.innerHeight I was able to map all of the key snap points to pixel values. I could then either set the scrollTop value depending on if a button was clicked or using the onscroll event I could get the value and update the navigation bar to reflect the page's position.



### Results

Overall I think the site has turned out great. It matches my wireframe I made well even though that was something I really struggled with. The updating menu bar was probably the hardest part and took a lot of trial and error with different approaches. Figuring out each position on the page took a lot of trial and error as well and the math for each div's spot wasn't as straight forward as I thought. In the end it seems to work well though and the whole site reflects our films theme of monetary connection well!
