import Resultat from "../models/Resultat";


export default class ResultatService {


static getResutat(id: number) : Promise<Resultat|null> {
    return fetch('http://localhost:3001/resultats/${id}')
    .then(response => response.json())
    .then(data => this.isEmpty(data) ? null : data);
}

// on regarde si la réponse est un object ouo un résultat 
// si elle renvois un objectif elle nous le dit 
static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;


}
//ajouter un resultat 
static addResultat(resultat: Resultat): Promise<Resultat> {
    return fetch (`http://localhost:3001/resultats`, {
        method: 'POST',
        body: JSON.stringify(resultat),
        headers: {'Content-Type' : 'application/json'}
    })
.then(Response => Response.json())
}

}
