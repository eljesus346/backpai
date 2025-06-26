//Consultas refenciadas al modelo.
//ORM LUCID lo vamos a utilizar por su estructura ya definida y su facilidad de uso.
import Club from '../models/club.js'

export class ClubServices {
 
async crearClub(data:Club) {
 return await Club.create(data)
   }

async verClub() {
  return await Club.query()
  }

async buscarId(id:number){
  return await Club.query().where('codclub',id)
}

async actualizarClub(id:number,data:Club){
    const resp = await Club.findByOrFail(id)
   return await Club.merge(data).save()
}

eliminarClub(id:number){
    const resp = await Club.findByOrFail(id)
    return await resp.delete()
}
}