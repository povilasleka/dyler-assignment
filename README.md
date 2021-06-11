# Vehicle manufacturers

### Start the application
You can start the application back-end and front-end by running command below
```
foreman start
```
You can also run only back-end server by using the command 
```
rails s
```

### Database schema

![database chema](https://i.imgur.com/gfrhgKl.png)
\
Database has only one table - favorites, it stores manufacturer id of the initial list.
After receiving favorite manufacturer ids associated with specific user, it is possible
to display only those manufacturers data.
guest_id column is varchar(36), because the uuid is 36 symbols long.
