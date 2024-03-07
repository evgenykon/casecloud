import { createApp } from 'vue'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    BiUiChecks, BiPersonBoundingBox, BiBraces, BiBug, BiKeyboard, BiXOctagon, BiJournalPlus,
    BiTrash, BiFolderMinus, BiFolderPlus, BiFileEarmark, BiFileEarmarkPlus,
    RiNodeTree, MdAccounttreeOutlined,
    IoAddCircleOutline, IoAddSharp, IoBanOutline, IoCheckboxOutline, IoCheckmarkCircleOutline,
    IoCheckmarkDoneOutline, IoCheckmark, IoCloseOutline, IoCreateOutline,
    IoDocumentTextOutline, IoExtensionPuzzleOutline, IoHomeOutline, IoPeopleOutline,
    LaUsersSolid,
    MdModeeditOutlined,
    RiSaveLine
} from "oh-vue-icons/icons";
addIcons(
    BiUiChecks, BiPersonBoundingBox, BiBraces, BiBug, BiKeyboard, BiXOctagon, BiJournalPlus,
    BiTrash, BiFolderMinus, BiFolderPlus, BiFileEarmark, BiFileEarmarkPlus,
    RiNodeTree, MdAccounttreeOutlined,
    IoAddCircleOutline, IoAddSharp, IoBanOutline, IoCheckboxOutline, IoCheckmarkCircleOutline,
    IoCheckmarkDoneOutline, IoCheckmark, IoCloseOutline, IoCreateOutline,
    IoDocumentTextOutline, IoExtensionPuzzleOutline, IoHomeOutline, IoPeopleOutline,
    LaUsersSolid,
    MdModeeditOutlined,
    RiSaveLine
);

import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import { pinia } from './stores'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(pinia);

app.component("OhVueIcon", OhVueIcon);

app.mount('#app')
