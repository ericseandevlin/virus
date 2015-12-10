# virus
A dumb website about dumb websites
-------

LINKS

- Instructions:
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/schedule.md
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/projects/project4/project.md

- Project:
	- GitHub
		- https://github.com/ericseandevlin/virus
	- Heroku
		- 
	- Trello link
		- 
	- Wireframes
		- https://drive.google.com/open?id=0B_SVqrLJRiUgVnV1Qm9EU1ZVSDA

---

TIMELINE GOALS

- Wed 12/2 --x--
	- Start planning Rails app today (and others)
- Sat 12/5
	- Rails app finished during the weekend
- Sun 12/6 --o--
	- Start planning Mean App 
- Mon 12/7
  - final proj proposal meeting
- Wed 12/9
	- Mean app finished 
- Thu 12/10
	- Final project planning
- Thu 12/17	
	- Final project finished
	
-------

Git flow:

- Steps:
	- git clone
	- Create development branch
		- from master
			- git checkout -b development		
	- Pull @ beginning of day
		- from development
			- git pull origin master
			- (npm install) if needed
	- Create 1 branch per file task
		- from development
			- git checkout -b staging_file-feature
	- Push by end of day 
		- from branch
			- git add .
			- git commit -m "update details"
			- git checkout development
			- git pull origin devlopment (get latest updates)
			- git checkout branch
			- git merge development
			- correct any conflicts
			- git add .
			- git commit "merge development corrected"
			- git push origin name_feature
			- (gitHub
				- Pull request)
			- OR
			- (git push origin development)
			- git checkout development
		- from development
			- (gitHub
				- Pull request)
			- OR
			- git push origin master
	- merge end of day

-------

REQUIREMENTS: (--o-- open) (--x-- complete)
 - A set of user stories which describe the scope of the app.
 - Wireframes describing the user experience for your site
 - For apps using relational data, you should try to incorporate an ERD (https://goo.gl/6VyXJ5) which describes the     relationships between models. This can be both a guide to creating the app, as well as a way to keep you on task.
 - A github repo
 - A link to the live site


-------


PROGRAMS / FRAMEWORKS USED
 - Foundation
 - MEAN stack


-------


CONCEPT / LAYOUT
 - will have somewhat naive web design, bright, awkward colors.
 - can also have 90 raver vibe. see The designers republic:  http://thedesignersrepublic.bigcartel.com/
 

-------

MODELS
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

-------

MVP USER STORY

 - users land on a page poulated with completely pointless categorized links.
 - they can click on a link title, image, or whole div (haven't decided) to take them to that link's website
 - they can sort by category
 - they can click on the submit button and get a modal to enter infomation for a new pointless website

BONUS
 - use paperclip to upload images
 - add upvote functionality
 - show top 5 most upvoted
 - sort by higest voted, newest, or a-z
 - add about page
 - add sign-up / login
 - edit your tagline, and posts in your settings / account
 - delete your posts

-------


BUG TRACK


