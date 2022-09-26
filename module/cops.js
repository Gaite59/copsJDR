import COPSItemSheet from "./sheets/cops-itemsheet.js";

Hooks.once('init',() => {
    console.log("COPS | Initialisation du système COPS");

    Items.unregisterSheet('core',ItemSheet);
    Items.registerSheet("copsjdr",COPSItemSheet, {makedefault: true})
})