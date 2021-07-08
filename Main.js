import {View} from "./module/view.js";
import {Autocomplete} from "./module/autocomplete.js";
import {API} from "./module/api.js";


new Autocomplete(new View(new API()), new API());


//отработь ошибку 422 (она из-за дебаунса)
