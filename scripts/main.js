const topics = ['Cranial', 'Midbrain', 'Pons', 'Medula']
const CHANGE_THE_ID = '[data-text-role ="target"]';
const TOPIC_TYPE_SELECTOR = '[data-text-role = "trigger"]';

const topicText = {
    'crainialTrigger':'crainialInfo hhdfhd', 
    'midBrainTrigger': 'hello world',
    'ponsTrigger':'stuff',
    'medulaTrigger':'LETS GOOO'
}

function setChanges(text){
    'use strict';
    let differentText = topicText[text];
    document.getElementById("topicText").innerHTML = differentText;
}

function addTopicClickHandler(topic){
    'use strict';
        document.getElementById(topic).addEventListener('click', function(event) {
            setChanges(topic);
        });
}

function initializeEvents(){
    addTopicClickHandler('crainialTrigger');
    addTopicClickHandler('midBrainTrigger');
    addTopicClickHandler('ponsTrigger');
    addTopicClickHandler('medulaTrigger');
}

initializeEvents();
