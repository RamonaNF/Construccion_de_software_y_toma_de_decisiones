const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {   
    
    const html = `<section>
                    <h3> > Describe el archivo package.json </h3>
                    <p> 
                        Contiene metadatos e información relevante del proyecto <br>
                        Las propiedades básicas de este archivo son las siguientes:
                        <ul>
                          <li> name </li>
                          <li> version </li>
                          <li> license </li>
                          <li> author </li>
                          <li> contributors </li>
                          <li> description </li>
                          <li> keywords </li>
                          <li> main </li>
                          <li> scripts </li>
                          <li> repository </li>
                          <li> dependencies </li>
                          <li> devDependencies </li>
                        </ul>
                    </p>

                    <aside>
                      Referencia
                      <a href="https://alvaroperdiz.com/javascript/node-js/informaci%C3%B3n-basica-package-json/" target="_blank"> 1 </a>
                    </aside> 
                  </section>

                  <section>
                    <h3> > ¿Qué otros templating engines existen para node? </h3>
                    <p> <ul>
                            <li> Mustache </li>
                            <li> Handlebars </li>
                            <li> doT </li>
                            <li> Nunjucks </li>
                            <li> Underscore </li>
                            <li> Pug </li>
                            <li> Webix </li>
                        </ul>
                    </p>

                    <aside>
                      Referencia
                      <a href="https://colorlib.com/wp/top-templating-engines-for-javascript/" target="_blank"> 1 </a>
                    </aside>  
                  </section> 
                 `;
    response.send(html);
});

module.exports = router;
