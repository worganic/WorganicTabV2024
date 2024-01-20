# WorganicTabV2024 / v1 - Create project

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

## Project :
- Installation project
        ~ D:\project\v1\
        ~ ng new worganic-tab-v2024
            / Would you like to add Angular routing? (y/N) 
                -> N
            / Which stylesheet format would you like to use?
                -> SCSS

- Passage au projet en mode standalone :
        -> Modification main.ts
            \src\main.ts
                >> const routes: Routes = [
        -> Suppression app.module.ts
        -> Modification app.component.ts
            \src\app\app.component.ts
            Ajout du mode Standalone :
                >> @Component({...
                standalone: true
                ...
        -> Suppresion code app.component.html
            \src\app\app.component.html
        -> On le remplace par le code :
                >> <div>Page app.component</div>
        -> On ajoute <app-root></app-root> (app.component.ts : selector: 'app-root',)
            \src\app\app.component.ts 

    - Lancement du project :
        > ng serve
    "La V1 est ok"

- github : (sauvegarde du projet)
    Création du projet WorganicTabV2024
    -> https://github.com/worganic/WorganicTabV2024
    Mise en place de la première version
    PS D:\worganic-tab-v2024> git init
    PS D:\worganic-tab-v2024> git add .
    PS D:\worganic-tab-v2024> git commit -m "first commit"
    PS D:\worganic-tab-v2024> git branch -M main
    PS D:\worganic-tab-v2024> git remote add origin https://github.com/worganic/WorganicTabV2024.git
    PS D:\worganic-tab-v2024> git push -u origin main

## Historique :
Après -> v2 -> Mise en place du routing et de la structure du projet.

## Ressource :
    - Standalone :
    https://angular.io/guide/standalone-components
    - Tuto vidéo :
    https://www.youtube.com/watch?v=prnu9xVnZyU&t=3209s

## Abouts
created by Johann Loreau
create at 2024/01/20
Le project évolura suivant les remarques et conseils des visiteurs.

## Divers
Cette version est la seconde,
elle va reprendre une très très grosse partie de la permière version dispo sur gitLab, mais avec plus d'infos et de détails.
Une seule version gitlab sera dispo avec plusieurs branche afin de pourvoir amélioré le projet plus facilement.