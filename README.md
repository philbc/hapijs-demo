## hapi-playground

A REST api demonstration project using Hapijs framework.

##### API endpoints

Method | Uri |
--- | --- |
GET | / |
POST | /login |
GET | /users/{user_id}/tasks |
GET | /users/{user_id}/tasks/{task_id} |
POST | /users/{user_id}/tasks |
PUT | /users/{user_id}/tasks/{task_id} |
DELETE | /users/{user_id}/tasks/{task_id} |

Requirements to run.
- update npm packages
- add your ```.env``` file.

```
JWT_SECRET=
HOSTNAME=
PORT=
ENVIRONMENT=
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_HOST=
```
- add json file for running migrations and seeds

```js
{
  "development": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  }
}

// you may run
npx sequelize-cli --config=test.json db:migrate
npx sequelize-cli --config=test.json db:seed:all
```
