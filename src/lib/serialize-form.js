function serializeForm (formdata) {
  const data = {}
  formdata.forEach((value, key) => {
    if (Object.keys(data).includes(key)) {
      const previousValue = data[key]
      if (Array.isArray(previousValue)) {
        data[key].push(value)
      } else {
        data[key] = [previousValue, value]
      }
    } else {
      data[key] = value
    }
  })
  return data
}

export default serializeForm
