const libraryProgrammingLenguajes = [
  'react',
  'angular',
  'vue',
  'python',
  'javascript',
  'java',
  'qa',
  'c#',
  'c++',
  'android',
  'kotlin',
  'ios',
  'swift',
  'go',
  'ruby',
  'rubyonrails',
  'php',
  'html',
  'css',
  'mysql',
  'mongodb',
  'postgresql',
  'sql',
  'cobol',
  'ios',
  'android',
  'frontend',
  'backend',
  'devops',
  'c',
];

const existeName = (talento, value) => {
  if (value === 'name') {
    return talento.children[1].children[0].children[0].childElementCount > 1
      ? talento.children[1].children[0].children[0].children[0].outerText
      : talento.children[1].children[0].children[0].children[0].outerText;
  } else {
    return talento.children[1].children[0].children[0].childElementCount > 1
      ? talento.children[1].children[0].children[0].children[1].outerText
      : talento.children[1].children[0].children[0].children[0].outerText;
  }
};

const existParamsCaption = (talento) => {
  return talento.children[1].childElementCount > 2 ? true : false;
};

const getTalentsFromGithub = () => {
  try {
    let talents = [];
    const listTalents = document.querySelectorAll('.hx_hit-user');

    listTalents.forEach((talent) => {
      let name = existeName(talent, 'name');
      let nickName = existeName(talent, 'nickname');
      let link = talent.children[1].children[0].children[0].children[0].href;
      let caption = existParamsCaption(talent) ? talent.children[1].children[1].outerText : '';
      let ubication = existParamsCaption(talent)
        ? talent.children[1].children[2].children[0].outerText
        : talent.children[1].children[1].children[0].outerText;
      let eMail;

      if (existParamsCaption(talent)) {
        eMail =
          talent.children[1].children[2].childElementCount > 1
            ? talent.children[1].children[2].children[1].outerText
            : '';
      } else {
        eMail =
          talent.children[1].children[1].childElementCount > 1
            ? talent.children[1].children[1].children[1].outerText
            : '';
      }

      let area = window.location.href.slice('https://github.com/search?q='.length).toLowerCase();

      talents.push({
        Nombre: name,
        Nickname: nickName,
        Descripción: caption,
        'Social Account': link,
        Ubicación: ubication,
        Email: eMail,
        'Área Profesional': libraryProgrammingLenguajes.find((value) => area.includes(value)),
        Portal: 'Github',
      });
    });
    return talents;
  } catch (error) {
    return [];
  }
};

const getTalentsFromGoogle = () => {
  try {
    const listOfData = document.querySelectorAll('.v7W49e div.g');
    let talents = [];

    Array.from(listOfData).forEach((talent) => {
      let name = talent.querySelector('h3.LC20lb').innerText.split('-')[0];
      let nickName = talent.querySelector('h3.LC20lb').innerText.split('-')[1];
      let caption = talent.querySelector('div.VwiC3b span').innerText;
      let link = talent.querySelector(`a`).href;
      let area = window.location.href.slice('https://www.google.com/search?q='.length).toLowerCase();

      talents.push({
        Nombre: name,
        Nickname: nickName,
        Descripción: caption,
        'Social Account': link,
        'Área Profesional': libraryProgrammingLenguajes.find((value) => area.includes(value)),
        Portal: 'Google',
      });
    });

    return talents;
  } catch (error) {
    return [];
  }
};

switch (true) {
  case window.location.href.includes('github'):
    copy(getTalentsFromGithub());
    break;
  case window.location.href.includes('google'):
    copy(getTalentsFromGoogle());
    break;
}
