const topics = ['Crainial', 'Midbrain', 'Pons', 'Medula']
const CHANGE_THE_ID = '[data-text-role ="target"]';
const TOPIC_TYPE_SELECTOR = '[data-text-role = "trigger"]';

function setChanges(textId){
    'use strict';
    let differentText = document.querySelector(CHANGE_THE_ID);
    differentText.setAttribute('id' , textId)
    document.getElementById(textId).innerHTML = 'hello';

}

function idFromText(paragraph){
    'use strict';
    return paragraph.getAttribute('id')
}

function setIdChanges(paragraph){
    'use strict';
    setChanges(idFromText(paragraph));
}

function addTopicClickHandler(topic){
    'use strict';
    topic.addEventListener('click', function(event){
        event.preventDefault();
        setIdChanges(paragraph);
    });
}

function initializeEvents(){
    'use strict';
    topics.forEach(addTopicClickHandler);
}

initializeEvents();
