import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";
import { 
    faHome,
    faHistory, 
    faEllipsisH, 
    faMicrophoneAlt,
    faCircle} from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faSafari } from '@fortawesome/free-brands-svg-icons';

library.add(
    fas, 
    faHome, 
    faSafari, 
    faHistory, 
    faEllipsisH, 
    faMicrophoneAlt,
    faSpotify,
    faCircle);

export { FontAwesomeIcon };