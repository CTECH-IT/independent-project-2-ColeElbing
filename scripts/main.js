const topics = ['Cranial', 'Midbrain', 'Pons', 'Medula']
const CHANGE_THE_ID = '[data-text-role ="target"]';
const TOPIC_TYPE_SELECTOR = '[data-text-role = "trigger"]';


//Creates tables based on what information is displayed
const topicText = {
    
    'cranialTrigger': 

    '<style>' +
        'table, th, td {' +
        'border:1px solid black;'+
        'border-collapse: collapse;'+
        '}'+
        'text-align: center;'+
    '</style>' +

    '<table style="width:100%">'+
    '<caption style="background:yellow; border: 1px solid rgb(0, 0, 0); border: 1px solid rgba(0, 0, 0, 0.8); border-bottom-style: none;"><b>Cranial Nerves</b></caption>'+
    '<tr>'+
        '<td style="width:10%"> CN I </th>'+
        '<td> Olfactory </th>'+
        '<td> Smell</th>'+
    '</tr>'+

    '<tr>'+
        '<td>CN II</td>'+
        '<td>Optic</td>'+
        '<td>Vision</td>'+
    '</tr>'+

    '<tr>'+
        '<td> CN III </th>'+
        '<td> Oculomotor </th>'+
        '<td> All other movements of eyes not covered by CN IV and CN VI, holding eyelid open, <b>pupil constriction</b></th>'+
    '</tr>'+

    '<tr>'+
        '<td>CN IV</td>'+
        '<td>Trochlear</td>'+
        '<td>Moves eye downward</td>'+
    '</tr>'+

    '<tr>'+
    '<td>CN V</td>'+
    '<td>Trigeminal</td>'+
    '<td>Largest three divisions of face- maxillary, mandibular, ophthalmic touch, pain, temperature motor control for chewing, <b>corneal reflex</b></td>'+
    '</tr>'+
    
    '<tr>'+
        '<td>CN VI</td>'+
        '<td>Abducens</td>'+
        '<td>Moves eye laterally</td>'+
    '</tr>'+

    '<tr>'+
        '<td>CN VII</td>'+
        '<td>Facial</td>'+
        '<td><b>Motor control lower 1/2 of face</b>- taste for anterior tongue, lacrimation, salivation, corneal, and blink reflexes.</td>'+
    '</tr>'+

    '<tr>'+
        '<td>CN VIII</td>'+
        '<td>Auditory</td>'+
        '<td>Hearing and equilibrium</td>'+
    '</tr>'+

    '<tr>'+
        '<td>CN VIIII</td>'+
        '<td>Glossopharyngeal</td>'+
        '<td>Taste- posterior tongue, <b>gag reflex</b>, swallow reflex, phonation</td>'+
    '</tr>'+

    
    '<tr>'+
        '<td>CN X</td>'+
        '<td>Vagus</td>'+
        '<td>'+
            '<ul>'+
                '<li>Parasympathetic - Decrease <b>HR</b>, decrease contractility, bronchoconstriction, vasodilation, coronary vasoconstriction, relaxes sphincters, stimulates peristalsis and secretions </li>'+
                '<li>Phonation, taste in posterior pharynx </li>'+
            '</ul>'+
        '</td>'+
    '</tr>'+

    '<tr>'+
        '<td>CN XI</td>'+
        '<td>Spinal accessory</td>'+
        '<td>Lift and shrug shoulders- flex neck</td>'+
    '</tr>'+

    '<tr>'+
        '<td>CN XII</td>'+
        '<td>Hypoglossal</td>'+
        '<td>Tongue movement, speech, swallowing</td>'+
    '</tr>',

    'midBrainTrigger':

    '<style>' +
        'table, th, td {' +
        'border:1px solid black;'+
        'border-collapse: collapse;'+
        '}'+
        'text-align: center;'+
    '</style>' +

    '<table style="width:100%">'+
    '<tr style="background-color: yellow;">'+
        '<th style="width:50%">Midbrain</th>'+
        '<th style="width:50%">Result of Injury</th>'+
    '</tr>'+

    '<tr>'+
        '<td>'+
            '<ul>'+
                '<li>Cranial nerves III, IV</li>'+
                '<li>Connects CN III, IV with V and VII to control extra ocular movements</li>'+
                '<li>Part of auditory and visual system Visual fields</li>'+
                '<li>Visual fields</li>'+
                '<li>Pupil reactions and accommodationsConjugate gaze</li>'+
                '<li>Conjugate gaze</li>'+
                "<li><b>Oculocephalic</b> reflex- doll's eye</li>"+
                '<li><b>Oculovestibular</b> reflex- cold caloric</li>'+
                '<li>Spontaneous eye movements</li>'+
                '<li>Receives impulses - position and movement</li>'+
                '<li>Vibration, proprioception, pain, temperature, tactile and pressure.</li>'+
            '</ul>'+
        '</td>'+
        '<td>'+
            '<ul>'+
                '<li>CN III palsy - eyes deviate down and out, ptosis</li>'+
                '<li>Double vision</li>'+
                '<li>Pupils mid-sized to dilated, sluggish to fixed</li>'+
                '<li>Decreased LOC</li>'+
                '<li>Abnormal Extension</li>'+
                '<li>Hyperventilation</li>'+
            '</ul>'+
        '</td>'+
    '</tr>',
    

    'ponsTrigger':
    
    '<style>' +
        'table, th, td {' +
        'border:1px solid black;'+
        'border-collapse: collapse;'+
        '}'+
        'text-align: center;'+
    '</style>' +

    '<table style="width:100%">'+
    '<tr style="background-color: yellow;">'+
        '<th style="width:50%">Pons</th>'+
        '<th style="width:50%">Result of Injury</th>'+
    '</tr>'+

    '<tr>'+
        '<td>'+
            '<ul>'+
                '<li>Cranial nerves V, VI, VII, VIII</li>'+
                '<li>Connection between cortex and cerebellum and spinal cord</li>'+
                '<li>Control of voluntary movements, respirations</li>'+
                '<li>Monitors activity of opposite cerebral hemisphere</li>'+
                '<li>Auditory transmission of impulses</li>'+
            '</ul>'+
        '</td>'+
        '<td>'+
            '<ul>'+
                '<li>Pinpoint Pupils</li>'+
                '<li>LOC - decreased to coma</li>'+
                '<li>Locked in syndrome</li>'+
                '<li>Extension or withdrawal to pain</li>'+
                '<li>Apneustic respirations (sustained inhalation)</li>'+
                '<li>Hyperventilation, cluster breathing</li>'+
                '<li>CN deficits</li>'+
            '</ul>'+
        '</td>'+
    '</tr>',

    'medulaTrigger':

    '<style>' +
        'table, th, td {' +
        'border:1px solid black;'+
        'border-collapse: collapse;'+
        '}'+
        'text-align: center;'+
    '</style>' +

    '<table style="width:100%">'+
    '<tr style="background-color: yellow;">' +
        '<th style="width:50%">Medulla</th>'+
        '<th style="width:50%">Result of Injury</th>'+
    '</tr>'+

    '<tr>'+
        '<td>'+
            '<ul>'+
                '<li>Cranial nerves IX, X, XI, XII</li>'+
                '<li>Autonomic control of respiration, heart rate, blood pressure, vomiting, and reflex arcs</li>'+
            '</ul>'+
        '</td>'+
        '<td>'+
            '<ul>'+
                '<li>Ipsilateral paralysis</li>'+
                '<li>Pupils dilated, fixed</li>'+
                '<li>Coma</li>'+
                '<li>Cluster breathing (periods of gasping breaths with irregular pauses)</li>'+
                '<li>Ataxic (irregular breathing patterns with slow deep breaths)</li>'+
                '<li>Hiccups</li>'+
                '<li>Absent cough, gag</li>'+
                '<li>Yawn</li>'+
            '</ul>'+
        '</td>'+
    '</tr>',
}

function setChanges(text){
    'use strict';
    $("#topicText").hide()
    let differentText = topicText[text];
    document.getElementById("topicText").innerHTML = differentText;
    $("#topicText").fadeIn(300)
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
