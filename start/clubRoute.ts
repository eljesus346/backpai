import router from '@adonisjs/core/services/router'
import ClubController from '#controllers/ClubController'

const club = new ClubController()

router.get('/club', club.listarClub)

router.post('/club', club.crearClub)

router.get('/club/:cod_club',club.listarClubId)

