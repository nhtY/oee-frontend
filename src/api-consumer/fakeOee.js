let count = 1;
let redTamir = 0;
let lastTwelve = [];
let isReplaced = false;

console.log('last 12: ', lastTwelve);

function init() {
    console.log("init called ...");
    if(lastTwelve.length === 0) {
        console.log("initializing...");
        createTwelveOee();
    }else {
        const temp = [...lastTwelve];
        lastTwelve = Array();

        lastTwelve = [...temp];
    }
    console.log('last 12: ', lastTwelve);
}

function createSingleOee() {
    console.log("creating a single oee ...");
    redTamir += Math.random() * 10 >= 8? 1 : 0;
    let oee =  {
        "id": count ++,
        "ggOee": Math.random() * 6 + 68,
        "goee1s": Math.random() * 6 + 68,
        "ttGp": Math.random() * 2,
        "ttGg": Math.random() * 2,
        "tt1s": Math.random(),
        "redTamir": redTamir,
        "farkliUrun": 13,
        "urunGrubu": 12,
        "createdAt": "2023-09-13T09:49:24.962147",
    }
    console.log("single: ", oee);
    return twoPoints(oee);
}

function createTwelveOee() {
    console.log("creating twelve data");
    for (let index = 0; index < 12; index++) {
        lastTwelve[index] = createSingleOee();        
    }
}

function replaceLastOee(oee) {
    console.log("replacing");
    lastTwelve.splice(0 , 1);
    lastTwelve.push(oee);
}

export function getLastTwelve() {
    console.log("get last 12");
    init();
    if(! isReplaced) {
        replaceLastOee(createSingleOee());
    }
    isReplaced = !isReplaced;
    return {
        content: lastTwelve,
        totalElements: lastTwelve.length
    };
}

export function getCurrent() {
    console.log("get current");
    // replaceLastOee(createSingleOee());
    init();
    return lastTwelve[lastTwelve.length - 1];
}

function twoPoints(oee) {
    oee.ggOee = fixFloatingPoint(oee.ggOee);
    oee.goee1s = fixFloatingPoint(oee.goee1s);
    oee.ttGp = fixFloatingPoint(oee.ttGp);
    oee.ttGg = fixFloatingPoint(oee.ttGg);
    oee.tt1s = fixFloatingPoint(oee.tt1s);

    return oee;
}

export function localize(oee) {
    const newOee = {...oee};
    newOee.ggOee = newOee.ggOee.toLocaleString(document.documentElement.lang);
    newOee.goee1s = newOee.goee1s.toLocaleString(document.documentElement.lang);
    newOee.ttGp = newOee.ttGp.toLocaleString(document.documentElement.lang);
    newOee.ttGg = newOee.ttGg.toLocaleString(document.documentElement.lang);
    newOee.tt1s = newOee.tt1s.toLocaleString(document.documentElement.lang);

    return newOee;
}

function fixFloatingPoint(number) {
    return parseFloat(number.toFixed(2));
}