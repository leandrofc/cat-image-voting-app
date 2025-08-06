export const getSubId = (): string => {
    const key = 'cat_sub_id'
    let subId = localStorage.getItem(key)
    if (!subId) {
      subId = `user-${Math.random().toString(36).slice(2, 10)}`
      localStorage.setItem(key, subId)
    }
    return subId
}