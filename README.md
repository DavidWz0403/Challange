How to install the app local:

required Packages:

Django --> pip install django

Django-Rest-Framework --> pip install djangorestframework
required for REST-API

django-cors-headers --> installation guide --> https://github.com/adamchainz/django-cors-headers
required to whitelist the domain of the frontend 


how to run the server:
python manage.py runserver


how to run the frontend: 

2 options: 
    1. run the server in django(not recommended, because CORS_ORIGIN_WHITELIST does not accept this domain)
    http://127.0.0.1:8000/data/template
    
    2. run it local 
        1> Have Node.js installed in your system.
        2> In CMD, run the command npm install http-server -g
        3> Navigate to the specific path of your file folder in CMD and run the command http-server
        4> Whitellist the server domain in settings --> CORS_ORIGIN_WHITELIST
