const topics = ['Cranial', 'Midbrain', 'Pons', 'Medula']
const CHANGE_THE_ID = '[data-text-role ="target"]';
const TOPIC_TYPE_SELECTOR = '[data-text-role = "trigger"]';



const topicText = {
    'cranialTrigger': 'The Brainstem contains cranial nerves:' + 
    '<ul>' +
    '<li> <u>CN 1:</u> Olfactor, is responsible for smell. </li>'+
    '<li> <u>CN 2:</u> Optic, is responsible for vision. </li> '+
    '<li> <u>CN 3:</u> Oculomotor, controls all of the eyes movements not covered by CN 4 and CN 6, holding eyelid open, pupil constriction. </li>'+
    '<li> <u>CN 4:</u> Trochlear, moves the eye downward. </li>'+ 
    '<li> <u>CN 5:</u> Trigeminal, contols the Largest three divisions of face- maxillary, mandibular, ophthalmic touch, pain, temperature motor control for chewing, corneal reflex. </li>'+ 
    '<li> <u>CN 6:</u> Abducens, moves the eye laterally.</li> ' + 
    '<li> <u>CN 7:</u> Facial, motor control lower 1/2 of face- taste for anterior tongue, lacrimation, salivation, corneal, and blink reflexes.</li>' + 
    '<li> <u>CN 8:</u> Auditory, hearing and equilibrium. </li>' + 
    '<li> <u>CN 9:</u> Glossopharyngeal, Taste- posterior tongue, gag reflex, swallow reflex, phonation.</li> ' + 
    '<li> <u>CN 10:</u> Vagus, Parasympathetic - decrease HR, decrease contractility, bronchoconstriction, vasodilation, coronary vasoconstriction, relaxes sphincters, stimulates peristalsis and secretions. Phonation, taste in posterior pharynx. </li>' + 
    '<li> <u>CN 11:</u> Spinal Accessory, lifts and shrugs shoulders - flex neck. </li>'+ 
    '<li> <u>CN 12:</u> Hypoglossal, tongue movement, speech, swallowing.</li>' +
    '</ul>',
    

    'midBrainTrigger': 'MidBrain:',

    'ponsTrigger': 'Pons:',

    'medulaTrigger':'Medula:'
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
    addTopicClickHandler('cranialTrigger');
    addTopicClickHandler('midBrainTrigger');
    addTopicClickHandler('ponsTrigger');
    addTopicClickHandler('medulaTrigger');
}

initializeEvents();
