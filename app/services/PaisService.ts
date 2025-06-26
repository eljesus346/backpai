import Pai from '#models/pai'

export default class PaisService {
  async crear({ nombrepais, comunitario }) {
    return await Pai.create({ nombrepais, comunitario })
  }

  async listar() {
    return await Pai.all()
  }

  async listarId(codpais: number) {
    return await Pai.find(codpais)
  }

  async actualizar(codpais: number, data: { nombrepais: string, comunitario: string }) {
    const pais = await Pai.findOrFail(codpais)
    pais.merge(data)
    await pais.save()
    return pais
  }

  async eliminar(codpais: number) {
    const pais = await Pai.findOrFail(codpais)
    await pais.delete()
    return { eliminado: true }
  }

  async conteo() {
    const total = await Pai.query().count('* as total')
    return total[0]
  }
}
