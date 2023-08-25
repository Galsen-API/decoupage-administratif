# decoupage-administratif
API pour rechercher les régions, les dépatements, ... au Sénégal  
Les informations sont tirées du site wikipedia.  
[API ici](https://api.idrissa-sall.com/decoupage-administratif/regions)

## Régions
### `decoupage-administratif/regions`
Retourne la liste de toutes les régions.
<details>
<summary>Résultats</summary>
{  
  "name" : "string",  
  "code" : number,
  "area" : number, en km²
  "population" : number
}
</details>

<details>
<summary>ERREUR</summary>
{  
  "message" : "message d'erreur"
}
</details>

### `decoupage-administratif/regions/{code}`
Retourne une région avec le paramètre code
<details>
<summary> Attributs </summary>
code : le nom de la région ou le code de la région
</details>
<details>
<summary>Résultats</summary>
{  
  "name" : "string",  
  "code" : number,
  "area" : number, en km²
  "population" : number
}
</details>

<details>
<summary>ERREUR</summary>
{  
  "message" : "message d'erreur"
}
</details>

### `decoupage-administratif/regions/{code}/departments`
Retourne la liste de tous les département de la région avec le code
<details>
<summary> Attributs </summary>
code : le nom de la région ou le code de la région
</details>
<details>
<summary>Résultats</summary>
{
  "name" : "string",
  "region_code" : number
},
</details>

<details>
<summary>ERREUR</summary>
{  
  "message" : "message d'erreur"
}
</details>

## Départements
### `decoupage-administratif/departments`
Retourne la liste de tous les départements.
<details>
<summary>Résultats</summary>
{
  "name" : "string",
  "region_code" : number
},
</details>

<details>
<summary>ERREUR</summary>
{  
  "message" : "message d'erreur"
}
</details>

### `decoupage-administratif/departments/{name}`
Retourne un département avec le paramètre code
<details>
<summary> Attributs </summary>
code : le nom du département
</details>
<details>
<summary>Résultats</summary>
{
  "name" : "string",
  "region_code" : number
},
</details>

<details>
<summary>ERREUR</summary>
{  
  "message" : "message d'erreur"
}
</details>

## Utilisation en local
- Cloner le projet
- Installer les dépendances avec `npm install`
- Compiler en js avec `npx tsc`
- Lancer le serveur avec `node .\build\server.js` ou `npm start`