# Reporta Backend


# Table of Contents

- Introduction
- Features
- Installation

## Introduction :

The app was simply built for a company to keep track of their customer call details record, but the first side of the project will be focused on the User Management structure , authentication , authorization, change password.We will first create users  and then proceed to dashboard after they are active on the backend.

## Features ( Routes)

1.  A route was created for registering an Admin and users organization receiving the company name , email, password, phone number and address.
2. In this project, I defined  the database and tables for the project using sequelize library as an Object relational framework that converts raw mysql queries to javascript object" 
[master 768efb6] i have defined  the database and tables for the project using sequelize library as an Object relational framework that converts raw mysql queries to javascript object
2.  A prIvate route was created for only Admin users.  
3.  Once the admin to an organization is created , a mail with link will be sent to the admin's email for a new Password change
4.  Once the admin click's on the link in his/her email, then it routes him to a page that he inputs his password and also confirms his/her password and click the submit button.
5. The page is posted to an updatePassword endpoint that authenticates the admin user  and ensures his email exist in the db . His/Her password is updated and status changed to active in the database. 


## Installation

Run npm install on your code environment to install the node_modules files
