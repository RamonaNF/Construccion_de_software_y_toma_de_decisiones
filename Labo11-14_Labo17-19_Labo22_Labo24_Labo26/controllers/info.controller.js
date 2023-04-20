//const ejsFoot = require('../views/includes/foot');
//const ejsHead = require('../views/includes/head');

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

                  <h2> Labo 13: MVC | Labo 14: Manejo de sesiones y cookies </h2>
                  
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

                  <h2> Labo 17: Interacción con la base de datos </h2>

                  <section>
                    <h3> > ¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo? </h3>
                    <p>
                      <ul>
                        <li> Los datos que se manejan permanecen lo más protegidos posibles </li>
                        <li> Es sencillo darle mantenimiento a esa parte del sistema, pues se encuentra en un único lugar </li>
                        <li> Mejora la estructura del sistema </li>
                      </ul>
                    </p>
  
                    <!-- <aside>
                      Referencia
                      <a href="" target="_blank"> 1 </a>
                    </aside> -->  
                  </section>

                  <section>
                    <h3> > ¿Qué es SQL injection y cómo se puede prevenir? </h3>
                    <p> La inyección de código se da cuando el sistema recibe y procesa segmentos de código por parte de un usuario. <br>
                        Se puede prevenir siendo cuidadosos con la forma en la que se manejan los inputs recibidos, por ejemplo, no concatenando directamente la información recibida con nuestras queries.
                    </p>
  
                    <!-- <aside>
                      Referencia
                      <a href="" target="_blank"> 1 </a>
                    </aside> --> 
                  </section>

                  <h2> Labo 18: Autentificación </h2>

                  <section>
                    <h3> > ¿Qué otras formas de autentificación existen? </h3>
                    <p> Algunas otras librerías que JS ofrece para la autenticación de usuarios son las siguientes:
                        <ul>
                          <li> Passport JS </li>
                          <li> Permit </li>
                          <li> Grant </li>
                          <li> Feathers</li>
                          <li> Firebase authentication </li>
                        </ul>
                    </p>
  
                    <aside>
                      Referencia
                      <a href="https://www.ma-no.org/es/programacion/javascript/librerias-javascript-gratis-para-la-autenticacion-de-usuarios" target="_blank"> 1 </a>
                    </aside>  
                  </section>

                  <h2> Labo 19: Role Based Acess Control (RBAC) </h2>

                  <section>
                    <h3> > ¿En qué consiste el control de acceso basado en roles? </h3>
                    <p> En asignar a cada usuario un rol y conectar cada rol con los privilegios que tiene disponibles. <br>
                        De esta forma, se puede generar de forma dinámica el contenido de nuestro sistema, así como negar o conceder el acceso a ciertas secciones.
                    </p>
  
                    <!-- <aside>
                      Referencia
                      <a href="" target="_blank"> 1 </a>
                    </aside> -->
                  </section>

                  <section>
                    <h3> > Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. <br>
                            Realicen un análisis de las ventajas y desventajas de cada uno con respecto al control de acceso. </h3>
                    <p> Incluso tomando en cuenta el antes y después del sistema que hemos desarrollado en clase, pude percatarme de las virtudes y los retos que representa el usar un RBAC. <br>
                        En cuanto a ventajas, destacan los siguientes puntos:
                        <ul>
                          <li> Una vez construidas las relaciones necesarias, facilita muchísimo la protección del sistema </li>
                          <li> Permite integrar fácilmente nuevas funcionalidades a un rol en particular </li>
                          <li> Es escalable, pues se pueden añadir tantos roles como sean necesarios </li>
                        </ul>
                        Por otra parte, el mayor reto de su implementación es, a mi consideración, que hay que adoptar una perspectiva distinta a la hora de estructurar un sistema, pues se debe pensar qué sera visible para cuál rol.
                    </p>
  
                    <!-- <aside>
                      Referencia
                      <a href="" target="_blank"> 1 </a>
                    </aside> --> 
                  </section>

                  <h2> Labo 24: AJAX </h2>

                  <section>
                    <h3> > ¿Qué importancia tiene AJAX en el desarrollo de RIA's (Rich Internet Applications)? </h3>
                    <p> AJAX (Asynchronous JavaScript and XML) <br>
                        <ul>
                          <li> Modo de desarrollo web para establecer apps interactivas (RIAs) </li>
                          <li> Se ejecuta en el cliente (navegador del usuario) </li>
                          <li> Mantiene comunicación asíncrona con el servidor </li>
                        </ul>
                        AJAX permite que la aplicación funcione del lado del cliente, permitiendo que el contenido se despliegue sin recargar la página.
                        Adicionalmente, no se sobrecarga al servidor, pues solo se producen peticiones para actualizar segmentos definidos del contenido, en lugar de renderizar una vista completa.
                    </p>
  
                    <aside>
                      Referencias
                      <a href="https://blog.portalsaas.com/que-es-ria-rich-internet-applications/" target="_blank"> 1 </a> |
                      <a href="https://paginasweb.tech/ajax/que-es-ajax/#:~:text=AJAX%20viene%20de%20un%20acrónimo,comunicación%20asincrónica%20con%20el%20servidor" target="_blank"> 2 </a> 
                    </aside>
                  </section>

                  <section>
                    <h3> > ¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones de seguridad, del lado del cliente o del lado del servidor? </h3>
                    <p> Del lado del cliente los procesos son manipulables, por lo que el hecho de que la aplicación funcione de ese lado la hace más vulnerable. 
                        Por ello, las validaciones de seguridad deben hacerse tanto del lado del servidor como del cliente.
                    </p>
  
                    <aside>
                      Referencia
                      <a href="https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=882:ique-es-y-para-que-sirve-ajax-ventajas-e-inconvenientes-javascript-asincrono-xml-y-json-cu01193e&catid=78&Itemid=206" target="_blank"> 1 </a>
                    </aside>
                  </section>

                  <section>
                    <h3> > ¿Qué es JSON? </h3>
                    <p> JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos
                    </p>
  
                    <aside>
                      Referencia
                      <a href="https://www.ibm.com/docs/es/baw/20.x?topic=formats-javascript-object-notation-json-format" target="_blank"> 1 </a>
                    </aside>
                  </section>
                 `;
    response.send(html);
  };