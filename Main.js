import {View} from "./module/view.js";
import {Autocomplete} from "./module/autocomplete.js";
import {API} from "./module/api.js";


new Autocomplete(new View(new API()), new API());
// new AddToList(new View(new API), new API())


