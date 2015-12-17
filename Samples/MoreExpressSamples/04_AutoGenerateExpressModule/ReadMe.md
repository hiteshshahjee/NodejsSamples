Express application generator

Use the application generator tool, express, to quickly create an application skeleton.

Install express with the following command:


$ npm install express-generator -g

Display the command options with the -h option:


$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

For example, the following creates an Express app named myapp in the current working directory:


$ express 04_AutoGenerateExpressModule

   create : 04_AutoGenerateExpressModule
   create : 04_AutoGenerateExpressModule/package.json
   create : 04_AutoGenerateExpressModule/app.js
   create : 04_AutoGenerateExpressModule/public/images
   create : 04_AutoGenerateExpressModule/public
   create : 04_AutoGenerateExpressModule/public/javascripts
   create : 04_AutoGenerateExpressModule/views
   create : 04_AutoGenerateExpressModule/views/index.jade
   create : 04_AutoGenerateExpressModule/views/layout.jade
   create : 04_AutoGenerateExpressModule/views/error.jade
   create : 04_AutoGenerateExpressModule/public/stylesheets
   create : 04_AutoGenerateExpressModule/public/stylesheets/style.css
   create : 04_AutoGenerateExpressModule/routes
   create : 04_AutoGenerateExpressModule/routes/index.js
   create : 04_AutoGenerateExpressModule/routes/users.js
   create : 04_AutoGenerateExpressModule/bin
   create : 04_AutoGenerateExpressModule/bin/www

   install dependencies:
     > cd 04_AutoGenerateExpressModule && npm install

   run the app:
     > SET DEBUG=04_AutoGenerateExpressModule:* & npm start


Then install dependencies:
$ cd 04_AutoGenerateExpressModule
$ npm install


run the app:
> set DEBUG=myapp:* & npm start

Then load http://localhost:3000/ in your browser to access the app.

The generated app has the following directory structure:

├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

7 directories, 9 files
