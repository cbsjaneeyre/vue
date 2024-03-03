import { makeRequest } from '../requests'

const addStartingZero = (value) => value < 10 ? `0${value}` : value // если день или месяц от 1 до 9, прибавляем впереди 0, чтобы формат был MM-DD

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams()
  const weekMS = 7 * 24 * 60 * 60 * 1000 // расчитываем кол-во миллисекунд в неделе
  const weekAgo = new Date(Date.now() - weekMS) // формируем дату из текущего кол-ва миллисекунд, вычитаем неделю (формат времени timestamp)

  // форматируем дату под формат YYYY-MM-DD
  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1), // месяцы в дате возвращаются с нуля, прибавляем 1
    addStartingZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'star')
  params.append('per_page', 10)
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}
