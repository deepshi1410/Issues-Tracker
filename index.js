
function getIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'))
  console.log('issues are', issues)
  var issuesList = document.getElementById('list')
  issuesList.innerHTML = ''
  if (issues != null) {
    for (let i = 0; i < issues.length; i++) {
      const id = issues[i].id
      const desc = issues[i].description;
      const severity = issues[i].severity;
      const assignedTo = issues[i].assignedTo;
      const status = issues[i].status;
      issuesList.innerHTML += '<div class="well">' +
        '<h6>Issue ID - ' + id + '</h6>' +
        '<p><span class="label label-info">' + status + '</span></p>' +
        '<h3>' + desc + '</h3>' +
        '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' ' +
        '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
        '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')">Close</a> ' +
        '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' + id + '\')">Delete</a>' +
        '</div>';
    }
    // document.getElementById('issueTrackerForm').addEventListener('submit', saveIssues);
  } else {
    console.log('no issues found')
  }

}
function saveIssues(e) {
  // this will be the id which will be assigned when an issue is saved in local storage
  const id = chance.guid()
  const desc = document.getElementById('desc')
  const severity = document.getElementById('severity')
  const assignedTo = document.getElementById('assignee')
  const status = 'Open'
  let issue = {
    id: id,
    description: desc,
    severity: severity,
    assignedTo: assignedTo,
    status: status
  }
  let issues
  if (localStorage.getItem('issues') === null) {
    issues = []
    issues.push(issue)
  } else {
    issues = JSON.parse(localStorage.getItem('issues'))
    issues.push(issue)
  }
  localStorage.setItem('issues', JSON.stringify(issues))
  console.log('setting issue', issues)
  document.getElementById('issueTrackerForm').reset();

  getIssues();

  e.preventDefault();
}
function setStatusClosed(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = "Closed";
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  getIssues();
}

function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));
  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1)
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  getIssues();
}
