import ClubService from "#services/ClubService";


const clubServices = new ClubService()
class ClubController {
    async crearClub({ request, response }) {
        try {
            const { nombre, direccion, poblacion, provincia, cos_postal, telefono, colores, himno, fax, anioFundacion, presupuesto, presidente, vicepresidente }
                = request.body()
            const nuevoClub = await clubServices.crear({ nombre, direccion, poblacion, provincia, cos_postal, telefono, colores, himno, fax, anioFundacion, presupuesto, presidente, vicepresidente })
            return response.json({ msj: "datos creados", datos: nuevoClub })
        }
        catch (error) {
            return response.json({ error: error.message })
        }
    }
    async listarClub({ request, response }) {
        try {
            const list = await clubServices.listar()
            response.json({ msj: list })

        } catch (error) {
            return response.json({ error: error.message })

        }
    }
    async listarClubId({ params, request, response }) {
        try {
            const cod_club = params.cod_club
            const listaclub = await clubServices.buscarId(cod_club)
            return response.json({ mensaje: listaclub })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}
export default ClubController;