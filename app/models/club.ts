import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Club extends BaseModel {
  @column({ isPrimary: true })
  declare cod_club: number

  @column()
  declare club: string

  @column()
  declare nombre: string

  @column()
  declare direccion: string

  @column()
  declare poblacion: string

  @column()
  declare provincia: string

  @column()
  declare cos_postal: string

  @column()
  declare telefono: string

  @column()
  declare colores: string

  @column()
  declare himno: string

  @column()
  declare fax: string

  @column()
  declare anio_fundacion: number

  @column()
  declare presupuesto: number

  @column()
  declare presidente: string

  @column()
  declare vicepresidente: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
