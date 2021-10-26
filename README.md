# Cocktails Project

This Project will contain recipes and ingredients for speciall cocktails.
** IMAGE **

 <hr>

Cocktails Menu Branches :

<ul> <b> Preparation </b></ul>
<li> clear unnecessary react files </li>
<li> install required tools : <br> (Client) : npm install axios moment redux redux-thunk react-redux react-file-base64 <br> (Server) : npm install body-parser cors express mongoose nodemon  </li>
<br>
<ul><b> Setup </b> </ul>

<li> MongoDB preparation </li>
<li> Express configuration </li>
<br>
<ul> <b>Routes</b> </ul>

<p> I'll create dummy route to simulate API call - next I should create Model,Controllers.. Backend Structure </p>

![dummyRoute](https://user-images.githubusercontent.com/22063155/136864336-95328bdb-50f6-4848-87eb-54bf12d4eab3.JPG)

<br>
<ul> <b>Backend </b></ul>

<p> create backend structure and CRUD  </p>
<br>

<ul> <b>UI Design</b> </ul>

<p> App design and add styles. before working on Form and  App functionality </p>
<br>

<ul> <b>Redux </b> </ul>

<p>Installation of Redux 
<li> install Redux : npm install axios moment redux redux-thunk react-redux <br>  </li>
</p>
<br>

<ul> <b>Frontend</b> </ul>
<p> create form for cocktail create, edit button to update and delete button   </p>

<ul> <b>Authentications</b> </ul>
<p> Login\Logout Google - and Register form. </p>
<li> Client :  npm install jwt-decode react-google-login react-router-dom <br>  </li>
<li> Server :  npm install bcryptjs jsonwebtoken <br>  </li>

<ul> <b>Pagination And Search bar</b> </ul>
<p> Pagination and search bar. </p>
<li> Client :  npm install @material-ui/lab material-ui-chip-input<br>  </li>

<ul> <b>Desgin </b> </ul>
<p> Design application and small fixes and preparation for deployment. </p>
<li> Client : npm install --save react-google-font-loader<br>  </li>

<ul> <b>Deployment </b> </ul>
<p> Deploy App - BE Heroku - FE Netlify <br>
- Check Heroku :  heroku -v <br>
- Server Dir : <br>
heroku login <br>
git init <br>
heroku git:remote -a cocktails-project <br>
<b> Modify and prepare for production : .gitignore (add node_modules) + add .env details + add Procfile +  </b> <br>
git add . <br>
git commit -am "make it better" <br>
git push heroku master <br>
</p>
