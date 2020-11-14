# Overview
RESTFul API Implementation and continuous deployment

## Deployment Details

REST API for student enrolment project for a school , Data in AWS RDS MySQL Database, Rest API is developed in Node.js

## Hithub ->  AWS CodePine -> AWS BeanStalk ( NLB/AutoScaling/EC2/AWS RDS MySQL )


**New student enrolment:**
**Update student record:**
**Delete student record**
## Architecture

![arch](https://user-images.githubusercontent.com/74394472/99143221-b9421e00-2696-11eb-85d6-04229d7b2587.JPG)


Use Postman to call the API ( for Insert/Update/Delete )

http://node-env-1.eba-xnrkubim.ap-southeast-1.elasticbeanstalk.com/

http://node-env-1.eba-xnrkubim.ap-southeast-1.elasticbeanstalk.com/students

New record - POST reuquest using Postman
{
    "id":8888,
    "firstName" : "Wsrty",
    "lastName" : "ABC",
    "class" : "P5",
    "nationality" : "USA" 
}

