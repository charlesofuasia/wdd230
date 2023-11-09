const activityList = document.querySelector('#learning-list');
const url = "https://charlesofuasia.github.io/wdd230/learning.json";

async function getList(){
    const response = await fetch(url);
    const data = await response.json();

    loadList(data.learningActivities);
}

const loadList = (learningActivities) => {
    learningActivities.forEach((activity) => {
        let list = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = activity.name;
        link.target = "_blank"
        link.href = activity.weblink;
        list.appendChild(link);
        activityList.append(list);
       
        activityList.append(list);
    
    })
}
getList()