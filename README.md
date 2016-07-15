# virus
### A dumb website about dumb websites
Users can post links and descriptions of their favorite nonsense sites! A fascinating catalogue of pointlessness! Developed as part of a collection of final projects for General Assembly's Web Development course.

-------
### Site
 - not currently live

-----
### Programs / Frameworks Used
 - Foundation
 - MEAN stack

-----
### CONCEPT / LAYOUT
 - will have somewhat naive web design, bright, awkward colors.
 - can also have 90 raver vibe. see The designers republic:  http://thedesignersrepublic.bigcartel.com/
 
#### MODELS
 - User
 	- username: string
 	- password_hash: string
 	- user_posts: foreign_id of posts
 	- user_img: string
 	- tagline: string
 
 - Sites
 	- title: string
 	- description: string (140 chars or one sentence)
 	- link: string
 	- vote: boolean
 	- site_img: string
	- category: string
 	- created_at: 

#### MVP User Story
 - users land on a page poulated with completely pointless categorized links.
 - they can click on a link title, image, or whole div (haven't decided) to take them to that link's website
 - they can sort by category
 - they can click on the submit button and get a modal to enter infomation for a new pointless website

#### Bonus Feaures (If I get to it!)
 - use paperclip to upload images
 - add upvote functionality
 - show top 5 most upvoted
 - sort by higest voted, newest, or a-z
 - add about page
 - add sign-up / login
 - edit your tagline, and posts in your settings / account
 - delete your posts
