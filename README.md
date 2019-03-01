# Dave.com Coding Challenge
## Bear Sighting Tracker ##

Bear sightings are on the rise nationwide. Unfortunately, there's no centralized website to upload and access bear sightings. This is a big problem!

Using the framework of your choice, create an API that allows users to submit bear sightings as they happen and query the database for recent sightings with certain filters.

Your API should conform to the following spec:

### POST /sighting ###
Example POST body:
`{ bear_type: 'grizzly', notes: 'It was a big one!', zip_code: '90210', num_bears: 3 }`

### GET /sighting/search ###
Return an array of sightings, include a unique ID with each.
Supported query params, all optional
`start_date` (inclusive) (default: all time)
`end_date` (inclusive) (default: all time)
`bear_type` (default: all types)
`zip_code` (default: all zip codes)
`sort` (default: created timestamp, ascending. only supported value is `num_bears`)

### GET /sighting/:id ###
Return a single sighting object queried by its ID

## Submission ##
Submit the final project via zip folder at https://goo.gl/forms/qzQCMMoiHn3bc0Pu1
Please include a package.json or equivalent, but omit the node_modules directory. The form sometimes rejects zip files when node_modules is included.

## Extra credit ##
If you have time, write tests! If you still have time, create a simple UI for submitting and querying bear sightings.

Please spend no more than 4 hours on this project, and feel free to get in touch with me or Dick Fickling (dick@dave.com) if you have any questions.