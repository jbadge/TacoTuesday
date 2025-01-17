import { CSSProperties } from 'react'

export interface CSSStarsProperties extends CSSProperties {
  '--rating': number
}

export type RestaurantType = {
  id?: number
  name: string
  description: string
  address: string
  telephone: string
  reviews: ReviewType[]
}

export const NullRestaurant: RestaurantType = {
  name: '',
  address: '',
  description: '',
  telephone: '',
  reviews: [],
}

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}

export type ReviewType = {
  id?: number
  summary: string
  body: string
  stars: number
  createdAt?: Date
  restaurantId: number
  user: LoggedInUser
}

export type NewReviewType = {
  id?: number
  summary: string
  body: string
  stars: number
  createdAt?: Date
  restaurantId: number
}

export type NewUserType = {
  fullName: string
  email: string
  password: string
}

export type LoginUserType = {
  email: string
  password: string
}

export type LoggedInUser = {
  id: number
  fullName: string
  email: string
}

export type LoginSuccess = {
  token: string
  user: LoggedInUser
}
