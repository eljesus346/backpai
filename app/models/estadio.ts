import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true })
  declare codestadio: number

  @column()
  declare estadio: string
  @column()
  declare direcion: string
  @column()
  declare codpostal: string
  @column()
  declare poblacion: string
  @column()
  declare provincia: string
  @column()
  declare capacidad: number
  @column()
  declare sentados: number
  @column()
  declare inauguracion: DateTime
  @column()
  declare dimenciones: number
  @column()
  declare codclub: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Estadio)
  declare estadios:relations.HasMany<typeof Estadio>
}