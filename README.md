### Node-radio-play01
> I would like to create nodejs project for playing stream radio on web and 
>it's fun to try new module for test and managing package on github.
>2016.04.03 Lormann Chen

![my icon](lormann-icon.png)

#### <font color="Red"> Objectives:</font>
##### 1. Play *stream radio* from web
##### 2. modules managed by github and npm package
##### 3. auto-test and depoly when committed
##### 4. The tech.
```
- socket.io
- aws sns
- mongodb
```

#### Construction
- Project init
```bash
node init
```
- Add modules and save to package
```
npm install name_module --save ,(dependencies)
npm install name_module --save-dev ,(devdependencies)
```
- Add ignored items to .gitignore
```
node_modules 
```  
- [Install mongodb][ref02] and [init mongod][ref03]
```
mongod --dbpath /var/lib/mongodb/&

```

#### In progressing 

Wait for Study | Detail
------------ | -------------
 [Todo with Mongodb][study01]| express/ejs and mongodb
 [login with Passport][study02] | on Azure cloud
 Radio Streaming|[Shoutcast][study04],[Icecast][study05],[Radio-nodejs][study03],[Radio-Android][study06]

#### Reference
- [Markdown example][ref01]
- [Install MongoDB][ref02]
- [Linux network status check][ref05]
- [MongoDB tutorial][ref06]

[ref01]:http://markdown.tw/ "Markdown example" 
[ref02]:http://www.arthurtoday.com/2015/05/ubuntu-install-mongodb-3x.html "Setup env for mongodb"
[ref03]:https://docs.mongodb.org/manual/tutorial/manage-mongodb-processes/ "mongodb example01"
[ref04]:http://blog.gtwang.org/programming/getting-started-with-mongodb-shell-1/ "mongodb example02"
[ref05]:http://www.binarytides.com/linux-ss-command/ "ss command for linux network status check"
[ref06]:http://www.tutorialspoint.com/mongodb/mongodb_create_collection.htm "tutor for mongodb"

[study01]:http://dreamerslab.com/blog/tw/write-a-todo-list-with-express-and-mongodb/ "todo with mongodb"
[study02]:https://azure.microsoft.com/zh-tw/documentation/articles/active-directory-b2c-devquickstarts-web-node/ "login"
[study03]:https://github.com/pedromtavares/radio 
[study04]:http://www.shoutcast.com/
[study05]:http://icecast.org/
[study06]:https://github.com/cr5315/shoutcast-android 