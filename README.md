# WorganicTabV2024 / v2 - Routing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Get clone 
> https://github.com/worganic/worganic-tab-v2024.git
> npm install
> cd .\worganic-tab-v2024\
> ng serve

## Git
git branch : WorganicTabV2024-v2-routing

## Project :
- Création de la nouvelle branche
    $ git checkout -b "WorganicTabV2024-v2-routing"
       
- Création de repertoire du project component :
    src/app... :
        /component
- Création des components :
    ~ ng g c component/home --skip-import   
    ~ ng g c component/abouts --skip-import   
    ~ ng g c component/design --skip-import
    ~ ng g c component/404 --skip-import   
    ~ ng g c component/Pagenotfound --skip-import   

- Modification des components pour les passer en mode Standalone.
    >> @Component --> standalone: true
- Ajout router dans le component app
    app.component.html -><router-outlet></router-outlet>
    app.component.ts -> @Component --> imports: [RouterOutlet, RouterLink]
- Modification du routing main.ts pour inclure home, design, abouts et Pagenotfound
- Lancement du projet :
    ~ ng server

## Infos plus :
Nous avons maintenant :
    index.html -> app.component (avec le menu) ->
        -> home (page  simple affiché par default et aucune url spécifique appelé)
        -> design (page simple - http://localhost:4200/design)
        -> abouts (page simple - http://localhost:4200/abouts)
        -> Pagenotfound (si l'url n'est pas reconnus par le routing)

## Historique :
Avant -> V1 -> Installation project 
........
Après -> v3 -> Mise en place de la structure des pages.

## Ressource :
- Page not found :
    https://www.geeksforgeeks.org/how-to-setup-404-page-in-angular-routing/

## Abouts
created by Johann Loreau
create at 2024/01/20 15h30
Le project évolura suivant les remarques et conseils des visiteurs.

## Divers
