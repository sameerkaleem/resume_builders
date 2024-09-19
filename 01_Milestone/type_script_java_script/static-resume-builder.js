"use strict";
'use client';
function toTheBottom() {
    const buttonId1 = document.getElementById('btn2');
    buttonId1?.addEventListener('click', () => {
        const h1_Id1 = document.getElementById('btn');
        if (h1_Id1) {
            h1_Id1.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
;
function toTheTop() {
    const buttonId2 = document.getElementById('btn');
    buttonId2?.addEventListener('click', () => {
        const h1_Id2 = document.getElementById('h1');
        if (h1_Id2) {
            h1_Id2.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
;
toTheTop();
toTheBottom();
