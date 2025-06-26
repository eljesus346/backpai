import PaisService from "#services/PaisService"

const paisservice = new PaisService()

class PaisController {
  async crearPais({ request, response }) {
    try {
      const { nombrepais, comunitario } = await request.body()
      const nuevo = await paisservice.crear({ nombrepais, comunitario })
      return response.json({ msj: "datos creados", datos: nuevo })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async listarPais({ response }) {
    try {
      const list = await paisservice.listar()
      return response.json({ msj: list })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarPaisId({ params, response }) {
    try {
      const cod_pais = params.cod_pais
      const listaID = await paisservice.listarId(cod_pais)
      return response.json({ mensaje: listaID })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizarPais({ params, request, response }) {
    try {
      const cod_pais = params.cod_pais
      const { nombrepais, comunitario } = await request.body()
      const actualizado = await paisservice.actualizar(cod_pais, { nombrepais, comunitario })
      return response.json({ msj: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminarPais({ params, response }) {
    try {
      const codpais = params.codpais
      const resultado = await paisservice.eliminar(codpais)
      return response.json({ msj: resultado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async contadorPais({ response }) {
    try {
      const resultado = await paisservice.conteo()
      return response.json({ msj: resultado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export default PaisController
