function rpl_kana(str) {
    return str
        .replace(/[あアぁァー]/g, 'ا')
        .replace(/[かきくけこカキクケコ]/g, 'ك')
        .replace(/[がぎぐげごガギグゲゴ]/g, 'ج')
        .replace(/[さしすせそサシスセソ]/g, 'ث')
        .replace(/[ざじずぜぞザジズゼゾ]/g, 'ز')
        .replace(/[たちつてとタチツテト]/g, 'ت')
        .replace(/[だぢづでどダヂヅデド/]/g, 'د')
        .replace(/[なにぬねのナニヌネノんン]/g, 'ن')
        .replace(/[はひふへほハヒフヘホ]/g, 'ه')
        .replace(/[ばびぶべぼバビブベボ]/g, 'ب')
        .replace(/[ぱぴぷぺぽパピプペポ]/g, 'ف')
        .replace(/[まみむめもマミムメモ]/g, 'م')
        .replace(/[いぃイィやゃゆゅよょえぇエェヤユヨャュョ]/g, 'ي')
        .replace(/[らりるれろラリルレロ]/g, 'ر')
        .replace(/[わうぅウゥおぉオォをワヲ]/g, 'و')
        .replace(/[っッ]/g, ' ');
};

function replacetweets() {
    console.log('change dayo!!!!!');
    $('.tweet-text').each(function(){$(this).text(rpl_kana($(this).text()))});
};
console.log('repl defed');
replacetweets();
console.log('rpl done');

setInterval(replacetweets,5000);