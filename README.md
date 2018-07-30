# Expense-Tracker-App

Time Allocated: 6 hours

## MVP (accomplished):
- login/signup
- expense item (amount, date, category, and description)
- dynamically populate DOM with expense items

## If given more time I would:
- Refactor the login/signup to link me to the expense input forms, and to hook up the backend to save an account to our storage system
- Add sorting functionality for our expense cards, so that we can sort them by amount or category
- Add a category drop-down with preset options
- Add further styling (especially to the login form)
- Hook up the backend to the frontend and utilize account and expense schemas for database

# Front End User Stories:

- Login/Signup with username, email, and password

- Dynamically add expenses with input fields of (amount, date, category, and description) to a visual interface


# Back End User Stories:

Memory or Save to Filesystem To switch to memory:

Edit variable STORAGE in .env file to anything else To switch back to FileSystem storage:

Edit variable STORAGE in .env file to STORAGE===filesystem Features

Make a bird with POST: http POST :3000/api/v1/birds name = [enter bird name] habitat = [enter habitat] region = [enter region]

Retrieve a bird with GET: http GET :3000/api/v1/birds?id=[_id]

Delete a bird with DELETE: http DELETE :3000/api/v1/birds?id=[_id]
