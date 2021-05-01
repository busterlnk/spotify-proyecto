import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";
import { 
    faHome,
    faHistory, 
    faEllipsisH,
    faShieldAlt,
    faCog,
    faBell,
    faMicrophoneAlt,
    faRecordVinyl,
    faFilter,
    faPlayCircle,
    faSortDown} from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faSafari } from '@fortawesome/free-brands-svg-icons';

library.add(
    fas,
    faHome, 
    faSafari, 
    faHistory, 
    faEllipsisH, 
    faMicrophoneAlt,
    faSpotify,
    faShieldAlt,
    faCog,
    faBell,
    faRecordVinyl,
    faFilter,
    faPlayCircle,
    faSortDown
    );

export { FontAwesomeIcon };