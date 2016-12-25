
import Application from './application';
import {status} from './data/data';
import 'whatwg-fetch';

window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions').
    then(status).
    then((response) => response.json()).
    then((data) => {
      Application.data = data;
    }).
    then(Application.showIntro()).
    catch(Application.showError());
