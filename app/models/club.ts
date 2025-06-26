import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Club extends BaseModel {
  @column({ isPrimary: true })
  declare codclub: number
  @column()
  declare club: string
  @column()
  declare nombre: string
  @column()
  declare direcion: string
  @column()
  declare poblacion: string
  @column()
  declare provincia: string
  @column()
  declare cospostal: string
  @column() 
  declare telefono: string
  @column() 
  declare colores: string
  @column()
  declare himno: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Club)
  declare clubs:relations.BelongsTo<typeof Club>
}