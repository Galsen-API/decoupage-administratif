# decoupage-administratif
API pour rechercher les régions, les dépatements, ... au Sénégal

## Régions
### `api/regions`
Retourne la liste de toutes les régions.
<details>
<summary>Résultats</summary>
{  
  "name" : "string",  
  "code" : number,
  "superficie" : number,
  "population" : number
}
</details>

### `api/regions/{code}`
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
  "superficie" : number,
  "population" : number
}
</details>

### `api/regions/{code}/departments`
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

## Départements
### `api/departments`
