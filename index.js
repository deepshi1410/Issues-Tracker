
const getIssues = () => {
  var issues = JSON.parse(localStorage.getItem('issues'))
  var issuesList = document.getElementById('list')
  console.log(issuesList)
  list.innerHTML = ''
  for (let i = 0; i < issuesList.length; i++) {
    let id = issuesList[i].id
    list.innerHTML += '<h2>issue with id' + id + 'added'
  }

}