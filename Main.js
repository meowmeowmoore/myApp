import {View} from "./module/view.js";
import {Autocomplete} from "./module/autocomplete.js";
import {API} from "./module/api.js";
import {Style} from "./module/style.js";


new Autocomplete(new View(new API(), new Style()), new API());