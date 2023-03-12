exports.getInfo = (request, response, next) => {   
    
    const html = `<h2> Labo 11: Express </h2>

                  <section>
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

                  <h2> Labo 12: HTML dinámico </h2>
  
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

                  <h2> Labo 13: MVC </h2>
                  
                  <section>
                    <h3> > ¿Qué beneficios encuentras en el estilo MVC? </h3>
                    <p> Algunas de las principales ventajas de este patrón de diseño son las siguientes:
                      <ul>
                        <li> Se vueve más simple añadir distintas representaciones de la misma información </li>
                        <li> Crea independencia de funcionamiento </li>
                        <li> Facilita la identificación y solución de errores </li>
                        <li> Permite escalar cada aplicación conforme sea requerido </li>
                        <li> Probar el funcionamiento del sistema es mucho más sencillo </li>
                      </ul>
                    </p>
  
                    <aside>
                      Referencia
                      <a href="http://catarina.udlap.mx/u_dl_a/tales/documentos/lis/rivera_l_a/capitulo2.pdf" target="_blank"> 1 </a>
                    </aside>  
                  </section>

                  <section>
                    <h3> > ¿Encuentras alguna desventaja en el estilo arquitectónico MVC? </h3>
                    <p> Más que desventajas, el usar un enfoque MVC añade cierta complejidad al sistema, cosa que puede resumirse en los siguientes dos puntos:
                      <ul>
                        <li> Separar los conceptos aumenta considerablemente la cantidad de archivos a desarrollar y mantener </li>
                        <li> La curva de aprendizaje de este patrón de diseño es más alta a comparación de otros modelos más sencillos </li>
                      </ul>
                    </p>
  
                    <aside>
                      Referencia
                      <a href="http://catarina.udlap.mx/u_dl_a/tales/documentos/lis/rivera_l_a/capitulo2.pdf" target="_blank"> 1 </a>
                    </aside>  
                  </section>
                 `;
    response.send(html);
  };