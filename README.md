# Overview
RESTFul API Implementation and continuous deployment

## Deployment Details

TEST 1. ( Nodejs )
------------------
REST API for student enrolment project for a school , Data in AWS RDS MySQL Database, Rest API is developed in Node.js 
Node.js file name - app.js

Functions available  ( can be tested with postman )
--------------------
**New student enrolment:**

**Update student record:**

**Delete student record**

Use Postman to call the API ( for Insert/Update/Delete )

TEST 2. ( Continuous deployment of above Rest API )
---------------------------------------------------
## Deployement of application (app.js) in AWS thru codepipeline, source code is maintained in hithub
## Hithub ->  AWS CodePine -> AWS BeanStalk ( NLB/AutoScaling/EC2/AWS RDS MySQL )


## Architecture

![arch](https://user-images.githubusercontent.com/74394472/99143221-b9421e00-2696-11eb-85d6-04229d7b2587.JPG)


http://node-env-1.eba-xnrkubim.ap-southeast-1.elasticbeanstalk.com/

http://node-env-1.eba-xnrkubim.ap-southeast-1.elasticbeanstalk.com/students


New record - POST reuquest using Postman ( json message using the link http://node-env-1.eba-xnrkubim.ap-southeast-1.elasticbeanstalk.com )

eg.
{
    "id":8888,
    "firstName" : "Wsrty",
    "lastName" : "ABC",
    "class" : "P5",
    "nationality" : "USA" 
}

