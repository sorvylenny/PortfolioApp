import { Component } from '@angular/core';
import { Portfolio } from '../interface/portfolio';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  constructor(private sanitizer: DomSanitizer) { }

  list_Icon: Portfolio[] = [
    { links: 'https://www.linkedin.com/in/katherine-flores-marin/', description: 'bi bi-linkssedin', description2: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' },
    { links: 'https://github.com/sorvylenny', description: 'bi bi-github', description2: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' },
    { links: 'mailto:floresmkatherine@gmail.com', description: 'bi bi-envelope-at-fill', description2: 'M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z', description3: 'M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z' },
    { links: '/assets/Hv_Katherine_Flores.pdf', description: 'bi bi-filetype-pdf', description2: 'M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z' }
  ];
  list_Experiencias: Portfolio[] = [
    { description: 'Freelancer', description2: 'Febrero 2024 - Agosto 2024', description3: ' De febrero a marzo estuve colaborando al proyecto en ionic de apolo. De marzo a abril, trabajé en un proyecto no code llamado Doggi con Apphive, fue entregado el MVP. De junio a agosto, participé en un proyecto inmobiliario en Meraki, integrando mapas con Leaflet en Angular 18, integraciones al backend con Php(Laravel), el cual se entregó el MVP.Posteriormente, continué colaborando en otro proyecto llamado Mercado Meet, desarrollado en Angular 17 con backend en nest.js.' },
    { description: 'Freelancer', description2: 'Enero 2023 - Enero 2024', description3: 'Participé activamente en el desarrollo de una aplicación para compras de artículos, donde desempeñé un papel fundamental en el diseño de interfaces web, la administración de sistemas y el manejo de bases de datos. Además, colaboré en un proyecto relacionado con bienes raíces, donde contribuí con la creación de scripts para optimizar el rendimiento de la aplicación.' },
    { description: 'Auxiliar de base de datos', description2: 'Mayo 2022 - Noviembre 2022', description3: 'Encargada de digitalizar documentos físicos de la empresa, específicamente registros de predios. Mapeaba rutas para garantizar un registro preciso. Participé en un proyecto para desarrollar una aplicación destinada a facilitar el trabajo de los peritos en este proceso.' },
    { description: 'Representante de servicio al cliente', description2: 'Mayo 2020 - Mayo 2022', description3: 'Atiendo llamadas para abordar las necesidades y consultas de los clientes, resolviendo problemas, proporcionando información sobre productos, asesorando sobre documentos y brindando orientación sobre la página web del banco, ofreciendo productos financieros.' }
  ];

  list_Proyectos: Portfolio[] = [
    { videoUrl: 'assets/video/appSystemSales.mp4', description: 'System Sales', description2: 'SystemSales es una aplicación de gestión de ventas que incluye módulo de autenticación, ventas, historial de ventas, reportes,, registro de usuarios, registro de productos y visualización de ventas de las últimas semanas. Ver mas información esta en el Readme.', description3: 'https://github.com/sorvylenny/AppSystemSale', title: '#Angular, #Material, #TypeScript' },
    { videoUrl: 'assets/video/appMoviesTest.mp4', description: 'App Movies Test', description2: 'Es una aplicación web que permite a los usuarios explorar una colección de películas. La aplicación presenta un sistema de inicio de sesión con correo electrónico y contraseña, una página principal que muestra películas y filtrado, mas información sobre la aplicación Readme.', links: 'https://moviesapptest.netlify.app/#/login', description3: 'https://github.com/sorvylenny/Movies_TestApp', title: '#Angular,#Material,#Tscript' },
    { videoUrl: 'assets/video/appFood.mp4', description: 'Food App', description2: 'La aplicación Food es una plataforma de recetas que te brinda la posibilidad de explorar y buscar una amplia variedad de recetas de todo el mundo. Con esta aplicación, podrás descubrir y disfrutar de deliciosas opciones gastronómicas para satisfacer tus gustos.', links: 'https://appmeals.netlify.app', description3: 'https://github.com/sorvylenny/foodMenuApp', title: '#Angular,#Bootstrap,#Tscript' },
    { videoUrl: 'assets/video/InmuebleWeb.mp4', description: 'Inmobiliaria FloresM Web', description2: 'La aplicación web de Inmobiliaria FloresM es el frontend para nuestro sistema de gestión inmobiliaria, diseñado para ofrecer a los usuarios una experiencia fluida y completa al buscar y visualizar inmuebles, Mas información en el Readme.', links: 'https://inmobiliariafloresm.netlify.app/', description3: 'https://github.com/sorvylenny/inmobiliariaFloresMApp', title: '#Angular,#Material,#Tscript' },
    { videoUrl: 'assets/video/InmobiliariaFloresMAppMovil.mp4', description: 'Inmobiliaria FloresM Movil', description2: 'La aplicación movil de Inmobiliaria FloresM es el frontend para nuestro sistema de gestión inmobiliaria, diseñado para ofrecer a los usuarios una experiencia fluida y completa al buscar y visualizar inmuebles, Mas información en el Readme.', description3: 'https://github.com/sorvylenny/InmobiliariaMovilApp', links: 'https://github.com/sorvylenny/InmobiliariaMovilApp/tree/master/apk', title: '#Ionic,#Material,#Angular' },
  ];
  list_Proyectos2: Portfolio[] = [
    { videoUrl: 'https://lottie.host/embed/8b865b26-9c69-4ac5-8ffd-650e4d284fb1/StBrubj6kC.json', description: 'System Sales', description2: 'System Sales Este proyecto es una API que proporciona unas funcionalidades para gestionar el sistema de facturación de ventas de repuestos de automóviles y motos. Ver mas información esta en el Readme.', description3: 'https://github.com/sorvylenny/SystemSales', links: 'http://www.systemsales.somee.com/swagger/index.html', title: '#C, #SQL Server, #Swagger' },
    { videoUrl: 'https://lottie.host/embed/37513c30-223f-4413-b8c2-26b22598eb26/a4Ihoz5NZR.json', description: 'Inmobiliaria FloresM Api', description2: 'Este proyecto es una API para ser utilizada en una aplicación web y movil. Permite la creación, edición y eliminación de inmuebles, así como la gestión de usuarios, mas información sobre la aplicación Readme.', description3: 'https://github.com/sorvylenny/inmobiliaria-FloresM-Api', links: 'https://vercel.com/sorvylenny87hotmailcoms-projects/inmobiliaria-flores-m-api', title: '#ExpressJs, #mongodb' },
  ];

  list_Tecnologias: Portfolio[] = [
    { links: 'assets/imagen/Angular.png' },
    { links: 'assets/imagen/JavaScript-logo.png' },
    { links: 'assets/imagen/Node.js1.svg' },
    { links: 'assets/imagen/typescript.png' },
    { links: 'assets/imagen/HTML5.png' },
    { links: 'assets/imagen/CSS3_logo.svg' },
    { links: 'assets/imagen/Sass_Logo_Color.svg' },
    { links: 'assets/imagen/github.png' },
    { links: 'assets/imagen/bootstrap.png' },
    { links: 'assets/imagen/material.png' },
    { links: 'assets/imagen/ionic.png' },
    { links: 'assets/imagen/C_Sharp.png' },
    { links: 'assets/imagen/mongodb.png' },
    { links: 'assets/imagen/microsoft-sql-server-logo.png' },

  ];
  abrirEnNuevaPagina(url: string) {
    window.open(url, '_blank');
  }
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
