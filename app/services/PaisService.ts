// logica de negocio consultas
import Pai from '../models/pai.js'

export default class PaisService {

  async crear(datos) {
    return await Pai.create(datos)
  }

  async listar() {
    return await Pai.query()
  }

  async listaId(codpais) {
    return await Pai.query().where('codpais', codpais)
  }

  async actualizar(codpais, datos) {
    const lista = await Pai.query().where(codpais)
    lista.nombrepais = datos.nombrepais
    lista.comunitario=datos.comunitario
    lista.save()
    return lista
  }

  async eliminar(codpais: number){
    const encontrado = await Pai.find(codpais)
    if(encontrado){
      await encontrado.delete()
    return "eliminado."
    }
    else{
      return "No eliminado."
    }
  }
  async conteo(){
const resultado = await Pai.query().count('*')
    return resultado[0].$extras.conteo
}
}