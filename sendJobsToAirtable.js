const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'key6tZIQa1Dih72xX' }).base('app5fCgRbl0Uk9ToJ');

let talentos = [
  [
    {
      Nombre: 'Manuel Cepeda ',

      Nickname: ' Backend Developer (Java/Kotlin) ',

      Descripción:
        'Manuel Cepeda. Backend Developer (Java/Kotlin) | Fulfillment (FULLY REMOTE) en Rappi. RappiUniversidad de Las Américas (EC). Ecuador379 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/manuel-cepeda',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Victor Alvarado ',

      Nickname: ' BackEnd Developer ',

      Descripción:
        'Experiencia · Gráfico Aktiun. BackEnd Developer. Aktiun. feb. de 2020 - actualidad1 año 11 meses · Gráfico Easysoft Ecuador S.A. Ingeniero de proyecto. Easysoft ...',

      'Social Account': 'https://ec.linkedin.com/in/victor-alvarado-44b78151',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'José Javier Velasco ',

      Nickname: ' Backend Developer ',

      Descripción:
        'Edición de Composite Applications (Oracle SOA Suite). Migración de Composite Aplications (SOA Suite) a Service Bus (Oracle Service Bus). Gráfico Tenkai Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/josejaviervelasco',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Lorena Tarambis ',

      Nickname: ' Front and Backend Developer ',

      Descripción:
        'Lorena Tarambis. Front and Backend Developer en Banco Pichincha. Banco PichinchaEscuela Politécnica Nacional. Ecuador185 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/lorena-tarambis',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Andres Velez Bravo ',

      Nickname: ' Backend Developer ',

      Descripción:
        'Andres Velez Bravo. Desarrollador de aplicaciones en Trantor Technologies. Trantor TechnologiesUniversidad Central del Ecuador. Ecuador62 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/andres-velez-bravo-1ba229116',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Juan Diego Torres Argudo ',

      Nickname: ' Backend developer ',

      Descripción:
        'Juan Diego Torres Argudo. Backend developer en Avalith. AvalithUniversidad del Azuay. Azuay, Ecuador81 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/juan-diego-torres-argudo-88537384',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jorge Villafuerte ',

      Nickname: ' Chapter Area Lead BackEnd ',

      Descripción:
        'Chapter Area Lead BackEnd en Banco Pichincha. Banco PichinchaUniversidad Internacional del Ecuador. Ecuador281 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/jorgevillafuertegord',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Marco Garofalo ',

      Nickname: ' Desarrollador Backend ',

      Descripción:
        'Desarrollador Backend. Jelou Latam. ene. de 2021 - actualidad1 año 1 mes. Ecuador. Encargado de mantener y construir soluciones para el comercio ...',

      'Social Account': 'https://ec.linkedin.com/in/marco-ec/es',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Patricio Pérez Vallejo ',

      Nickname: ' Backend NodeJS Engineer ',

      Descripción:
        'Backend NodeJS Engineer at Ballast Lane Applications. Ballast Lane Applications, LLCPontificia Universidad Católica del Ecuador. Ecuador168 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/patricio-perez-vallejo',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Maicoly Morocho ',

      Nickname: ' Desarrollador Frontend, Backend ',

      Descripción:
        'Maicoly Morocho. Desarrollador de software Frontend, Backend. BoxbeepUniversidad Politécnica Salesiana del Ecuador. Ecuador36 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/maicoly-morocho-65b17b168?trk=public_profile_browsemap',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },
  ],
  [
    {
      Nombre: 'Jose Antonio Alvarez ',

      Nickname: ' Backend Developer ',

      Descripción:
        'Cuenca, Azuay, Ecuador. -Desarrollo Backend con microservicios en Kotlin + Spring Boot. -Desarrollo Frontend con Angular+10 -Planificacion de proyectos con ...',

      'Social Account': 'https://ec.linkedin.com/in/jose-antonio-alvarez-716163b8',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Daniel Tapia ',

      Nickname: ' Full Stack Developer ',

      Descripción:
        'Backend Developer. Banco Pichincha. ene. de 2019 - oct. de 2020 1 año 10 meses. Quito, Pichincha, Ecuador. Gráfico Instituto Ecuatoriano de Seguridad Social ...',

      'Social Account': 'https://ec.linkedin.com/in/daniel-tapia-747755a3',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Santiago Cabrera ',

      Nickname: ' Backend developer ',

      Descripción:
        'Santiago Cabrera. Backend developer en Technisys. TechnisysUniversidad Técnica Particular de Loja. Quito, Pichincha, Ecuador297 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/santiago-cabrera-73433a95',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Eduardo Villa ',

      Nickname: ' Backend Software Engineer ',

      Descripción:
        'Eduardo Villa. Backend Software Engineer en Aktiun. AktiunUniversidad Central del Ecuador. Área Metropolitana de Quito269 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/eduardo-villa-483819a2',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Juan Quispe ',

      Nickname: ' Guayaquil, Guayas, Ecuador | Perfil profesional',

      Descripción:
        'Desde hace unos años estoy involucrado en el desarrollo y asimilación de nuevas tecnologias principalmente en lo referente al FontEnd Y BackEnd.',

      'Social Account': 'https://ec.linkedin.com/in/juan-quispe-34b639a2',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Manuel Lecaro ',

      Nickname: ' Backend Developer (Rappi ',

      Descripción: '23 nov 2021 — ',

      'Social Account': 'https://ec.linkedin.com/in/manuel-lecaro-497613186',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Cristian Andres Tapia Jaya ',

      Nickname: ' Backend developer ',

      Descripción:
        'Backend developer at Rappi. Rappi. Cuenca, Azuay, Ecuador327 contactos. Unirse para conectar ... Backend developer for Restaurant Integration vertical.',

      'Social Account': 'https://ec.linkedin.com/in/cristian-tapia',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Hector Garcia Leiton ',

      Nickname: ' Backend Developer ',

      Descripción:
        'Hector Garcia Leiton. Backend Developer en Technisys. TechnisysUniversidad Politecnica Salesiana. Ecuador451 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/hector-garcia-leiton-b481919a',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'César Loachamin ',

      Nickname: ' Principal Backend Engineer & People ...',

      Descripción:
        'César Loachamin. Principal Backend Engineer & People Manager at Backbase. BackbaseEscuela Politécnica Nacional. Quito, Pichincha, Ecuador494 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/cesarloachamin',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },

    {
      Nombre: 'Ricardo Herrera ',

      Nickname: ' iOS and Backend Developer ',

      Descripción:
        'iOS and Backend Developer en Oshyn, Inc. OshynUniversidad San Francisco de Quito. EcuadorMás de 500 contactos ... Hago backend developement con C#, .',

      'Social Account': 'https://ec.linkedin.com/in/ricardo-herrera-36b53469',

      'Área Profesional': 'qa',

      Portal: 'Google',
    },
  ],
  [
    {
      Nombre: 'Andres Condo ',

      Nickname: ' Universidad de Guayaquil ',

      Descripción:
        'Cargo de Fullstack Developer, en stack MERN (MongoDB, Express.js, React, Node.js). Encargado del levantamiento y puesta en marcha del backend, adición de ...',

      'Social Account': 'https://ec.linkedin.com/in/andres-condo-50b1a7195',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jonathan Larrea Suárez ',

      Nickname: ' Back',

      Descripción:
        'Soy Jonathan Larrea Suárez, desarrollador web que reside en Guayaquil, Ecuador. Trabajo principalmente como Backend Developer y analista de datos, ...',

      'Social Account': 'https://ec.linkedin.com/in/jonathanlarreasuarez',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Adrian Ramírez ',

      Nickname: ' Desarrollador backend ',

      Descripción:
        'Desarrollador backend en Aktiun. AktiunUniversidad de las Ciencias Informáticas. Guayaquil, Guayas, Ecuador93 contactos ... Desarrollor backend Coldfusion.',

      'Social Account': 'https://ec.linkedin.com/in/adrian-ram%C3%ADrez-324052183',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Luis Emmanuel De Andrade Zamora ',

      Nickname: ' Backend Developer',

      Descripción:
        'Luis Emmanuel De Andrade Zamora. Backend Developer at Shokworks. Shokworks, Inc.Universidad Nacional Experimental de Guayana. Quito, Pichincha, Ecuador234 ...',

      'Social Account': 'https://ec.linkedin.com/in/luis-emmanuel-de-andrade-zamora-ba8141166',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'sebastian camacho ',

      Nickname: ' Desarrollador en frontend y backend',

      Descripción:
        'sebastian camacho. Desarrollador en frontend y backend en SMART ECUADOR. SMART ECUADOR. Latacunga, Cotopaxi, Ecuador. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/sebastian-camacho-17103821a',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Kevin Ibadango ',

      Nickname: ' Frontend Developer ',

      Descripción:
        'Analista-Desarrollador Software Backend. Grupo KFC Ecuador. ago. de 2017 - mar. de 2020 2 años 8 meses. Quito, Pichincha, Ecuador. Tareas realizadas:',

      'Social Account': 'https://ec.linkedin.com/in/kevin-ibadango-56858590',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'KEVIN BRYAN SUAREZ GUZMAN ',

      Nickname: ' FRONT & BACKEND ...',

      Descripción:
        'FRONT & BACKEND DEVELOPER en Banco Pichincha ... Ecuador. Gráfico Compañía de Servicios Auxiliares de Gestión de Cobranza, RECYCOB S.A. ...',

      'Social Account': 'https://ec.linkedin.com/in/kevin-bryan-suarez-guzman',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Paúl Arias ',

      Nickname: ' Ingeniero de sistemas ',

      Descripción:
        'Paúl Arias. Backend software engineer at Avalith. AvalithUniversidad Politécnica Salesiana. Cuenca, Azuay, Ecuador112 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/pa%C3%BAl-arias-180932a7',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Juan Manuel Romero Santamaría ',

      Nickname: ' Software Engineer',

      Descripción:
        'Soy un ingeniero de software graduado en ESPOL, la mejor universidad de ingeniería en Ecuador y una de las 100 mejores universidades de América Latina según ...',

      'Social Account': 'https://ec.linkedin.com/in/jmanuelromero',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'José Luna ',

      Nickname: ' Software Developer ',

      Descripción:
        'PPMPontificia Universidad Católica del Ecuador ... Esmeraldas, Esmeraldas, Ecuador ... Oswaldo Leon Cedeño. Backend Developer en Kushki. Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/josluna98',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },
  ],
  [],
  [
    {
      Nombre: 'Jhonatan Arcos ',

      Nickname: ' Backend',

      Descripción:
        'Jhonatan Arcos. Full Stack Developer en Online Beratung. ONLINEBERATUNG CIA. LTDAUniversidad Nacional de Chimborazo. Ecuador40 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/jhonatan-arcos-57445b160',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Kerly Naranjo ',

      Nickname: ' Full Stack Software Developer ',

      Descripción:
        'Menta, experiencias en software. oct. de 2017 - dic. de 2018 1 año 3 meses. Ecuador. Desarrolladora ...',

      'Social Account': 'https://ec.linkedin.com/in/kerly-naranjo-153572117',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Cristian López ',

      Nickname: ' Senior Software Engineer ',

      Descripción:
        'Diners Club del Ecuador ... Ecuador. Full Stack Developer. I worked creating a chatbot for Diners Club ... For the backend we used Springboot with Java 8',

      'Social Account': 'https://ec.linkedin.com/in/cristian-l%C3%B3pez-b3422281',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Alexander Baidal Mendoza ',

      Nickname: ' Senior Software Engineer ',

      Descripción:
        'Guayaquil, Guayas, Ecuador ... Senior Java Backend Developer ... Diseño y arquitectura Backend JAVA JDK8, JEE, Hibernate, Maven, API REST, JSON, JWT.',

      'Social Account': 'https://ec.linkedin.com/in/alexanderbaidal',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Franklin Tixi ',

      Nickname: ' Developer Senior Backend/Frontend ',

      Descripción:
        'PRODUBANCO - Grupo Promerica. abr. de 2019 - actualidad2 años 10 meses. Quito, Pichincha, Ecuador. Desarrollador de ...',

      'Social Account': 'https://ec.linkedin.com/in/franklin-tixi',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Francisco Javier Higuera González ',

      Nickname: ' Desarrollador Backend ...',

      Descripción:
        'Desarrollador Backend Python-Django en Mi Águila. Mi ÁguilaUniversidad Central "Marta Abreu"​ de Las Villas. Quito, Pichincha, Ecuador123 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/francisco-javier-higuera-gonz%C3%A1lez-868033a1',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jose Zuñiga ',

      Nickname: ' Quito, Pichincha, Ecuador | Perfil profesional',

      Descripción:
        "Fullstack developer with +6 years of experience; I define myself as frontend and I have strong skills in backend and devops. I've always been passionated ...",

      'Social Account': 'https://ec.linkedin.com/in/josezu',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Luis García Castro ',

      Nickname: ' Lead Frontend Engineer ',

      Descripción:
        'Quito, Ecuador. I worked in software development for US based clients. The tech stack which I worked on was: - Database: MSSQL - Backend: .Net Core & .',

      'Social Account': 'https://ec.linkedin.com/in/luis-garcia-castro',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'César Lata Jácome ',

      Nickname: ' Programador Backend Laravel ',

      Descripción:
        'Durán, Guayas, Ecuador64 contactos ... Ecuador. - Asegurar el buen funcionamiento de la oficina ... Gráfico Curso de Introducción al Desarrollo Backend ...',

      'Social Account': 'https://ec.linkedin.com/in/c%C3%A9sar-lata-j%C3%A1come-07825759',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jose Candelario Cruz ',

      Nickname: ' Programador de software ',

      Descripción:
        'Desarrollador de Software Backend y Frontend con calidad ... may. de 2021 - actualidad9 meses. Ecuador. Programador de software. Gráfico Nextcode Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/jose-candelario-cruz-90571813a',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },
  ],
  [],
  [],
  [],
  [
    {
      Nombre: 'Denys Maslyukov ',

      Nickname: ' Full',

      Descripción:
        'Web developer with focus on backend (PHP/Python). Freelance. Ecuador79 contactos ... Specialist in Backend for Web Apps, REST/JSON RPC API, third-party API ...',

      'Social Account': 'https://ec.linkedin.com/in/denyms',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Ricardo Herrera ',

      Nickname: ' iOS and Backend Developer ',

      Descripción:
        'Ricardo Herrera. Graduate from Universidad San Francisco de Quito. OshynUniversidad San Francisco de Quito. Ecuador500+ connections.',

      'Social Account': 'https://ec.linkedin.com/in/ricardo-herrera-36b53469/en',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Roberto Andrés Noboa Gárate ',

      Nickname: ' Quito, Pichincha, Ecuador',

      Descripción:
        'Roberto Andrés Noboa Gárate. Senior Backend Engineer. SIPECOM S.A.Escuela Superior Politécnica del Litoral. Quito, Pichincha, Ecuador232 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/roberto-andr%C3%A9s-noboa-g%C3%A1rate-1852a473',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jaime Andrade ',

      Nickname: ' Mobile Developer ',

      Descripción:
        'Jaime Andrade. Mobile & Backend Developer. CidenetUniversidad Católica de Santiago de Guayaquil. Ecuador256 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/jaime-andrade-71918396',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Cesar Tenemaza ',

      Nickname: ' Consultant Developer ',

      Descripción:
        'Cesar Tenemaza. Backend Developer | Java | Ruby | Tech enthusiastic. ThoughtWorksEscuela Politécnica Nacional. Quito, Pichincha, Ecuador301 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/cesartenemaza',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jeisson Steve Corredor Vargas ',

      Nickname: ' Universidad Católica de ...',

      Descripción:
        'Chief Technology Officer. Engicoders. ene. de 2018 - ene. de 2020 2 años 1 mes. Ecuador ... José Javier Velasco. Backend Developer en Coddix. Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/jeisson-steve-corredor-vargas-67386255',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Fabricio Orrala Parrales ',

      Nickname: ' Software Engineer ',

      Descripción:
        'Backend Web-Developer. CellForce. Jul 2018 - Nov 2020 2 years 5 months. Guayaquil, Ecuador. Develop and support backend functionalities.',

      'Social Account': 'https://ec.linkedin.com/in/fzzio/en',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Erick Israel Carrera ',

      Nickname: ' Frontend/Backend C# ',

      Descripción:
        'Frontend/Backend C# - Junior Developer - Mobile/Web Apps Developer. SYSINGENIA. oct. de 2020 - actualidad1 año 3 meses. Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/erick-israel-carrera-527253205',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Adrian Alexander Mena Manciati ',

      Nickname: ' Software Engineer ',

      Descripción:
        'Quito, Ecuador. Full-Stack developer. Front-end web and mobile banking applications. .NET and Java Spring backend services. Promoted to Tech lead for a ...',

      'Social Account': 'https://ec.linkedin.com/in/adrian-alexander-mena-manciati',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Edisson Fernando Sigua Loja ',

      Nickname: ' Desarrollador de back',

      Descripción:
        'Edisson Fernando Sigua Loja. Systems Engineer - Backend Developer en Eitecknología. Eiteknologia Cia. Ltda.Universidad de Cuenca. Cuenca, Azuay, Ecuador70 ...',

      'Social Account': 'https://ec.linkedin.com/in/edissonsigua',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },
  ],
  [
    {
      Nombre: 'Denys Maslyukov ',

      Nickname: ' Full',

      Descripción:
        'Web developer with focus on backend (PHP/Python). Freelance. Ecuador79 contactos ... Specialist in Backend for Web Apps, REST/JSON RPC API, third-party API ...',

      'Social Account': 'https://ec.linkedin.com/in/denyms',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Ricardo Herrera ',

      Nickname: ' iOS and Backend Developer ',

      Descripción:
        'Ricardo Herrera. Graduate from Universidad San Francisco de Quito. OshynUniversidad San Francisco de Quito. Ecuador500+ connections.',

      'Social Account': 'https://ec.linkedin.com/in/ricardo-herrera-36b53469/en',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Roberto Andrés Noboa Gárate ',

      Nickname: ' Quito, Pichincha, Ecuador',

      Descripción:
        'Roberto Andrés Noboa Gárate. Senior Backend Engineer. SIPECOM S.A.Escuela Superior Politécnica del Litoral. Quito, Pichincha, Ecuador232 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/roberto-andr%C3%A9s-noboa-g%C3%A1rate-1852a473',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jaime Andrade ',

      Nickname: ' Mobile Developer ',

      Descripción:
        'Jaime Andrade. Mobile & Backend Developer. CidenetUniversidad Católica de Santiago de Guayaquil. Ecuador256 contactos. Unirse para conectar.',

      'Social Account': 'https://ec.linkedin.com/in/jaime-andrade-71918396',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Cesar Tenemaza ',

      Nickname: ' Consultant Developer ',

      Descripción:
        'Cesar Tenemaza. Backend Developer | Java | Ruby | Tech enthusiastic. ThoughtWorksEscuela Politécnica Nacional. Quito, Pichincha, Ecuador301 contactos.',

      'Social Account': 'https://ec.linkedin.com/in/cesartenemaza',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Jeisson Steve Corredor Vargas ',

      Nickname: ' Universidad Católica de ...',

      Descripción:
        'Chief Technology Officer. Engicoders. ene. de 2018 - ene. de 2020 2 años 1 mes. Ecuador ... José Javier Velasco. Backend Developer en Coddix. Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/jeisson-steve-corredor-vargas-67386255',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Fabricio Orrala Parrales ',

      Nickname: ' Software Engineer ',

      Descripción:
        'Backend Web-Developer. CellForce. Jul 2018 - Nov 2020 2 years 5 months. Guayaquil, Ecuador. Develop and support backend functionalities.',

      'Social Account': 'https://ec.linkedin.com/in/fzzio/en',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Erick Israel Carrera ',

      Nickname: ' Frontend/Backend C# ',

      Descripción:
        'Frontend/Backend C# - Junior Developer - Mobile/Web Apps Developer. SYSINGENIA. oct. de 2020 - actualidad1 año 3 meses. Ecuador ...',

      'Social Account': 'https://ec.linkedin.com/in/erick-israel-carrera-527253205',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Adrian Alexander Mena Manciati ',

      Nickname: ' Software Engineer ',

      Descripción:
        'Quito, Ecuador. Full-Stack developer. Front-end web and mobile banking applications. .NET and Java Spring backend services. Promoted to Tech lead for a ...',

      'Social Account': 'https://ec.linkedin.com/in/adrian-alexander-mena-manciati',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },

    {
      Nombre: 'Edisson Fernando Sigua Loja ',

      Nickname: ' Desarrollador de back',

      Descripción:
        'Edisson Fernando Sigua Loja. Systems Engineer - Backend Developer en Eitecknología. Eiteknologia Cia. Ltda.Universidad de Cuenca. Cuenca, Azuay, Ecuador70 ...',

      'Social Account': 'https://ec.linkedin.com/in/edissonsigua',

      'Área Profesional': 'backend',

      Portal: 'Google',
    },
  ],
];

talentos.flat().forEach((talento, index) => {
  base('Talentos IT').create(talento, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId(), index);
  });
});
