let params = {
  search: "alpha",
  page: 2,
  sort: 'asc'
}

function createUrl(params) {
  console.log(`search=${params.search}&page=${params.page}$sort=${params.sort}`)
}
createUrl(params)


function createUrl1(params) {
  let url = "";
  for (let key in params) {
    url = url + `${key}=${params[key]}&`
  }
  let finalUrl = url.slice(0, url.length - 1)
  console.log(finalUrl)
}
createUrl1(params)