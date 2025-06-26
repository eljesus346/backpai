import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Vehicule extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare placa:string
  

  @column()
  declare tipo:string

  @column()
  declare nombrepropietario:string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}